// scripts/generate-embeddings.ts
// Run with: npx ts-node --compiler-options '{"module":"CommonJS"}' scripts/generate-embeddings.ts

import { PrismaClient } from '@prisma/client';
import OpenAI from 'openai';

const prisma = new PrismaClient();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: text,
  });

  return response.data[0].embedding;
}

async function main() {
  console.log('🔄 Starting embedding generation...\n');

  // Get all FAQ entries
  const faqEntries = await prisma.fAQEntry.findMany({
    where: { isActive: true },
  });

  console.log(`Found ${faqEntries.length} FAQ entries to process.\n`);

  for (let i = 0; i < faqEntries.length; i++) {
    const entry = faqEntries[i];
    const text = `${entry.question} ${entry.answer}`;

    console.log(`[${i + 1}/${faqEntries.length}] Processing: ${entry.question.substring(0, 50)}...`);

    try {
      const embedding = await generateEmbedding(text);
      const embeddingString = `[${embedding.join(',')}]`;

      // Upsert embedding using raw SQL for pgvector
      await prisma.$executeRaw`
        INSERT INTO "FAQEmbedding" (id, "faqEntryId", embedding, "createdAt", "updatedAt")
        VALUES (
          gen_random_uuid(),
          ${entry.id},
          ${embeddingString}::vector,
          NOW(),
          NOW()
        )
        ON CONFLICT ("faqEntryId")
        DO UPDATE SET
          embedding = ${embeddingString}::vector,
          "updatedAt" = NOW()
      `;

      console.log(`   ✅ Embedding saved`);

      // Rate limiting - wait 200ms between requests
      await new Promise((resolve) => setTimeout(resolve, 200));
    } catch (error) {
      console.error(`   ❌ Error:`, error);
    }
  }

  console.log('\n✅ Embedding generation complete!');
}

main()
  .catch((e) => {
    console.error('❌ Script failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

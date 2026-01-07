import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { age, whatToLearn, whyLearning, experience, dailyGoal, howHeard } = body;

    // Create or update onboarding response
    const onboardingResponse = await prisma.onboardingResponse.upsert({
      where: { userId },
      create: {
        userId,
        age: age ? parseInt(age) : null,
        whatToLearn,
        whyLearning,
        experience,
        dailyGoal,
        howHeard,
        completed: true,
      },
      update: {
        age: age ? parseInt(age) : null,
        whatToLearn,
        whyLearning,
        experience,
        dailyGoal,
        howHeard,
        completed: true,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: onboardingResponse });
  } catch (error) {
    console.error('Error saving onboarding:', error);
    return NextResponse.json(
      { error: 'Failed to save onboarding data' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const onboardingResponse = await prisma.onboardingResponse.findUnique({
      where: { userId },
    });

    return NextResponse.json({ data: onboardingResponse });
  } catch (error) {
    console.error('Error fetching onboarding:', error);
    return NextResponse.json(
      { error: 'Failed to fetch onboarding data' },
      { status: 500 }
    );
  }
}

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#0F1110' }}>
      <SignIn
        appearance={{
          elements: {
            rootBox: 'mx-auto',
            card: 'bg-[#1A1D1E] border border-[#2A2D2E]',
          },
        }}
      />
    </div>
  );
}

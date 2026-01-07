import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#0F1110' }}>
      <SignUp
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

'use client';

import { useState } from 'react';
import { useUser, useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

// Color constants
const C = {
  primary: '#10B981',
  primaryDark: '#059669',
  primaryDarker: '#047857',
  primaryGlow: 'rgba(16, 185, 129, 0.15)',
  bgDark: '#0F1110',
  bgCard: '#1A1D1E',
  bgElevated: '#252829',
  border: '#2A2D2E',
  text: '#FFFFFF',
  textSecondary: '#9CA3AF',
  textMuted: '#6B7280',
  accent: '#38BDF8',
  error: '#EF4444',
  sand: '#FCD34D',
};

export default function OnboardingV2() {
  const { user, isLoaded } = useUser();
  const { signUp } = useSignUp();
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    age: '',
    name: '',
    email: '',
    password: '',
    whatToLearn: '',
    whyLearning: '',
    experience: '',
    dailyGoal: '',
    howHeard: '',
  });

  const [errors, setErrors] = useState({ email: '', password: '' });

  // If user is already logged in, they might have already completed onboarding
  if (isLoaded && user) {
    // Check if they've completed onboarding, if so redirect to dashboard
    // For now, let's show the preference questions
    if (step < 7) {
      setStep(7);
    }
  }

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const updateField = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (field === 'email' || field === 'password') {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleSignUp = async () => {
    try {
      if (!signUp) return;

      const result = await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
        firstName: formData.name,
      });

      // Send verification email
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // For now, just move to next step
      // In production, you'd show a verification screen
      handleNext();
    } catch (err: any) {
      console.error('Sign up error:', err);
      setErrors({ ...errors, email: err.errors?.[0]?.message || 'Sign up failed' });
    }
  };

  const handleSaveOnboarding = async () => {
    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/dashboard');
      }
    } catch (err) {
      console.error('Error saving onboarding:', err);
    }
  };

  // Component helper functions
  const RobotMascot = ({ size = 120, emotion = 'default' }: { size?: number; emotion?: string }) => (
    <div className="relative animate-float" style={{ width: size, height: size * 1.2 }}>
      <svg viewBox="0 0 200 240" fill="none">
        {/* Antenna */}
        <g style={{ transformOrigin: '140px 45px' }} className="animate-wave">
          <line x1="140" y1="45" x2="165" y2="15" stroke={C.primary} strokeWidth="4" strokeLinecap="round" />
          <circle cx="165" cy="15" r="8" fill={C.primary} />
          <circle cx="165" cy="15" r="5" fill="#34D399" className="animate-pulse" />
        </g>
        {/* Head */}
        <ellipse cx="100" cy="95" rx="55" ry="50" fill={C.bgCard} stroke={C.border} strokeWidth="3" />
        {/* Eyes */}
        {emotion === 'excited' ? (
          <>
            <text x="62" y="105" fontSize="28" fill={C.primary}>★</text>
            <text x="108" y="105" fontSize="28" fill={C.primary}>★</text>
          </>
        ) : (
          <>
            <circle cx="75" cy="90" r="12" fill={C.bgDark} />
            <circle cx="125" cy="90" r="12" fill={C.bgDark} />
            <circle cx="75" cy="90" r="8" fill={C.primary} />
            <circle cx="125" cy="90" r="8" fill={C.primary} />
            <circle cx="72" cy="87" r="3" fill="white" opacity="0.8" />
            <circle cx="122" cy="87" r="3" fill="white" opacity="0.8" />
          </>
        )}
        {/* Smile */}
        <path
          d={`M 80 115 Q 100 ${emotion === 'excited' ? '135' : '130'} 120 115`}
          stroke={C.primary}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Body */}
        <path d="M 60 145 Q 60 180 80 200 L 120 200 Q 140 180 140 145 Z" fill={C.bgCard} stroke={C.border} strokeWidth="3" />
        {/* Feet */}
        <ellipse cx="85" cy="215" rx="18" ry="12" fill={C.bgCard} stroke={C.border} strokeWidth="2" />
        <ellipse cx="115" cy="215" rx="18" ry="12" fill={C.bgCard} stroke={C.border} strokeWidth="2" />
      </svg>
    </div>
  );

  const PrimaryButton = ({ text, onClick, disabled }: { text: string; onClick: () => void; disabled?: boolean }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className="btn w-full py-4 rounded-2xl font-bold text-base uppercase tracking-wider transition-all"
      style={{
        background: disabled ? C.bgElevated : `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryDark} 100%)`,
        color: disabled ? C.textMuted : 'white',
        boxShadow: disabled ? 'none' : `0 4px 0 ${C.primaryDarker}`,
      }}
    >
      {text}
    </button>
  );

  // Render different steps
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-6" style={{ background: C.bgDark }}>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="animate-pop">
                <RobotMascot size={180} />
              </div>
              <h1 className="text-4xl font-bold mt-4 animate-fade-in" style={{ color: C.primary, animationDelay: '0.2s' }}>
                maintor
              </h1>
              <p className="text-lg mt-2 animate-fade-in" style={{ color: C.textMuted, animationDelay: '0.3s' }}>
                Learn AI. For free. Forever.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <PrimaryButton text="Get Started" onClick={handleNext} />
              <button
                onClick={() => router.push('/sign-in')}
                className="btn w-full py-4 rounded-2xl font-bold text-base uppercase tracking-wider border-2"
                style={{ borderColor: C.primary, color: C.primary, background: 'transparent' }}
              >
                I Already Have An Account
              </button>
            </div>
          </div>
        );

      case 1:
        // Age input
        const ageValid = formData.age && parseInt(formData.age) > 0 && parseInt(formData.age) < 120;
        return (
          <div className="min-h-screen flex flex-col" style={{ background: C.bgDark }}>
            <div className="p-4">
              <button onClick={handleBack} className="p-2 -ml-2" style={{ color: C.textMuted }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="flex-1 p-6">
              <h1 className="text-2xl font-bold mb-4" style={{ color: C.text }}>
                How old are you?
              </h1>
              <input
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={(e) => updateField('age', e.target.value)}
                className="w-full px-4 py-4 rounded-2xl text-lg"
                style={{
                  background: C.bgCard,
                  border: `2px solid ${ageValid ? C.primary : C.border}`,
                  color: C.text,
                }}
              />
            </div>
            <div className="p-6">
              <PrimaryButton text="Next" onClick={handleNext} disabled={!ageValid} />
            </div>
          </div>
        );

      case 2:
        // Name input
        return (
          <div className="min-h-screen flex flex-col" style={{ background: C.bgDark }}>
            <div className="p-4">
              <button onClick={handleBack} className="p-2 -ml-2" style={{ color: C.textMuted }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="flex-1 p-6">
              <h1 className="text-2xl font-bold mb-4" style={{ color: C.text }}>
                What is your name?
              </h1>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full px-4 py-4 rounded-2xl text-lg"
                style={{
                  background: C.bgCard,
                  border: `2px solid ${formData.name ? C.primary : C.border}`,
                  color: C.text,
                }}
              />
            </div>
            <div className="p-6">
              <PrimaryButton text="Next" onClick={handleNext} disabled={!formData.name} />
            </div>
          </div>
        );

      case 3:
        // Email input
        const emailValid = formData.email.includes('@') && formData.email.includes('.');
        return (
          <div className="min-h-screen flex flex-col" style={{ background: C.bgDark }}>
            <div className="p-4">
              <button onClick={handleBack} className="p-2 -ml-2" style={{ color: C.textMuted }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="flex-1 p-6">
              <h1 className="text-2xl font-bold mb-4" style={{ color: C.text }}>
                What is your email{formData.name ? `, ${formData.name}` : ''}?
              </h1>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full px-4 py-4 rounded-2xl text-lg"
                style={{
                  background: C.bgCard,
                  border: `2px solid ${errors.email ? C.error : emailValid ? C.primary : C.border}`,
                  color: C.text,
                }}
              />
              {errors.email && (
                <p className="mt-2 text-sm" style={{ color: C.error }}>
                  {errors.email}
                </p>
              )}
            </div>
            <div className="p-6">
              <PrimaryButton text="Next" onClick={handleNext} disabled={!emailValid} />
            </div>
          </div>
        );

      case 4:
        // Password input
        const passwordValid = formData.password.length >= 6;
        return (
          <div className="min-h-screen flex flex-col" style={{ background: C.bgDark }}>
            <div className="p-4">
              <button onClick={handleBack} className="p-2 -ml-2" style={{ color: C.textMuted }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="flex-1 p-6">
              <h1 className="text-2xl font-bold mb-4" style={{ color: C.text }}>
                Create a password
              </h1>
              <input
                type="password"
                placeholder="Password (min 6 characters)"
                value={formData.password}
                onChange={(e) => updateField('password', e.target.value)}
                className="w-full px-4 py-4 rounded-2xl text-lg"
                style={{
                  background: C.bgCard,
                  border: `2px solid ${passwordValid ? C.primary : C.border}`,
                  color: C.text,
                }}
              />
              {formData.password && !passwordValid && (
                <p className="mt-2 text-sm" style={{ color: C.textMuted }}>
                  Password must be at least 6 characters
                </p>
              )}
            </div>
            <div className="p-6">
              <PrimaryButton text="Create Profile" onClick={handleSignUp} disabled={!passwordValid} />
            </div>
          </div>
        );

      case 5:
        // Success screen
        return (
          <div className="min-h-screen flex flex-col" style={{ background: C.bgDark }}>
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <div className="mb-6">
                <div className="px-6 py-4 rounded-2xl" style={{ background: C.bgCard, border: `1px solid ${C.border}` }}>
                  <p className="text-lg text-center" style={{ color: C.text }}>
                    Welcome, {formData.name}! Your profile has been created.
                  </p>
                </div>
              </div>
              <RobotMascot size={180} emotion="excited" />
            </div>
            <div className="p-6">
              <PrimaryButton text="Continue" onClick={handleNext} />
            </div>
          </div>
        );

      case 6:
        // What to learn
        const options = [
          { id: 'chatbots', icon: '💬', label: 'AI Chatbots', sub: 'ChatGPT, Claude' },
          { id: 'images', icon: '🎨', label: 'Image Generation', sub: 'Midjourney, DALL·E' },
          { id: 'writing', icon: '✍️', label: 'AI Writing', sub: 'Content & docs' },
          { id: 'coding', icon: '💻', label: 'AI Coding', sub: 'Copilot, Cursor' },
          { id: 'productivity', icon: '⚡', label: 'Productivity', sub: 'Automation' },
          { id: 'all', icon: '🎯', label: 'Everything!', sub: 'Complete journey' },
        ];

        return (
          <div className="min-h-screen flex flex-col" style={{ background: C.bgDark }}>
            <div className="p-4">
              <button onClick={handleBack} className="p-2 -ml-2" style={{ color: C.textMuted }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              <h1 className="text-2xl font-bold mb-6" style={{ color: C.text }}>
                What would you like to learn?
              </h1>
              <div className="space-y-3">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => updateField('whatToLearn', opt.id)}
                    className="w-full p-4 rounded-xl flex items-center gap-4 text-left border transition-all"
                    style={{
                      background: formData.whatToLearn === opt.id ? C.primaryGlow : C.bgCard,
                      borderColor: formData.whatToLearn === opt.id ? C.primary : C.border,
                    }}
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="font-semibold flex-1" style={{ color: formData.whatToLearn === opt.id ? C.primary : C.text }}>
                      {opt.label}
                    </span>
                    <span className="text-sm" style={{ color: C.textMuted }}>
                      {opt.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6">
              <PrimaryButton text="Continue" onClick={handleNext} disabled={!formData.whatToLearn} />
            </div>
          </div>
        );

      case 7:
        // Why learning
        const whyOptions = [
          { id: 'career', icon: '💼', label: 'Boost my career' },
          { id: 'productivity', icon: '🧠', label: 'Be more productive' },
          { id: 'fun', icon: '🎉', label: 'Just for fun' },
          { id: 'creative', icon: '🎨', label: 'Creative projects' },
          { id: 'business', icon: '📈', label: 'Grow my business' },
          { id: 'curious', icon: '🔍', label: 'Stay curious' },
        ];

        return (
          <div className="min-h-screen flex flex-col" style={{ background: C.bgDark }}>
            <div className="p-4">
              <button onClick={handleBack} className="p-2 -ml-2" style={{ color: C.textMuted }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              <h1 className="text-2xl font-bold mb-6" style={{ color: C.text }}>
                Why do you want to learn AI?
              </h1>
              <div className="space-y-3">
                {whyOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => updateField('whyLearning', opt.id)}
                    className="w-full p-4 rounded-xl flex items-center gap-4 text-left border transition-all"
                    style={{
                      background: formData.whyLearning === opt.id ? C.primaryGlow : C.bgCard,
                      borderColor: formData.whyLearning === opt.id ? C.primary : C.border,
                    }}
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="font-semibold" style={{ color: formData.whyLearning === opt.id ? C.primary : C.text }}>
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6">
              <PrimaryButton text="Continue" onClick={handleNext} disabled={!formData.whyLearning} />
            </div>
          </div>
        );

      case 8:
        // Final step - save and redirect
        handleSaveOnboarding();
        return (
          <div className="min-h-screen flex flex-col items-center justify-center p-6" style={{ background: C.bgDark }}>
            <RobotMascot size={160} />
            <p className="text-lg font-semibold uppercase tracking-widest mt-8" style={{ color: C.textMuted }}>
              Setting up your journey...
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pop {
          0% { transform: scale(0); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; opacity: 0; }
        .animate-pop { animation: pop 0.4s ease-out forwards; }
        .animate-wave { animation: wave 2s ease-in-out infinite; }
        .btn { transition: all 0.15s ease; cursor: pointer; border: none; outline: none; }
        .btn:hover:not(:disabled) { transform: scale(1.02); }
        .btn:active:not(:disabled) { transform: scale(0.98) translateY(2px); }
        .btn:disabled { cursor: not-allowed; opacity: 0.5; }
      `}</style>
      {renderStep()}
    </>
  );
}

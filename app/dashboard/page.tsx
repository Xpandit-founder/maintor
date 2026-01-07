import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    include: {
      xp: true,
      onboardingResponse: true,
    },
  });

  return (
    <div className="min-h-screen p-8" style={{ background: '#0F1110', color: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#10B981' }}>
          Welcome to Maintor! 🎉
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Your AI learning journey starts here, {user?.firstName || 'Learner'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl" style={{ background: '#1A1D1E', border: '1px solid #2A2D2E' }}>
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold" style={{ color: '#10B981' }}>
              {user?.xp?.totalXP || 0} XP
            </div>
            <div className="text-sm text-gray-500">Total Experience</div>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: '#1A1D1E', border: '1px solid #2A2D2E' }}>
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold" style={{ color: '#10B981' }}>
              Level {user?.xp?.currentLevel || 1}
            </div>
            <div className="text-sm text-gray-500">Your Level</div>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: '#1A1D1E', border: '1px solid #2A2D2E' }}>
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold" style={{ color: '#10B981' }}>
              {user?.onboardingResponse?.dailyGoal || 10} min
            </div>
            <div className="text-sm text-gray-500">Daily Goal</div>
          </div>
        </div>

        {user?.onboardingResponse && (
          <div className="p-6 rounded-2xl mb-8" style={{ background: '#1A1D1E', border: '1px solid #2A2D2E' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#10B981' }}>
              Your Learning Profile
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-gray-500">Interested in:</span>{' '}
                <span className="font-semibold capitalize">{user.onboardingResponse.whatToLearn?.replace('_', ' ')}</span>
              </div>
              <div>
                <span className="text-gray-500">Learning to:</span>{' '}
                <span className="font-semibold capitalize">{user.onboardingResponse.whyLearning?.replace('_', ' ')}</span>
              </div>
              <div>
                <span className="text-gray-500">Experience level:</span>{' '}
                <span className="font-semibold capitalize">{user.onboardingResponse.experience}</span>
              </div>
            </div>
          </div>
        )}

        <div className="text-center py-12">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold mb-2">Dashboard Coming Soon!</h2>
          <p className="text-gray-400">
            We're building an amazing learning experience for you. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}

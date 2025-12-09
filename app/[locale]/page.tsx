import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { UsersContent } from '@/components/users-content';
import { Loader } from '@/components/loader';

export default async function Home() {
  const t = await getTranslations('homepage');

  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-[1400px] p-8">
        <h1 className="mb-8 text-3xl font-bold">{t('title')}</h1>
        <Suspense fallback={<Loader />}>
          <UsersContent />
        </Suspense>
      </div>
    </div>
  );
}


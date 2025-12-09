'use client';

import { useTranslations } from 'next-intl';

type UsersSearchPropsType = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filteredCount: number;
};

export const UsersSearch = ({
  searchQuery,
  onSearchChange,
  filteredCount,
}: UsersSearchPropsType) => {
  const t = useTranslations('users');

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder={t('searchPlaceholder')}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-zinc-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800"
      />
      {searchQuery && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {filteredCount === 1
            ? t('foundUsers', { count: filteredCount })
            : t('foundUsersPlural', { count: filteredCount })}
        </p>
      )}
    </div>
  );
};


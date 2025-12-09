'use client';

import { useTranslations } from 'next-intl';

type UsersPaginationPropsType = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const UsersPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: UsersPaginationPropsType) => {
  const t = useTranslations('users');

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
      >
        {t('previous')}
      </button>
      <span className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
        {t('page')} {currentPage} {t('of')} {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
      >
        {t('next')}
      </button>
    </div>
  );
};


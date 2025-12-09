'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import type { UserType } from '@/types/user.types';
import { UserRow } from './user-row';
import { UsersSearch } from './users-search';
import { UsersPagination } from './users-pagination';

type UsersTablePropsType = {
  users: UserType[];
  error?: string | null;
};

const USERS_PER_PAGE = 5;

export const UsersTable = ({ users, error }: UsersTablePropsType) => {
  const t = useTranslations('users');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) {
      return users;
    }

    const query = searchQuery.toLowerCase().trim();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }, [users, searchQuery]);

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (error) {
    return (
      <div className="mb-4 rounded bg-red-100 p-4 text-red-700">{error}</div>
    );
  }

  return (
    <div className="w-full">
      <UsersSearch
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        filteredCount={filteredUsers.length}
      />

      <div className="overflow-x-auto">
        <h2 className="mb-4 text-xl font-semibold">
          {t('usersTitle')}
        </h2>
        <table className="min-w-full border-collapse rounded bg-white shadow dark:bg-zinc-800">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-zinc-900">
            <th className="px-4 py-3 text-left text-sm font-semibold">
              {t('usersTable.id')}
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              {t('usersTable.name')}
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              {t('usersTable.username')}
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              {t('usersTable.email')}
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              {t('usersTable.phone')}
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              {t('usersTable.website')}
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              {t('usersTable.city')}
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              {t('usersTable.company')}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
              >
                {t('noUsersFound')}
              </td>
            </tr>
          ) : (
            paginatedUsers.map((user) => <UserRow key={user.id} user={user} />)
          )}
        </tbody>
      </table>
      </div>

      <UsersPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};


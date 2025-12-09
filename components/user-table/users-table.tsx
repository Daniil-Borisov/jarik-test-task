'use client';

import { useTranslations } from 'next-intl';
import type { UserType } from '@/types/user.types';
import { UserRow } from './user-row';

type UsersTablePropsType = {
  users: UserType[];
  error?: string | null;
};

export const UsersTable = ({ users, error }: UsersTablePropsType) => {
  const t = useTranslations('users');

  if (error) {
    return (
      <div className="mb-4 rounded bg-red-100 p-4 text-red-700">{error}</div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <h2 className="mb-4 text-xl font-semibold">Users ({users.length})</h2>
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
          {users.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
              >
                {t('noUsersFound')}
              </td>
            </tr>
            ) : (
              users.map((user) => <UserRow key={user.id} user={user} />)
            )}
        </tbody>
      </table>
    </div>
  );
};


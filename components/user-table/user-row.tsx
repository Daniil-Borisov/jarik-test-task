'use client';

import type { UserType } from '@/types/user.types';

type UserRowPropsType = {
  user: UserType;
};

export const UserRow = ({ user }: UserRowPropsType) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-zinc-700">
      <td className="px-4 py-3 text-sm">{user.id}</td>
      <td className="px-4 py-3 text-sm font-medium">{user.name}</td>
      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
        {user.username}
      </td>
      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
        {user.email}
      </td>
      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
        {user.phone}
      </td>
      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          {user.website}
        </a>
      </td>
      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
        {user.address.city}
      </td>
      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
        {user.company.name}
      </td>
    </tr>
  );
};


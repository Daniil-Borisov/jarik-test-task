import { fetchUsers } from '@/api/users.api';
import { UsersTable } from './user-table/users-table';
import { getTranslations } from 'next-intl/server';
import type { UserType } from '@/types/user.types';

export const UsersContent = async () => {
  const tErrors = await getTranslations('errors');

  let users: UserType[] = [];
  let error: string | null = null;

  try {
    users = await fetchUsers();
  } catch (err) {
    error = tErrors('somethingWentWrong');
  }

  return <UsersTable users={users} error={error} />;
};


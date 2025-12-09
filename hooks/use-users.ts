'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useAppStore } from '@/store';
import { fetchUsers } from '@/api/users.api';

export const useUsers = () => {
  const tErrors = useTranslations('errors');
  const { isLoading, error, users, setLoading, setError, setUsers } = useAppStore();

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(tErrors('somethingWentWrong'));
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [setLoading, setError, setUsers, tErrors]);

  return { users, isLoading, error };
};


import { cookies } from 'next/headers';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export const get = async (name: string): Promise<RequestCookie | undefined> => {
  const cookieStore = await cookies();
  return cookieStore.get(name);
};

export const set = async (name: string, data: string): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.set(name, data);
};

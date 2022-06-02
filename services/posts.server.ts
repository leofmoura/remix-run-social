import { db } from '../services/db.server';

export type { Post } from '@prisma/client';

export const getPosts = () => {
  return db.post.findMany();
};

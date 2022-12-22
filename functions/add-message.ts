import { PrismaClient } from '@prisma/client';
import { NuboContext } from 'nubo';

const prisma = new PrismaClient();

export const method = 'post';
export const path = '/messages';

export const handler = async (ctx: NuboContext) => {
  const message = await prisma.message.create({
    data: {
      text: 'This is a new message.',
    },
  });

  return message;
};

import { PrismaClient } from '@prisma/client';
import { NuboContext } from 'nubo';

const prisma = new PrismaClient();

export const method = 'post';
export const path = '/messages';

export const handler = async (ctx: NuboContext) => {
  const data = ctx.req.body;
  const message = await prisma.message.create({
    data,
  });

  return message;
};

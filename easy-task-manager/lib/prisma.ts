import { PrismaClient } from '@prisma/client';

// Ensure that there is only one instance of PrismaClient in development to avoid too many connections error
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}
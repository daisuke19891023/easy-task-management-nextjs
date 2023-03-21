import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from './prisma';

export async function handleAuthCallback(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (session) {
    // Handle user creation/updating in the database
    const { email, name, image } = session.user;

    await prisma.user.upsert({
      where: { email },
      update: {
        name,
        image,
      },
      create: {
        email,
        name,
        image,
      },
    });
  }

  res.redirect('/');
}

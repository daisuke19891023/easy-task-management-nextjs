import { NextApiRequest, NextApiResponse } from 'next';
import { handleAuthCallback } from '../../../lib/auth';

export default async function callback(req: NextApiRequest, res: NextApiResponse) {
  await handleAuthCallback(req, res);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server';

type Data = {
  name: string
}

export const config = {
  runtime: 'edge',
};

export default (req: NextRequest) => {
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
};
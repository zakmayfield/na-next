import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { userId } = auth();

  if (!userId) {
    return new Response('Not authenticated', {
      status: 400,
    });
  }

  return NextResponse.json({ test: 'test' });
}

/*
  const body = req.body;
  console.log('api:create-account:body', body);

  const user = await db.user.create({
    data: {
      ref: id,
    },
  });
*/

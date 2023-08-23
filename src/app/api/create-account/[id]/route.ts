import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();

  if (!userId) {
    return new Response('Not authenticated', {
      status: 400,
    });
  }

  const { id } = params;

  const user = await db.user.create({
    data: {
      ref: id,
    },
  });

  return NextResponse.json(user);
}

import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // User ID from clerk sent via the body of the POST
    const { userId } = await req.json();

    // Ensure user is logged in
    if (!userId) {
      return new Response(JSON.stringify({ message: 'Not authenticated' }), {
        status: 400,
      });
    }

    // Check if the user already exists
    const existingUser = await db.user.findUnique({
      where: {
        ref: userId,
      },
    });

    if (existingUser) {
      return new Response(
        JSON.stringify({ message: 'User account already exists' }),
        {
          status: 200,
        }
      );
    }

    // Create a new user
    const newUser = await db.user.create({
      data: {
        ref: userId,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ message: 'An error occurred' }), {
      status: 500,
    });
  }
}

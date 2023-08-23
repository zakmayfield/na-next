import { auth } from '@clerk/nextjs';

async function createAccount(userId: string | null) {
  try {
    const res = await fetch(`http://localhost:3000/api/create-account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });

    return res.json();
  } catch (err) {
    console.log('create-account:fetch:error', err);
  }
}

export default async function Welcome() {
  const { userId } = auth();
  const data = await createAccount(userId);

  console.log('welcome:page:data', data);

  return <div>Welcome</div>;
}

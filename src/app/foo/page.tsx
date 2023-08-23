import { auth } from '@clerk/nextjs';

export default function Foo() {
  const { userId } = auth();
  return <div>Foo</div>;
}

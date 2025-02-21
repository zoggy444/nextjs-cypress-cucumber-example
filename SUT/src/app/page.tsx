import { Metadata } from 'next';
import Image from "next/image";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home Page'
}

export default function Home() {
  return (
    <>
      <h1>Main menu</h1>
      <Link href='/game'>
        <button type="button">Start a game</button>
      </Link>
    </>
  );
}

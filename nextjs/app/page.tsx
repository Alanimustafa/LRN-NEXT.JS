import Image from "next/image";
import Hello from "@/app/components/hello";
import Link from "next/link";

export default function Home() {
  console.log ('Is this a server or client?  -- SERVER SIDE');
  return (
    <>

      <div className="text-3xl">Welcome to Next.JS</div>
      <Hello/>
      <Link href="/about" >About Page</Link>
    </>
    
  )
}

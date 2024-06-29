"use client"
import Nav from "@/components/Nav";
import Foot from "@/components/Foot";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import FrontPage from "@/components/FrontPage";



export default function Home() {
  const { data: session } = useSession();

  // if(!session){
  //   redirect('/login')
  //   return
  // }
  return (
    <>
      <FrontPage/>
      <Foot/>
    </>
  );
}

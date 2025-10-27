'use client'
import Image from "next/image";
import React, { useState, useEffect } from 'react';
//import { getCookie } from "./lib/helper";
import { getCookie, setCookie, deleteCookie } from "./lib/cookie";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
        router.push('/users/new');

    }, []);
  
  return (
    <div className="flex">
        <main className="flex-1 p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page!</h1>
            <p>This is your main content area.</p>
        </main>
    </div>
  );
}

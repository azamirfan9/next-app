'use client'
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Thankyou from '../ThankyouPage';
import { getCookie, setCookie, deleteCookie } from "../../lib/cookie";
import { useParams   } from 'next/navigation';
import io from 'socket.io-client';
const socket = io('http://192.168.40.96:5000');

export default function Home() {
  const params = useParams<{ tag: string; item: string }>()
  const [activated, setActivated] = useState(false)
  useEffect(() => {
    }, []);

    const send = async () => {
      const otptoken = await getCookie("otp_token");
      console.log(otptoken);
      socket.emit('account_verify', {'token': otptoken, 'params': params});
      setActivated(true);
    }
  
  return (
    <div>
      {
        !activated ?
        <div className="flex">
        <main className="flex-1 p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to the OTP Page!</h1>
            <p>This is your main content area.</p>
            <button type="button" onClick={() => send()} className="flex items-center justify-center w-full mt-2 py-3 focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900">
                VERIFY ACCOUNT
            </button>
        </main>
      </div>
      : <Thankyou />
      }
    </div>
  );
}

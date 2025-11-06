'use client'
import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import VerifyOtp from './VerifyOtp';
import Thankyou from './ThankyouPage';
import QRCodeGenerator from '../components/QRCodeGenerator';
import { getCookie, setCookie, deleteCookie } from "../lib/cookie";
import { serverURL, clientURL } from "../lib/helper";
import { success, warning } from "../lib/Toaster";
import { useRouter } from 'next/navigation';
import io from 'socket.io-client';
const socket = io(serverURL());

const Accounts = () => {
  const router = useRouter();
  const [value, setValue] = useState(false)
  const [otp, setOtp] = useState(false)
  const [activated, setActivated] = useState(false)
  const [qrContent, setQrContent] = useState('http');
  useEffect(() => {
    //const otp = '0038905207678887';
    //socket.emit('joinRoom', otp);
    //socket.emit('chat message', 'Hello JS');
    // socket.on('account_verify', (msg) => {
    //   console.log(msg);
    //   setActivated(true);
    //   deleteCookie('otp_token');
    // });
    deleteCookie('otp_token');
    socket.on('account_verify', (message) => {
      console.log('Received message:', message);
      if(message.status == true){
        deleteCookie('otp_token');
        setActivated(true);
        success(message.message);
      }else{
        warning(message.message);
      }
    });
    checkotpverify();
  },[])

  const checkotpverify = async() =>{
    if(await getCookie("otp_token")){
        setOtp(true);
        const otptoken = await getCookie("otp_token");
        console.log(otptoken);
        setQrContent(`${clientURL()}/accounts/${otptoken.otp}`);
    }else{
        setOtp(false);
    }
  }

  const joinRoom = (roomid)=>{
    socket.emit('joinRoom', roomid);
  }

  const gotToLoginPage = ()=>{

  }

  return (
    <section className="h-full dark:bg-neutral-700">
        <div className="grid grid-cols-1 sm:grid-cols-6">
            <div  className="col-span-1 sm:col-span-1"></div>
            <div  className="col-span-1 sm:col-span-2 mr-2">
                <div className="rounded-lg h-screen w-full"
                 style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}>
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                        <h4 className="mb-6 text-xl font-semibold">
                        We are more than just
                        </h4>
                        <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
            <div  className="col-span-1 sm:col-span-2">
                <div className="rounded-lg h-screen w-full"
                 style={{
                    background:
                      "linear-gradient(to right, #292725ff, #343131ff, #401f2cff, #413d40ff)",
                  }}>
                    {
                      !otp ?
                        !value ? 
                          <Login value={value} setValue={setValue} /> : <Register value={value} setValue={setValue} otp={otp} setOtp={setOtp} qrContent={qrContent} setQrContent={setQrContent} joinRoom={joinRoom} />
                        : !activated ? <QRCodeGenerator data={qrContent} width={200} />
                          : <Thankyou />
                    }
                </div>
            </div>
            <div  className="col-span-1 sm:col-span-1"></div>
        </div>
    </section>
  )
}

export default Accounts
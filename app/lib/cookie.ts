"use server"
import { cookies } from "next/headers";

export async function getCookie(key){
    const cookieStore = await cookies();
    const myCookie = cookieStore.get(key);
    return myCookie?.value;
    //const cookie = (await cookies()).get(key);

    //return cookie?.value;
}

export async function setCookie(key, value){
    //SET FOR OTP 10 minutes in seconds 60 * 10
    const mxage = (key == 'otp_token')? 60 * 10 : 100000 * 60 * 60 * 24 * 7;
    (await cookies()).set(key, value,{
        secure: true,
        //secure: process.env.NODE_ENV === 'production',  
        maxAge: mxage,
        sameSite: true,
    });
}

export async function deleteCookie(key){
    (await cookies()).delete(key);
}
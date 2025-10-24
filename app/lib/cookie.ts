"use server"
import { cookies } from "next/headers";

export async function getCookie(){
    const cookie = (await cookies()).get("auth_token");

    return cookie?.value;
}

export async function setCookie(value){
    (await cookies()).set("auth_token", value,{
        secure: true,
        maxAge: 100000 * 60 * 60 * 24 * 7,
        sameSite: true,
    });
}

export async function deleteCookie(){
    (await cookies()).delete("auth_token");
}
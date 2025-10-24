// "use server"
// import {cookies} from "next/headers";
// const helper = {
//     grtCookie: async function(){
//         const cookieStore = await cookies();
//             cookieStore.set('auth_token', 'Hello User',{
//                 secure: true,
//                 maxAge: 100000 * 60 * 60 * 24 * 7,
//                 sameSite: true,
//             });
        
//             const data = cookieStore.get('auth_token');
//             console.log(data);
//             console.log('TEST');
//     }
// }

// export default helper;
"use server"
import { cookies } from "next/headers";

export async function getCookie() {
    (await cookies()).set('auth_token', 'Hello User',{
                secure: true,
                maxAge: 100000 * 60 * 60 * 24 * 7,
                sameSite: true,
            });
    const cookie = (await cookies()).get("auth_token");

    return cookie?.value;
}
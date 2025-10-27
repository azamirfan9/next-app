import { getCookie, setCookie, deleteCookie } from "../lib/cookie";
const api = {
    account: async function(formData){
        console.log(getCookie("otp_token"));
        try{
            const response = await fetch('http://localhost:5000/account',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("otp_token")}`,
                },
                body: JSON.stringify(formData),
            });
            return await response.json();
        }catch (err) {
            return err;
        }
    },
    otpVerify: async function(formData){
        try{
            const response = await fetch('http://localhost:5000/account',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("verify-account")}`,
                },
                body: JSON.stringify(formData),
            });
            return await response.json();
        }catch (err) {
            return err;
        }
    },
}

export default api;
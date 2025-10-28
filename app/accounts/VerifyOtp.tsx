
interface Props {
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
}

import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import TextInput from '../components/form/Input';
import API from '../lib/api';
import APIURL from '../lib/apiurls';
import { getCookie, setCookie, deleteCookie } from "../lib/cookie";
import { useRouter } from 'next/navigation';

const VerifyOtp = (props: Props) => {
const router = useRouter();
const [formData, setFormData] = useState({otp: ''});
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
};

const verify = () => {
    //setCookie('otp_token','This is your main content area');
    API.account({"params": APIURL.otpVerify(), "postdata": formData})
    .then((data) =>{
        console.log(data);
        //deleteCookie("otp_token");
    })
    .catch(err => {
        console.log(err);
    })
}

  return (
    <div>
        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
            <div className="text-center">
                <img
                    className="mx-auto w-32"
                    src="https://goldeneagle.ai/static/images/technology/react.png"
                    alt="logo"
                />
                <h4 className="mt-1 pb-1 text-xl font-semibold">
                    Verify Account
                </h4>
            </div>
            <TextInput
                label="OTP:"
                onChange={handleChange}
                formData={formData}
                name="otp"
            />

            <div>
                <button type="button" onClick={() => verify()} className="flex items-center justify-center w-full mt-2 py-3 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900">
                    VERIFY
                </button>
            </div>
        </div>
    </div>
  )
}

export default VerifyOtp
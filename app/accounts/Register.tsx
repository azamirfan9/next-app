interface Props {
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
  otp: boolean
  setOtp: Dispatch<SetStateAction<boolean>>
}

import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import TextInput from '../components/form/Input';
import API from '../lib/api';
import APIURL from '../lib/apiurls';
import { getCookie, setCookie, deleteCookie } from "../lib/cookie";
import { useRouter } from 'next/navigation';

const Register = (props: Props) => {
const router = useRouter();
const [formData, setFormData] = useState({fullname: '', mobile: '', email: ''});
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
};

const create = () =>{
    API.account({"params": APIURL.resgiter(), "postdata": formData})
    .then((data) =>{
        console.log(data);
        deleteCookie("otp_token");
        setCookie("otp_token", data.token);
        props.setOtp(true)
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
                    <h4 className="mb-4 mt-1 pb-1 text-xl font-semibold">
                        Register
                    </h4>
                </div>
                <TextInput
                    label="Full Name:"
                    onChange={handleChange}
                    formData={formData}
                    name="fullname"
                />

                <TextInput
                    label="Mobile:"
                    onChange={handleChange}
                    formData={formData}
                    name="mobile"
                />

                <TextInput
                    label="Email:"
                    onChange={handleChange}
                    formData={formData}
                    name="email"
                />
                
                <div>
                    <button type="button" onClick={() => create()} className="flex items-center justify-center w-full mt-2 py-3 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-blur-700 dark:focus:ring-blue-900">
                        Register
                    </button>
                    <a href="#" onClick={() => props.setValue(false)} className="flex items-center justify-center mt-2 font-thin text-white-600 dark:text-white-500 hover:underline">Already have account ?</a>
                </div>
            </div>
        </div>
  )
}

export default Register
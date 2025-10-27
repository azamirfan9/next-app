
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

const Login = (props: Props) => {
const router = useRouter();
const [formData, setFormData] = useState({email: '', password: ''});
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
};

const login = async() => {
    API.account({"params": APIURL.login(), "postdata": formData})
        .then((data) =>{
            deleteCookie("auth_token");
            setCookie("auth_token", data.response.token);
            //router.push('/meeting');
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
                        Login
                    </h4>
                </div>
                <TextInput
                    label="Username:"
                    onChange={handleChange}
                    formData={formData}
                    name="email"
                />

                <TextInput
                    label="Password:"
                    onChange={handleChange}
                    formData={formData}
                    name="password"
                />

                <div>
                    <button type="button" onClick={() => login()} className="flex items-center justify-center w-full mt-2 py-3 focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900">
                        Login
                    </button>
                    <a href="javascript::void()" className="flex items-center justify-center mt-4 font-medium text-white-600 dark:text-white-500 hover:underline">Forgot Password ?</a>
                    <button onClick={() => props.setValue(true)} type="button" className="flex items-center justify-center w-full mt-8 py-3 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-blur-700 dark:focus:ring-blue-900">
                        Register
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Login
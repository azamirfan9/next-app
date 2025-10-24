
const apiurls = {
    login: function(){
        return {"controller": "Login", "method": "signin"};
    },
    resgiter: function(){
        return {"controller": "Register", "method": "createUser"};
    },
    otpVerify: function(){
        return {"controller": "Register", "method": "otpVerify"};
    },
    helper3: function(){

    }
}

export default apiurls;
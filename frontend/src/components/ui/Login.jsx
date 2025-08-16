import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-82px)]">
      {/* Left Side (Image/Illustration) */}
      <div className="login-img md:w-1/2 w-full bg-yellow-200 h-64 md:h-auto"></div>

      {/* Right Side (Form Section) */}
      <div className="login-form md:w-1/2 w-full flex justify-center items-center">
        
        <div className="bg-teal-700 rounded-xl h-[600px] w-[400px] shadow-green-800 shadow-xl">
            <h2 className="text-2xl font-bold text-white text-left p-10">Welcome Back!</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;

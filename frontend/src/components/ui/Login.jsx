import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-20px)]">
      {/* Left Side (Image/Illustration) */}
      <div className="login-img md:w-1/2 w-full  h-64 md:h-auto flex justify-center items-center">
        <img src="/login_left_green.jpeg" />
      </div>

      {/* Right Side (Form Section) */}
      <div className="login-form md:w-1/2 w-full flex justify-center items-center">

      <div className="h-screen w-screen flex items-center justify-center bg-white">
      {/* Glassmorphism Card */}
      <div className="w-[350px] p-8 rounded-2xl bg-white/30 border border-[#0F5A5A] shadow-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F5A5A" }}>
          Login
        </h2>
        <p className="mb-6" style={{ color: "#0F5A5A" }}>
          Welcome back, please login to your account
        </p>

        {/* Username Input */}
        <input
          type="text"
          placeholder="User Name"
          className="w-full p-3 mb-4 rounded-lg bg-white/60 border border-[#0F5A5A] placeholder-[#0F5A5A] text-[#0F5A5A] focus:outline-none"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-white/60 border border-[#0F5A5A] placeholder-[#0F5A5A] text-[#0F5A5A] focus:outline-none"
        />

        {/* Remember Me */}
        <div className="flex items-center mb-6">
          <input type="checkbox" className="mr-2 accent-[#0F5A5A]" />
          <span style={{ color: "#0F5A5A" }}>Remember me</span>
        </div>

        {/* Login Button */}
        <button
          className="w-full py-3 rounded-lg font-bold hover:opacity-90"
          style={{ backgroundColor: "#0F5A5A", color: "white" }}
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="mt-4" style={{ color: "#0F5A5A" }}>
          Don’t have an account?{" "}
          <a href="#" className="font-semibold hover:underline" style={{ color: "#0F5A5A" }}>
            Signup
          </a>
        </p>
      </div>
    </div>

      </div>
      
    </div>
  );
};

export default Login;

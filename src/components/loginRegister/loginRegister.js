import React, { useState } from "react";
import { LoginForm } from "../common/loginForn/loginForm";
import { RegisterForm } from "../common/registerForm/registerForm";

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Tabs outside the form div */}
      <div className="w-full max-w-md mb-4 flex justify-center">
        <button
          className={`text-lg font-semibold px-4 ${
            activeTab === "login" ? "text-purple-500" : "text-black"
          }`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <span className="mx-2 text-gray-400">|</span>
        <button
          className={`text-lg font-semibold px-4 ${
            activeTab === "register" ? "text-purple-500" : "text-black"
          }`}
          onClick={() => setActiveTab("register")}
        >
          Register
        </button>
      </div>
      
      {/* Form container */}
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <form>
          {activeTab === "login" && (
            <div className="space-y-4">
              <LoginForm />
            </div>
          )}
          {activeTab === "register" && (
            <div className="space-y-4">
              <RegisterForm />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;

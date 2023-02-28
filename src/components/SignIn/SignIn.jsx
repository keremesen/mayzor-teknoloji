import React from "react";

const SignIn = () => {
  return (
    <div className="flex h-screen bg-mayzor justify-center items-center bg-cover bg-center bg-no-repeat flex-col   ">
      <div className="flex items-center justify-center bg-white md:p-5 rounded-t-[60px]  ">
        <img src="/src/img/logo.svg" alt="mayzor teknoloji" />
      </div>

      <div className="loginBox w-2/3 md:w-1/3 h-3/4  justify-around items-center flex flex-col ">
        <text className="text-secondary uppercase font-bold text-3xl">
          SIGN IN
        </text>
        <div className="flex flex-col items-center w-3/4 space-y-8 ">
          <div className="flex flex-col space-y-4 w-full">
            <label className="text-[#4C5F82]">E mail Address</label>
            <input
              className="bg-white rounded-md  w-full text-[#A7A7A7] p-3 "
              placeholder="emre@mayzor.net"
            />
            <div class="flex items-center ">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-[#F5F5F5] rounded ring-[#3B90E6] ring-2"
              />
              <label for="link-checkbox" class="ml-2  text-primary">
                Remember me
              </label>
            </div>
          </div>

          <button className="rounded-md bg-secondary w-full text-white py-3">
            Log In
          </button>
          <text className="text-primary">Forgot your password?</text>
          <text className="text-primary">
            Don’t have an account?
            <a className="font-bold" href="#">
              Sign Up
            </a>
          </text>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

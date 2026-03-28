import type { signupInput } from "@sushill7847/medium-common";
import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BACKEND_URL} from '../config' 
import axios from "axios";

function Auth({ type }: { type: "signup" | "signin" }) {
    const navigate = useNavigate();
  const [postinputs, setPostInputs] = useState<signupInput>({
    name: "",
    email: "",
    password: "",
  });

 async function sendRequest(){
    try{
      const response = await  axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postinputs)

      const {jwt} = response.data;
      localStorage.setItem("token",`Bearer ${jwt}`);
      //  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
      navigate("/blogs")
  } catch(e){
    alert("Somwthing went wrong, Please try again");
  }
}

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10 ">
            <div className="text-4xl font-bold">Create an account</div>
            <div className="text-slate-400 text-center">
                {type === "signin" ? "Dont have an account" : "Already have an account"}
              <Link className="pl-2 underline " to={ type == "signin"?"/signup":"/signin"}>
                {type === 'signin'?"Sign up":"Sign in"}
              </Link>
            </div>
          </div>
          <div className="pt-10">
           { type == "signup" ? <LabledInput
              label="Name"
              placeholder="sushil kumar..."
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }));
              }}
            /> : null}
            <LabledInput
              label="Email"
              placeholder="sushil@gmail.com"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            />
            <LabledInput
              label="Password"
              type="password"
              placeholder="1234636"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
            <button onClick={sendRequest} type="button" className="w-full mt-8 rounded-sm text-body bg-gray-800 border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none text-white">{type === "signup" ? "sign up" : "sign in"}</button>

          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}

export default Auth;

interface LabledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabledInput({ label, placeholder, onChange, type }: LabledInputType) {
  return (
    <div>
      <div>
        <label className="block mb-2 text-sm font-semibold pt-4">{label}</label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="First_name"
          className="border border-default-medium text-sm rounded-base block w-full px-3 py-2  rounded-sm"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}

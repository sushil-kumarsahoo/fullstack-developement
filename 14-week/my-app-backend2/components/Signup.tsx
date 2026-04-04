"use client";
import { signup } from "@/actions/user";
import { useState } from "react";
//import axios from "axios";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border rounded pb-4">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="username"
            className="p-2 m-2"
          ></input>
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
            className="p-2 m-2"
          ></input>
          <br />
          <div className=" mt-4 flex justify-center">
            <button
              onClick={() => {
                signup(email,password)
              }}
              className="cursor-pointer"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

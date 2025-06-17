import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
// import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import SignUpBtn from "../components/custom/signUpBtn";

export default function SignUp() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
      <Card className="w-full max-w-sm bg-[#0d0d0d] border-none">
        <CardHeader className="pb-[30px]">
          <CardTitle className="flex items-center justify-center text-[32px] bg-gradient-to-r from-[#4FD1C5] to-[#F7FAFC] bg-clip-text text-transparent p-0">
            Sign Up to Tracker
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <form>
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-row gap-[1px]">
                <Input
                  id="name"
                  type="text"
                  placeholder="first name"
                  required
                  className="rounded-full bg-[#1A1A1A] w-[140px] h-[38px] text-xs border-[#2F323B]"
                />
                <Input
                  id="surname"
                  type="text"
                  placeholder="last name"
                  required
                  className="rounded-full bg-[#1A1A1A] w-[140px] h-[38px] text-xs border-[#2F323B]"
                />
              </div>
              <div className="grid ">
                <Input
                  id="email"
                  type="email"
                  placeholder="email"
                  required
                  className="rounded-full bg-[#1A1A1A] w-[284px] h-[38px] text-xs border-[#2F323B]"
                />
              </div>
              <div className="grid">
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  required
                  className="rounded-full bg-[#1A1A1A] w-[284px] h-[38px] text-xs border-[#2F323B]"
                />
              </div>
              <div className="grid">
                <Input
                  id="password"
                  type="password"
                  placeholder="retype password"
                  required
                  className="rounded-full bg-[#1A1A1A] w-[284px] h-[38px] text-xs border-[#2F323B]"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-7 pt-2">
          <div className="p-[2px] rounded-[16px] bg-gradient-to-r from-[#4FD1C5] to-[#F7FAFC] inline-block">
            <button
              type="submit"
              className="w-[106px] h-[24px] rounded-[14px] bg-[#0b0b10] text-[#F7FAFC] text-xs font-normal font-['Familjen_Grotesk'] flex items-center justify-center focus:outline-none border-none"
              style={{ letterSpacing: 0 }}
            >
              sign up
            </button>
          </div>
          <div className="flex items-center gap-2">
          <FaGoogle className="text-[#F7FAFC]" />
          <span className="text-[#F7FAFC] text-xs">
            sign in with{" "}
            <a href="" className="hover:underline text-[#F7FAFC] text-xs">
              Google
            </a>
          </span>
          </div>
        </CardFooter>
      </Card>
      <div className="absolute bottom-0 mb-6 text-xs text-[#A0AEC0]">
        Have account?{" "}
        <a href="#" className="text-[#f7fafc] hover:underline">
          Sign in.
        </a>
      </div>
    </div>
  );
}

{
  /* <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
      
      <div className="relative bg-[#1A1A1A] rounded-2xl shadow-lg p-10 flex flex-col items-center w-[350px]">
        
        <button className="absolute top-4 left-4 w-7 h-7 flex items-center justify-center bg-[#191919] rounded-full border border-[#222] text-gray-400 hover:bg-[#222]">
          <span className="text-lg">×</span>
        </button>
        
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-teal-400 to-[#F7FAFC] bg-clip-text text-transparent mb-10">Login To Tracker</h1>
        
        <div className="w-full mb-6">
          <Input
            type="email"
            placeholder="account email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-[#1A1A1A] border border-[#2F323B] rounded-full px-5 py-2 text-sm text-[#868F97] focus:border-teal-400"
          />
        </div>
        
        <div className="w-full mb-8">
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="bg-[#1A1A1A] border border-[#2F323B] rounded-full px-5 py-2 text-sm text-[#868F97] focus:border-teal-400"
          />
        </div>
        
        <Button variant="outline" className="w-full flex items-center justify-center gap-2 mb-6 border rounded-full py-2 text-sm">
        
          <span className="inline-block w-4 h-4 bg-gradient-to-tr from-blue-500 via-green-500 to-red-500 rounded-full mr-2"></span>
          Sign in with Google
        </Button>
        
        <Button className="w-full bg-teal-400 text-black font-semibold rounded-full py-2 mb-4 hover:bg-teal-300">Sign In</Button>
        
        <div className="w-full text-center mt-2">
          <span className="text-xs text-white">Don't have account yet? <a href="#" className="text-teal-400 underline">Sign up.</a></span>
        </div>
      </div>
    </div> */
}

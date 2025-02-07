import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FiArrowRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function SignUp() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background text-text-primary">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 bg-muted hover:bg-bg-muted/80 rounded-full p-2"
      >
        <IoClose className="text-text-primary text-xl" />
      </Button>
      <h1 className="text-3xl mb-8 bg-gradient-to-r from-text-secondary to-border text-transparent bg-clip-text">
        Login To Tracker
      </h1>
      <div className="space-y-4 w-[85%] max-w-lg">
        <div className="flex space-x-4">
          <div className="relative overflow-hidden rounded-full w-1/2">
            <Input
              type="text"
              placeholder="first name"
              className="w-full h-12 text-text-primary bg-input rounded-full px-4 border-0"
            />
          </div>
          <div className="relative overflow-hidden rounded-full w-1/2">
            <Input
              type="text"
              placeholder="last name"
              className="w-full h-12 text-text-primary bg-input rounded-full px-4 border-0"
            />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-full">
          <Input
            type="email"
            placeholder="account email"
            className="w-full h-12 text-text-primary bg-input rounded-full px-4 border-0"
          />
        </div>
        <div className="relative overflow-hidden rounded-full">
          <Input
            type="password"
            placeholder="password"
            className="w-full h-12 text-text-primary bg-input rounded-full px-4 border-0"
          />
        </div>
        <div className="relative overflow-hidden rounded-full">
          <Input
            type="password"
            placeholder="retype password"
            className="w-full h-12 text-text-primary bg-input rounded-full px-4 border-0"
          />
        </div>
      </div>
      <div className="mt-6">
        <Button className="w-36 h-12 rounded-full bg-muted text-text-primary hover:bg-muted/80 border-2 border-border">
          Sign Up
        </Button>
      </div>
      <div className="flex items-center justify-center mt-6">
        <FcGoogle className="text-2xl mr-2" />
        <span className="text-sm font-medium text-text-primary hover:underline">
          Sign in with Google
        </span>
      </div>
      <div className="absolute bottom-4 text-sm text-text-secondary text-center">
        Don't have an account yet?{" "}
        <a href="" className="text-text-primary hover:underline">
          Sign up.
        </a>
      </div>
    </div>
  );
}

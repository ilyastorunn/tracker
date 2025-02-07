import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FiArrowRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function SignIn() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background text-text-primary">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 bg-muted hover:bg-muted/80 rounded-full p-2"
      >
        <IoClose className="text-text-primary text-xl" />
      </Button>
      <h1 className="text-3xl mb-8 bg-gradient-to-r from-text-secondary to-border text-transparent bg-clip-text">
        Login To Tracker
      </h1>
      <div className="space-y-4 w-[85%] max-w-lg">
        <div className="relative overflow-hidden rounded-full">
          <Input
            type="email"
            placeholder="account email"
            className="w-full h-12 text-text-primary bg-input rounded-full px-4 border-0"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full w-12 bg-muted rounded-full hover:bg-muted/80"
          >
            <FiArrowRight className="text-text-primary" />
          </Button>
        </div>
        <div className="relative overflow-hidden rounded-full">
          <Input
            type="password"
            placeholder="password"
            className="w-full h-12 text-text-primary bg-input rounded-full px-4 border-0"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full w-12 bg-muted rounded-full hover:bg-muted/80"
          >
            <FiArrowRight className="text-text-primary" />
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <Button className="w-36 h-12 rounded-full bg-transparent text-text-primary border-2 border-border hover:bg-muted/80">
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

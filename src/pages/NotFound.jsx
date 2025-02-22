import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <div className="bg-background min-h-screen flex flex-col items-center justify-center">
        <div className="flex items-center">
          <span className="text-text-primary font-inter text-xl">404</span>
          <span className="text-text-primary font-inter text-xl mx-2">| </span>
          <span className="text-text-primary font-inter text-xl">
            This page could not be found.
          </span>
        </div>
        <Link to="/home">
          <Button className="mt-6 text-text-primary font-inter bg-transparent hover:underline hover:bg-background">
            Back Home
          </Button>
        </Link>
      </div>
    </>
  );
}

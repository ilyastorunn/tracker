import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <div className="bg-[#1d1d1f] min-h-screen flex flex-col items-center justify-center">
        <div className="flex items-center">
          <span className="text-white text-xl">404</span>
          <span className="text-white text-xl mx-2">| </span>
          <span className="text-white text-xl">
            This page could not be found.
          </span>
        </div>
        <Button className="mt-6 text-white bg-transparent hover:underline hover:bg-[#1d1d1f]">
            Back Home
        </Button>
      </div>
    </>
  );
}

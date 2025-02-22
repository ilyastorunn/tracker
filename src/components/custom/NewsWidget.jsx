import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsWidget() {
  return (
    <div className="w-full">
        <span className="text-lg font-semibold text-text-primary hover:underline block mb-2">
          Check out news
        </span>
      <Card className="w-full h-full min-h-[250px] bg-card p-4 shadow flex flex-col justify-between border-none">
        <div className="w-full h-[180px] overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            alt="News"
            className="w-full h-full object-cover pb-4"
          />
        </div>
        <CardContent className="pb-4 pl-0 mt-auto">
          <div className="mb-2 text-sm text-text-secondary">
            What&apos;s happening today
          </div>
          <div className="text-sm leading-relaxed text-text-primary">
            US jobless claims hit 5-week low at 211,000. Treasury yields were
            stable post weak inflation data reports, and UBS faces Swiss law
            challenges.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

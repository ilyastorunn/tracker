import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CiLocationArrow1 } from "react-icons/ci";

export default function NewsWidget() {
  return (
    <Card className="w-full h-full min-h-[250px] bg-card p-4 shadow flex flex-col justify-between border-none">
      <CardHeader className="flex-row items-start -space-y-1 gap-2 p-0 pb-4">
        <span className="text-lg font-semibold text-text-primary">Check out news</span>
        <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
          <CiLocationArrow1 className="h-4 w-4" />
        </Button>
      </CardHeader>
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
  );
}

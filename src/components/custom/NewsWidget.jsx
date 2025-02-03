import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CiLocationArrow1 } from "react-icons/ci";

export default function NewsWidget({ className = "" }) {
  return (
    <Card
      className="
        w-full bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 p-4 shadow
        "
    >
      <CardHeader className="flex-row items-start -space-y-1 gap-2 p-0 pb-4">
        <span>Check out news</span>
        <Button variant="ghost" size="icon">
          <CiLocationArrow1 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="mb-2 text-sm text-muted-foreground">
          What&apos;s happening today
        </div>
        <div className="text-sm leading-relaxed text-foreground">
          US jobless claims hit 5-week low at 211,000. Treasury yields were
          stable post weak inflation data reports, and UBS faces Swiss law
          challenges.
        </div>
      </CardContent>
    </Card>
  );
}

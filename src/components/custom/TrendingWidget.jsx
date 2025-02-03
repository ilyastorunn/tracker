import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function TrendingWidget({ className = "" }) {
  return (
    <Card className="w-full p-4 shadow">
      <CardHeader>
        <h2>Trending</h2>
      </CardHeader>
      <CardContent>içerik</CardContent>
    </Card>
  );
}

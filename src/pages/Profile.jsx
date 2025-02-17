import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../components/custom/Header";
import Footer from "../components/custom/Footer";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Ilyas Torun",
    email: "ilyastorunn@example.com",
    password: "*********",
  });

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text-primary px-6">
        <Card className="w-full max-w-2xl bg-card shadow-lg rounded-lg border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm text-muted-foreground">
                Name
              </label>
              <Input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="w-full p-3 bg-input text-text-primary rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground">
                Email
              </label>
              <Input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full p-3 bg-input text-text-primary rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground">
                Password
              </label>
              <Input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full p-3 bg-input text-text-primary rounded-lg"
              />
            </div>
            <Button className="w-full bg-muted hover:bg-muted/80 p-3 rounded-lg">
              Update Profile
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}

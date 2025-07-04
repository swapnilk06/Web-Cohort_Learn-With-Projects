import React from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-2xl font-semibold">ChaiPage 😊😁</div>
      <Button className="mt-4">Shadcn button</Button>
      <Button variant="outline" size="sm" className="mt-4">
        Shadcn button
      </Button>
      <Button variant="chai">Shadcn button</Button>
    </main>
  );
};

export default Home;

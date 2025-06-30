import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline underline-offset-8 text-yellow-500">
        Chai aur Shadcn
      </h1>
      <Button className="mt-4 hover:bg-amber-500"> Click me </Button>
    </>
  );
}

export default App;

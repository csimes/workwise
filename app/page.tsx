"use client";
import Image from "next/image";
import { Link } from "@chakra-ui/next-js";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="text-center m-auto">
      <title>WorkWise: Home</title>
      <h1>Welcome to WorkWise!</h1>
      <p>Track your time and gain insights into your workday.</p>
      <div>
        <Button>
          <Link href="auth/login">Login</Link>
        </Button>
        <Button>
          <Link href="auth/register">Register</Link>
        </Button>
      </div>
    </div>
  );
}

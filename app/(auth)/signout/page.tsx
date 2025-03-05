"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function SignoutPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1500);
  }, []);
  return (
    <div >
      <h1 className="animate-pulse text-2xl italic">
        You have logged out, redirecting in a sec...
      </h1>
    </div>
  );
}

export default SignoutPage;

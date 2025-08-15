"use client";

import { Loader, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logOutAction } from "@/actions/users";

function LogOutButton() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogOut = async () => {
    setLoading(true);
    // console.log("Loggging out....");
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const { errorMessage } = await logOutAction();

    if (!errorMessage) {
      toast.success("Logged Out", {
        description: "You have been successfully logged out",
      });
      router.push("/");
    } else {
      toast.error("Error", {
        description: errorMessage,
      });
    }

    setLoading(false);
  };

  return (
    <Button
      variant="outline"
      className="w-24"
      onClick={handleLogOut}
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogOutButton;

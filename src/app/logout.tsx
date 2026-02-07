"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  //here we are using authClient for doing signout cause this is a client components when its not a client component we use auth from lib.auth and do auth.api.signout and .getsession and stuff
  const router = useRouter();
  return (
    <Button
      onClick={() =>
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => router.push("/login"),
          },
        })
      }
    >
      Logout
    </Button>
  );
};

export default LogoutButton;

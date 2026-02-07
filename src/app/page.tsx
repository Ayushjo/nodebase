import { requireAuth, requireUnAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import LogoutButton from "./logout";

// import { getQueryClient, trpc } from "@/trpc/server";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import Client from "./client";
// import { Button } from "@/components/ui/button";
// import { Suspense } from "react";

const Page = async () => {
  // const queryClient = getQueryClient();
  // void queryClient.prefetchQuery(
  //   trpc.hello.queryOptions({ text: "Ayush Singh" }),
  // );

  await requireAuth();
  const data = await caller.hello();

  return (
    // <div className="bg-amber-300 text-2xl text-black h-full w-full">
    //   <HydrationBoundary state={dehydrate(queryClient)}>
    //     <Button className="text-2xl justify-center h-full w-full items-center">
    //       <Suspense fallback={<div>Loading...</div>}>
    //         <Client />
    //       </Suspense>
    //     </Button>
    //   </HydrationBoundary>
    // </div>

    <>
      <h1>Hello</h1>
      <h1>{JSON.stringify(data)}</h1>
      <LogoutButton />
    </>
  );
};

export default Page;

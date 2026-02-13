"use client";

import { requireAuth, requireUnAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import LogoutButton from "./logout";
import { useTRPC } from "@/trpc/client";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// import { getQueryClient, trpc } from "@/trpc/server";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import Client from "./client";
// import { Button } from "@/components/ui/button";
// import { Suspense } from "react";

const Page = () => {
  // const queryClient = getQueryClient();
  // void queryClient.prefetchQuery(
  //   trpc.hello.queryOptions({ text: "Ayush Singh" }),
  // );

  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(
    trpc.createWorkflows.mutationOptions({
      onSuccess: () => {
        toast.success("job queued");
      },
    }),
  );
  const testAi = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: () => {
        toast.success("job queued");
      },
    }),
  );

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

      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create
      </Button>
      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
        Test Ai
      </Button>
      <LogoutButton />
    </>
  );
};

export default Page;

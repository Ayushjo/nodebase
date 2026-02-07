"use client"

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

const client = () => {
  const trpc = useTRPC();
  const { data: hello } = useSuspenseQuery(
    trpc.hello.queryOptions({ text: "Ayush Singh" }),
  );
  return (
    <>
      <h1>Hello Client Component ({JSON.stringify(hello)})</h1>
    </>
  );
};
 
export default client;

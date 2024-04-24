"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </QueryClientProvider>
  );
}

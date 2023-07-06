import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import { SkillsProvider } from "@/context/skillsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <SkillsProvider>
        <Component {...pageProps} />
      </SkillsProvider>
    </NextUIProvider>
  );
}

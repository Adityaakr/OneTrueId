"use client";
import { defineChain } from "viem";
import { Outfit } from "next/font/google";
import "./globals.css";

import { PrivyProvider } from "@privy-io/react-auth";
const font = Outfit({ subsets: ["latin"] });

const morph = defineChain({
  id: 2818,
  name: "Morph Chain",
  network: "Morph",
  nativeCurrency: {
    decimals: 18,
    name: "Morph",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://explorer-holesky.morphl2.io/"],
    },
  } as any,
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer-holesky.morphl2.io/" },
  },
}) as any;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <PrivyProvider
          appId="clwci9fzm00w7ro85bx6jarr5"
          config={{
            appearance: {
              theme: "light",
              accentColor: "#676FFF",
              logo: "https://ml.globenewswire.com/Resource/Download/b7203bf8-dd28-4843-b783-12dff9c778c0",
            },
            loginMethods: ['google'],
            defaultChain: morph,
            supportedChains: [morph],
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}

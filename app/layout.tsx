import type { Metadata } from "next";
import { Orbitron, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const notoJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Into The Ether — イーサの中へ",
    template: "%s | Into The Ether",
  },
  description:
    "A neon-lit deep dive into Ethereum, Ether, DeFi, web3 and the future of finance, freedom and personal wealth. Learn, explore, interact.",
  metadataBase: new URL("https://intotheether.vercel.app"),
  openGraph: {
    title: "Into The Ether",
    description:
      "The world computer, decoded. Deep dives into Ethereum, DeFi, ZK, self-custody and the future of finance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${jetbrains.variable} ${notoJp.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="crt-overlay" aria-hidden="true" />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

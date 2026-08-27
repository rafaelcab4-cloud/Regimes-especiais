import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import Topbar from "@/components/Topbar";
import FlagNav from "@/components/FlagNav";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Regimes Especiais — Monitor Global Fiscal & Imigratório",
    template: "%s · Regimes Especiais",
  },
  description:
    "Monitor analítico de regimes fiscais especiais e programas imigratórios para HNWIs em 10 jurisdições estratégicas — edição maio 2026.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Topbar />
        <FlagNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

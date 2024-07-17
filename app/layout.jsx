import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800",],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Shy-Portfolio",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.className}>
        <Header />
        {/* <StairTransition/> */}
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}

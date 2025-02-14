import { Urbanist, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/components/userContext";

const urbanist = Urbanist({
  weight: ["400", "500"],
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  weight: ["400"],
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zkip - Shorten Links Instantly",
  description:
    "Zkip makes link shortening fast, simple, and reliable. Create, customize, and track your short links effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${bricolage.variable} antialiased`}
      >
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}

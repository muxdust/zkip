import { Roboto, Instrument_Serif } from "next/font/google";
import "./globals.css";

const popins = Roboto({
  weight: ["400"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  variable: "--font-instrument-serif",
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
        className={`${popins.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

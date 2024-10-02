import "@/styles/globals.css";
import { Barlow_Condensed, Bellefair } from "next/font/google";
import Nav from "@/components/Nav";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Space Tourism",
  description: "The future of space travel is here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.className} ${bellefair.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

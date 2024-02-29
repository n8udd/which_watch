import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Which Watch?!",
  description:
    "A joke site build off the back of the fitfile podcast discussion about the number of Garmin watches! Play 'Guess Who' style game to guess the watch with yes/no questions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profiles and Addresses",
  description: "Case study for frontend development internship",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 box-border bg-no-repeat min-h-screen`}>
        {children}</body>
    </html>
  );
}

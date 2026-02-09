
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";


const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});



export default function RootLayout({
  children,
}:
 Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} antialiased`} suppressContentEditableWarning>
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
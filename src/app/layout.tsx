
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
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
            <body className="antialiased" suppressContentEditableWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

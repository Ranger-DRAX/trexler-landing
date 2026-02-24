
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
//   variable: "--font-plus-jakarta",
//   display: "swap",
// });
const inter = Inter({
  subsets: ["latin"],
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
        <html lang="en" className={`scroll-smooth ${inter.className}`}>
            <body className="antialiased" suppressContentEditableWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

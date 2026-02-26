import "./globals.css";
import Navbar from "@/components/layout/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased" suppressContentEditableWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import NavBar from "./components/NavBar/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <section className="px-8">{children}</section>
      </body>
    </html>
  );
}

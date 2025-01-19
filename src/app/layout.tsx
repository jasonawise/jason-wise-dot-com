import NavBar from "./components/NavBar/NavBar";
import { jetBrainsMono, quickSand } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.className} ${quickSand.variable}`}
    >
      <body>
        <NavBar />
        <section className="px-8">{children}</section>
      </body>
    </html>
  );
}

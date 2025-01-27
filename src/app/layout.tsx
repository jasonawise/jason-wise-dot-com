import { jetBrainsMono, quickSand } from "./fonts";
import "./globals.css";
import NavContent from "./ui/nav/navContent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navCss =
    "mr-4 mb-2 cursor-pointer hover:font-bold hover:border-l-2 hover:pl-2 flex";
  const navCssSmall =
    "mr-4 mb-2 cursor-pointer hover:font-bold hover:border-l-2 hover:pl-2";
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.className} ${quickSand.variable}`}
    >
      <body className="p-8">
        <div className="sm:hidden mb-6">
          <NavContent navCss={navCssSmall} />
        </div>
        <div className="flex h-screen">
          <div className="w-1/4 border-r border-gray-200 hidden sm:block">
            <h1 className="mb-8">Jason A. Wise</h1>
            <NavContent navCss={navCss} />
          </div>
          <div className="sm:w-3/4 pl-4">{children}</div>
        </div>
      </body>
    </html>
  );
}

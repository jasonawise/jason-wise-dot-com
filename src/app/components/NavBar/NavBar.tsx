import NavContent from "@/app/ui/nav/navContent";

export default function NavBar(): JSX.Element {
  const navCss =
    "mr-4 cursor-pointer hover:font-bold hover:border-l-2 hover:pl-2";

  return (
    <nav className="p-2 flex justify-end border border-white rounded-md">
      <NavContent navCss={navCss} />
    </nav>
  );
}

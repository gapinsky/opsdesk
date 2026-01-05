import ThemeSwitch from "@/myComponents/themeSwitch";

export default function Nav() {
  return (
    <nav className="fixed p-10 w-full flex items-center justify-end">
      <ThemeSwitch />
    </nav>
  );
}

"use client";

import { useTheme } from "next-themes";
import { Switch } from "../components/switch";

type ThemeMode = "light" | "dark";

export default function ThemeSwitch() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const current = (resolvedTheme ?? theme) as ThemeMode | undefined;

  const toggle = () => {
    const t = current ?? "light";
    setTheme(t === "light" ? "dark" : "light");
  };

  return <Switch onClick={() => toggle()}  />;
}

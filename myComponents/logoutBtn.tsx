import { Button } from "@/components/ui/button";
import { getSupabaseBrowserClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutBtn() {
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Wystąpił błąd:", error.message);
      return;
    }

    router.replace("/");
    router.refresh();
  }

  return (
    <Button
      variant="ghost"
      className="hover:cursor-pointer"
      onClick={handleLogout}
    >
      Wyloguj się
    </Button>
  );
}

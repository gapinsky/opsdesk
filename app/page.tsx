import { Ticket } from "@/types";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const { data, error, status } = await supabase.from("tickets").select("*");
  return (
    <pre>
      {JSON.stringify(
        {
          status,
          error: error?.message ?? null,
          data,
          count: data?.length ?? 0,
        },
        null,
        2
      )}
    </pre>
  );
}

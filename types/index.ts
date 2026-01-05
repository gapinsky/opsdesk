export type TicketPriority = "low" | "medium" | "high";

export type Ticket = {
  id: number;
  created_at: string; // timestamp bez strefy; jeśli parsujesz do Date,
  title: string;
  description: string;
  created_by: string;
  priority: TicketPriority;
};
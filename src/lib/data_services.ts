// src/lib/data_services.ts
export async function sendChatMessage(message: string) {
  const res = await fetch("/api/chats", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  if (!res.ok) {
    const { error } = await res
      .json()
      .catch(() => ({ error: "Unknown error" }));
    throw new Error(error || "Failed to send message");
  }
  return res.json() as Promise<{ reply: string }>;
}

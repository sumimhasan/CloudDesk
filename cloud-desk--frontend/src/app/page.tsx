// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to /myoffice immediately on the server
  redirect("/myoffice");

  return <div>Redirecting...</div>; // Optional, won't be visible
}

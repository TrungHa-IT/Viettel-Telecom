import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminRoot() {
  const cookieStore = await cookies();
  const session = cookieStore.get("viettel_admin_session");

  if (session && session.value === "authenticated_admin") {
    redirect("/admin/dashboard");
  } else {
    redirect("/admin/login");
  }
}

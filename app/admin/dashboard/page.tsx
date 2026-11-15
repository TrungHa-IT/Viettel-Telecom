import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import db from "@/lib/db";
import AdminClientView, { Order, PackageItem } from "./AdminClientView";

interface RawDbPackage {
  id: number;
  name: string;
  speed: string;
  price: number;
  category: string;
  features: string;
  badge: string;
}

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("viettel_admin_session");

  if (!session || session.value !== "authenticated_admin") {
    redirect("/admin/login");
  }

  const orders = db.prepare("SELECT * FROM orders ORDER BY id DESC").all() as Order[];
  const packages = db.prepare("SELECT * FROM packages ORDER BY price ASC").all() as RawDbPackage[];

  const formattedPackages: PackageItem[] = packages.map((pkg) => ({
    ...pkg,
    features: JSON.parse(pkg.features || "[]") as string[],
  }));

  return <AdminClientView initialOrders={orders} initialPackages={formattedPackages} />;
}

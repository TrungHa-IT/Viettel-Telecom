import db from "@/lib/db";
import HomePageClient from "./HomePageClient";

export const metadata = {
  title: "Viettel Telecom - Đăng Ký Lắp Mạng Cáp Quang & Truyền Hình TV360",
  description: "Trang tư vấn và đăng ký lắp mạng cáp quang Viettel, Wi-Fi 6, Wi-Fi 7, truyền hình TV360, camera an ninh.",
};

interface PageRow {
  slug: string;
  title: string;
}

interface RawDbPackage {
  id: number;
  name: string;
  speed: string;
  price: number;
  category: string;
  features: string;
  badge: string;
}

export default function Home() {
  const packages = db.prepare("SELECT * FROM packages ORDER BY price ASC").all() as RawDbPackage[];
  const pages = db.prepare("SELECT slug, title FROM pages ORDER BY id DESC").all() as PageRow[];

  const formattedPackages = packages.map((pkg) => ({
    ...pkg,
    features: JSON.parse(pkg.features || "[]") as string[],
  }));

  return <HomePageClient packages={formattedPackages} pages={pages} />;
}

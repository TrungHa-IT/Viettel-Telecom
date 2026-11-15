import { NextResponse } from "next/server";
import db from "@/lib/db";
import { cookies } from "next/headers";

interface RawDbPackage {
  id: number;
  name: string;
  speed: string;
  price: number;
  category: string;
  features: string;
  badge: string;
}

export async function GET() {
  try {
    const packages = db.prepare("SELECT * FROM packages ORDER BY price ASC").all() as RawDbPackage[];
    const parsed = packages.map((p) => ({
      ...p,
      features: JSON.parse(p.features || "[]") as string[],
    }));
    return NextResponse.json({ success: true, data: parsed });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch packages" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const session = cookieStore.get("viettel_admin_session");
  if (!session || session.value !== "authenticated_admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { name, speed, price, category, features, badge } = await request.json();
    const insert = db.prepare(
      "INSERT INTO packages (name, speed, price, category, features, badge) VALUES (?, ?, ?, ?, ?, ?)"
    );
    insert.run(name, speed, Number(price), category, JSON.stringify(features || []), badge || "");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to create package" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const cookieStore = await cookies();
  const session = cookieStore.get("viettel_admin_session");
  if (!session || session.value !== "authenticated_admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
      db.prepare("DELETE FROM packages WHERE id = ?").run(id);
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Delete failed" }, { status: 500 });
  }
}

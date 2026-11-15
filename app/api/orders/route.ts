import { NextResponse } from "next/server";
import db from "@/lib/db";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("viettel_admin_session");
  if (!session || session.value !== "authenticated_admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const orders = db.prepare("SELECT * FROM orders ORDER BY id DESC").all();
    return NextResponse.json({ success: true, data: orders });
  } catch (error) {
    console.error("Fetch orders error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customer_name, phone, address, package_name, note } = body;

    if (!customer_name || !phone || !address || !package_name) {
      return NextResponse.json(
        { success: false, message: "Vui lòng nhập đầy đủ họ tên, số điện thoại, địa chỉ và gói cước!" },
        { status: 400 }
      );
    }

    const insert = db.prepare(
      "INSERT INTO orders (customer_name, phone, address, package_name, note) VALUES (?, ?, ?, ?, ?)"
    );
    const result = insert.run(customer_name, phone, address, package_name, note || "");

    return NextResponse.json({
      success: true,
      message: "Gửi thông tin đăng ký thành công! Nhân viên Viettel sẽ liên hệ lại ngay.",
      orderId: result.lastInsertRowid,
    });
  } catch (error) {
    console.error("Submit order error:", error);
    return NextResponse.json({ success: false, message: "Lỗi lưu đăng ký!" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const cookieStore = await cookies();
  const session = cookieStore.get("viettel_admin_session");
  if (!session || session.value !== "authenticated_admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, status } = await request.json();
    db.prepare("UPDATE orders SET status = ? WHERE id = ?").run(status, id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Update failed" }, { status: 500 });
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
      db.prepare("DELETE FROM orders WHERE id = ?").run(id);
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Delete failed" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const user = db
      .prepare("SELECT * FROM users WHERE username = ? AND password = ?")
      .get(username, password) as { id: number; username: string } | undefined;

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Sai tên đăng nhập hoặc mật khẩu!" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Đăng nhập thành công!",
    });

    // Set simple secure session cookie
    response.cookies.set({
      name: "viettel_admin_session",
      value: "authenticated_admin",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { success: false, message: "Lỗi hệ thống!" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: "Đã đăng xuất!",
  });
  response.cookies.delete("viettel_admin_session");
  return response;
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Users, 
  LogOut, 
  CheckCircle2, 
  PhoneCall, 
  Trash2, 
  Plus, 
  ExternalLink,
  Shield,
  Layers
} from "lucide-react";
import Link from "next/link";

export interface Order {
  id: number;
  customer_name: string;
  phone: string;
  address: string;
  package_name: string;
  note: string;
  status: string;
  created_at: string;
}

export interface PackageItem {
  id: number;
  name: string;
  speed: string;
  price: number;
  category: string;
  features: string[];
  badge: string;
}

export default function AdminClientView({
  initialOrders,
  initialPackages,
}: {
  initialOrders: Order[];
  initialPackages: PackageItem[];
}) {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [packages, setPackages] = useState<PackageItem[]>(initialPackages);
  const [activeTab, setActiveTab] = useState<"orders" | "packages">("orders");

  // New package form state
  const [showAddModal, setShowAddModal] = useState(false);
  const [pkgName, setPkgName] = useState("");
  const [pkgSpeed, setPkgSpeed] = useState("");
  const [pkgPrice, setPkgPrice] = useState("");
  const [pkgCategory, setPkgCategory] = useState("personal");
  const [pkgBadge, setPkgBadge] = useState("");
  const [pkgFeatures, setPkgFeatures] = useState("");

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  };

  const handleUpdateStatus = async (id: number, newStatus: string) => {
    const res = await fetch("/api/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: newStatus }),
    });
    if (res.ok) {
      setOrders(orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
    }
  };

  const handleDeleteOrder = async (id: number) => {
    if (!confirm("Bạn có chắc chắn muốn xóa đơn đăng ký này?")) return;
    const res = await fetch(`/api/orders?id=${id}`, { method: "DELETE" });
    if (res.ok) {
      setOrders(orders.filter((o) => o.id !== id));
    }
  };

  const handleDeletePackage = async (id: number) => {
    if (!confirm("Bạn có chắc chắn muốn xóa gói cước này?")) return;
    const res = await fetch(`/api/packages?id=${id}`, { method: "DELETE" });
    if (res.ok) {
      setPackages(packages.filter((p) => p.id !== id));
    }
  };

  const handleCreatePackage = async (e: React.FormEvent) => {
    e.preventDefault();
    const featuresArray = pkgFeatures
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);

    const res = await fetch("/api/packages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: pkgName,
        speed: pkgSpeed,
        price: Number(pkgPrice),
        category: pkgCategory,
        badge: pkgBadge,
        features: featuresArray,
      }),
    });

    if (res.ok) {
      setShowAddModal(false);
      setPkgName("");
      setPkgSpeed("");
      setPkgPrice("");
      setPkgBadge("");
      setPkgFeatures("");
      // Refresh list
      const fetchRes = await fetch("/api/packages");
      const data = await fetchRes.json();
      if (data.success) setPackages(data.data);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#EE0033] rounded-xl flex items-center justify-center text-white shadow-md">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-lg text-neutral-900 tracking-tight flex items-center gap-2">
                VIETTEL <span className="text-[#EE0033]">ADMIN PORTAL</span>
              </span>
              <p className="text-xs text-neutral-400">Hệ thống quản lý trực tuyến</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-xs sm:text-sm text-neutral-600 hover:text-[#EE0033] flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 hover:border-red-200 transition"
            >
              <span>Xem trang chủ</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs sm:text-sm text-red-600 hover:text-white hover:bg-red-600 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 transition"
            >
              <LogOut className="w-4 h-4" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Navigation Tabs */}
        <div className="flex gap-3 mb-6 border-b border-neutral-200 pb-4">
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === "orders"
                ? "bg-[#EE0033] text-white shadow-md shadow-red-500/20"
                : "bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Khách hàng đăng ký</span>
            <span className="ml-1.5 px-2 py-0.5 rounded-full text-xs bg-black/10">
              {orders.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("packages")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === "packages"
                ? "bg-[#EE0033] text-white shadow-md shadow-red-500/20"
                : "bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Quản lý gói cước</span>
            <span className="ml-1.5 px-2 py-0.5 rounded-full text-xs bg-black/10">
              {packages.length}
            </span>
          </button>
        </div>

        {/* Tab 1: Orders */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
            <div className="p-5 border-b border-neutral-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-neutral-900">Danh sách yêu cầu lắp đặt</h2>
                <p className="text-xs text-neutral-500 mt-0.5">Dữ liệu khách hàng điền qua biểu mẫu tư vấn</p>
              </div>
            </div>

            {orders.length === 0 ? (
              <div className="p-12 text-center text-neutral-400">
                Chưa có yêu cầu đăng ký nào từ khách hàng.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-neutral-600">
                  <thead className="bg-neutral-50 text-neutral-700 text-xs uppercase tracking-wider border-b border-neutral-200">
                    <tr>
                      <th className="px-6 py-4">Mã</th>
                      <th className="px-6 py-4">Khách hàng</th>
                      <th className="px-6 py-4">Số điện thoại</th>
                      <th className="px-6 py-4">Gói cước</th>
                      <th className="px-6 py-4">Địa chỉ lắp đặt</th>
                      <th className="px-6 py-4">Ghi chú</th>
                      <th className="px-6 py-4">Trạng thái</th>
                      <th className="px-6 py-4 text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-neutral-50/80 transition">
                        <td className="px-6 py-4 font-mono font-medium text-neutral-400">#{order.id}</td>
                        <td className="px-6 py-4 font-semibold text-neutral-900">{order.customer_name}</td>
                        <td className="px-6 py-4">
                          <a
                            href={`tel:${order.phone}`}
                            className="text-[#EE0033] hover:underline font-mono font-medium flex items-center gap-1.5"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                            {order.phone}
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#EE0033] border border-red-200">
                            {order.package_name}
                          </span>
                        </td>
                        <td className="px-6 py-4 max-w-xs truncate text-neutral-700">{order.address}</td>
                        <td className="px-6 py-4 max-w-xs truncate text-neutral-400">{order.note || "—"}</td>
                        <td className="px-6 py-4">
                          <select
                            value={order.status}
                            onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                            className={`text-xs font-medium rounded-lg px-2.5 py-1.5 border focus:outline-none ${
                              order.status === "installed"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : order.status === "contacted"
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : "bg-amber-50 text-amber-700 border-amber-200"
                            }`}
                          >
                            <option value="pending">⏳ Chờ xử lý</option>
                            <option value="contacted">📞 Đã liên hệ</option>
                            <option value="installed">✅ Đã lắp đặt</option>
                            <option value="cancelled">❌ Đã hủy</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleDeleteOrder(order.id)}
                            className="p-1.5 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                            title="Xóa"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Packages */}
        {activeTab === "packages" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-5 rounded-2xl border border-neutral-200">
              <div>
                <h2 className="text-lg font-bold text-neutral-900">Danh mục Gói cước Viettel</h2>
                <p className="text-xs text-neutral-500">Các gói cước hiển thị trên trang chủ</p>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-[#EE0033] hover:bg-[#CC002B] text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm transition"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm gói mới</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        {pkg.category}
                      </span>
                      {pkg.badge && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-[#EE0033]">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{pkg.name}</h3>
                    <p className="text-2xl font-extrabold text-[#EE0033] mt-2">
                      {pkg.price.toLocaleString("vi-VN")} <span className="text-xs font-normal text-neutral-500">đ/tháng</span>
                    </p>
                    <p className="text-sm font-medium text-neutral-600 mt-1">Tốc độ: {pkg.speed}</p>

                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-1.5">
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="text-xs text-neutral-600 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-end">
                    <button
                      onClick={() => handleDeletePackage(pkg.id)}
                      className="text-xs text-neutral-400 hover:text-red-600 flex items-center gap-1 transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Xóa gói</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal: Add Package */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Thêm Gói Cước Mới</h3>
              <form onSubmit={handleCreatePackage} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">Tên gói cước</label>
                  <input
                    type="text"
                    required
                    placeholder="VD: STAR3 (Wifi 6 Mesh)"
                    value={pkgName}
                    onChange={(e) => setPkgName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-xl text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Tốc độ</label>
                    <input
                      type="text"
                      required
                      placeholder="VD: 300 Mbps"
                      value={pkgSpeed}
                      onChange={(e) => setPkgSpeed(e.target.value)}
                      className="w-full px-3 py-2 border rounded-xl text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Giá cước (VNĐ/tháng)</label>
                    <input
                      type="number"
                      required
                      placeholder="VD: 299000"
                      value={pkgPrice}
                      onChange={(e) => setPkgPrice(e.target.value)}
                      className="w-full px-3 py-2 border rounded-xl text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Phân loại</label>
                    <select
                      value={pkgCategory}
                      onChange={(e) => setPkgCategory(e.target.value)}
                      className="w-full px-3 py-2 border rounded-xl text-sm"
                    >
                      <option value="personal">Cá nhân / Hộ gia đình</option>
                      <option value="combo">Combo Internet + Truyền hình</option>
                      <option value="business">Doanh nghiệp</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Huy hiệu (Badge)</label>
                    <input
                      type="text"
                      placeholder="VD: Bán Chạy, Mới"
                      value={pkgBadge}
                      onChange={(e) => setPkgBadge(e.target.value)}
                      className="w-full px-3 py-2 border rounded-xl text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 mb-1">Tính năng nổi bật (mỗi dòng 1 tính năng)</label>
                  <textarea
                    rows={3}
                    placeholder="Trang bị modem Wifi 6&#10;Tặng thêm 1 tháng cước&#10;Miễn phí lắp đặt"
                    value={pkgFeatures}
                    onChange={(e) => setPkgFeatures(e.target.value)}
                    className="w-full px-3 py-2 border rounded-xl text-sm"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 border rounded-xl text-sm text-neutral-600 hover:bg-neutral-50"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#EE0033] hover:bg-[#CC002B] text-white rounded-xl text-sm font-semibold shadow-sm"
                  >
                    Lưu Gói Cước
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

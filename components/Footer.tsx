import Link from "next/link";
import { PhoneCall, ShieldCheck, Clock, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-xs mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EE0033] flex items-center justify-center text-white font-black text-base shadow-md">
                V
              </div>
              <div>
                <p className="text-white font-extrabold text-sm tracking-wide">
                  TỔNG ĐẠI LÝ LẮP ĐẶT VIETTEL TELECOM
                </p>
                <p className="text-slate-400 text-xs">
                  Tập đoàn Công nghiệp - Viễn thông Quân đội
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Chuyên cung cấp dịch vụ Internet Cáp Quang Siêu Tốc, Wi-Fi 6, Wi-Fi 7 thế hệ mới, Truyền Hình TV360 và Giải Pháp Camera AI Bảo Mật toàn diện cho hộ gia đình và doanh nghiệp.
            </p>
            <div className="flex flex-wrap gap-4 text-slate-300 text-xs pt-1">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#EE0033]" />
                <span>Hỗ trợ 24/7/365</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bảo hành trọn đời</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>63 Tỉnh Thành</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Dịch Vụ Nổi Bật
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/viettel-wifi-7" className="hover:text-white transition">
                  Công Nghệ Wi-Fi 7 Mới
                </Link>
              </li>
              <li>
                <Link href="/viettel-ngoai-hang-anh" className="hover:text-white text-yellow-400 font-semibold transition">
                  Ngoại Hạng Anh TV360
                </Link>
              </li>
              <li>
                <Link href="/combo-internet-truyen-hinh-viettel" className="hover:text-white transition">
                  Combo Internet & TV360
                </Link>
              </li>
              <li>
                <Link href="/dich-vu-camera-viettel" className="hover:text-white transition">
                  Camera Thông Minh AI
                </Link>
              </li>
              <li>
                <Link href="/viettel-internet-doanh-nghiep" className="hover:text-white transition">
                  Cáp Quang Doanh Nghiệp
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Hotline */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Liên Hệ Đăng Ký
            </h4>
            <div className="space-y-2">
              <a
                href="tel:18008168"
                className="inline-flex items-center gap-2 bg-[#EE0033] hover:bg-[#CC002B] text-white font-bold px-4 py-2.5 rounded-xl transition shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Tổng đài: 1800 8168</span>
              </a>
              <p className="text-slate-400 text-[11px]">
                Miễn phí cước gọi từ mọi thuê bao di động.
              </p>
              <div className="pt-2">
                <Link
                  href="/admin/login"
                  className="text-slate-400 hover:text-white text-[11px] underline transition"
                >
                  Cổng Quản Trị Nhân Viên
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-[11px]">
          © {new Date().getFullYear()} Viettel Telecom. Bản quyền thuộc Tập đoàn Công nghiệp - Viễn thông Quân đội.
        </div>
      </div>
    </footer>
  );
}

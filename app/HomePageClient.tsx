"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Wifi, 
  Tv, 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle, 
  Zap, 
  Send, 
  ArrowRight, 
  ChevronLeft,
  Flame, 
  Camera, 
  Briefcase, 
  ChevronRight, 
  Sparkles, 
  Trophy,
  Headphones,
  Check
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export interface PackageItem {
  id: number;
  name: string;
  speed: string;
  price: number;
  category: string;
  features: string[];
  badge: string;
}

export interface PageItem {
  slug: string;
  title: string;
}

const homeHeroSlides = [
  { src: "/assets/home-slide-combo.png", label: "Combo Internet, Camera và TV360" },
  { src: "/assets/home-slide-wifi.png", label: "Home Wi-Fi Viettel" },
  { src: "/assets/home-slide-tv360.png", label: "TV360 Viettel" },
  { src: "/assets/home-slide-camera.png", label: "Camera Viettel" },
];

export default function HomePageClient({
  packages,
  pages,
}: {
  packages: PackageItem[];
  pages: PageItem[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const packageTrackRef = useRef<HTMLDivElement>(null);
  const [carouselProgress, setCarouselProgress] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState<string>(packages[0]?.name || "NETVT1 (Ngoại thành)");
  const [formData, setFormData] = useState({
    customer_name: "",
    phone: "",
    address: "",
    note: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroSlideIndex((current) => (current + 1) % homeHeroSlides.length);
    }, 10_000);
    return () => window.clearInterval(timer);
  }, []);

  const filteredPackages = packages.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  const scrollPackages = (direction: -1 | 1) => {
    const track = packageTrackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstCard) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: "smooth" });
  };

  const dragState = useRef<{ pointerId: number; startX: number; scrollLeft: number } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          package_name: selectedPackage,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setFeedback({ type: "success", text: data.message });
        setFormData({ customer_name: "", phone: "", address: "", note: "" });
      } else {
        setFeedback({ type: "error", text: data.message || "Đã có lỗi xảy ra" });
      }
    } catch {
      setFeedback({ type: "error", text: "Không thể kết nối đến máy chủ" });
    } finally {
      setLoading(false);
    }
  };

  const topServices = [
    { title: "Champions League trên TV360", slug: "viettel-champions-league", icon: Trophy, badge: "HOT" },
    { title: "Wifi 7 Siêu Tốc", slug: "viettel-wifi-7", icon: Zap, badge: "MỚI" },
    { title: "Gói Wifi 6", slug: "dich-vu-viettel-wifi-6", icon: Wifi, badge: "" },
    { title: "Combo TV360", slug: "combo-internet-truyen-hinh-viettel", icon: Tv, badge: "ƯU ĐÃI" },
    { title: "Camera Giám Sát", slug: "dich-vu-camera-viettel", icon: Camera, badge: "" },
    { title: "Net Doanh Nghiệp", slug: "viettel-internet-doanh-nghiep", icon: Briefcase, badge: "" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased selection:bg-[#EE0033] selection:text-white">
      {/* Unified Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative isolate overflow-hidden bg-gradient-to-br from-[#8B0000] via-[#EE0033] to-[#B30024] px-4 py-16 text-white shadow-md lg:py-24"
      >
        <div className="absolute inset-0" aria-hidden="true">
          {homeHeroSlides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === heroSlideIndex ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url("${slide.src}")`, backgroundPosition: "center bottom" }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#750019]/90 via-[#9d0026]/75 to-[#450014]/70" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black tracking-wider border border-white/20 text-yellow-300 animate-pulse-glow">
              <Sparkles className="w-4 h-4" /> BĂNG THÔNG KHÔNG GIỚI HẠN 2026
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-sm">
              Lắp Mạng Cáp Quang <br />
              <span className="text-yellow-300">Viettel Wi-Fi 6 & 7</span> Siêu Tốc
            </h1>
            <p className="text-white/90 text-base sm:text-lg max-w-xl font-medium leading-relaxed mx-auto lg:mx-0">
              Chọn gói Internet từ 300 Mbps đến 2 Gbps, Wi-Fi 6/7, Mesh và TV360. Cước, thiết bị và ưu đãi được xác nhận theo khu vực và địa chỉ lắp đặt.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#register-form"
                className="bg-white text-[#EE0033] hover:bg-slate-100 font-extrabold px-8 py-4 rounded-2xl text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                <span>ĐĂNG KÝ LẮP ĐẶT NGAY</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="bg-black/25 hover:bg-black/35 border border-white/30 text-white font-bold px-7 py-4 rounded-2xl text-base transition duration-200"
              >
                Xem Bảng Giá Cước
              </a>
            </div>

            {/* Micro proof points */}
            <div className="pt-4 flex flex-wrap gap-6 justify-center lg:justify-start text-xs font-semibold text-white/90">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-yellow-300" /> Lắp đặt siêu tốc trong 24h
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-yellow-300" /> Miễn phí Modem Wi-Fi
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-yellow-300" /> Hỗ trợ kỹ thuật 24/7
              </span>
            </div>
          </div>

          {/* Hero Banner Graphic using local asset */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-3xl shadow-2xl">
                <Image
                  src="/assets/hero-fiber.svg"
                  alt="Viettel Cáp Quang Siêu Tốc"
                  width={500}
                  height={400}
                  priority
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-slate-950/30 px-3 py-2 backdrop-blur-sm" aria-label="Chọn ảnh nền trang chủ">
          {homeHeroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setHeroSlideIndex(index)}
              aria-label={`Hiện ảnh: ${slide.label}`}
              aria-current={heroSlideIndex === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${heroSlideIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/55 hover:bg-white/85"}`}
            />
          ))}
          <span className="ml-1 text-[10px] font-semibold text-white/90">Đổi ảnh 10 giây</span>
        </div>
      </section>

      {/* Featured Navigation Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {topServices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={`/${item.slug}`}
                className="group flex flex-col items-center justify-center p-3 rounded-xl border border-slate-100 hover:border-[#EE0033]/30 hover:bg-red-50/50 transition-all duration-200 relative text-center"
              >
                {item.badge && (
                  <span className="absolute top-2 right-2 text-[9px] font-black bg-[#EE0033] text-white px-1.5 py-0.2 rounded-full">
                    {item.badge}
                  </span>
                )}
                <div className="w-11 h-11 rounded-xl bg-red-50 group-hover:bg-[#EE0033] text-[#EE0033] group-hover:text-white flex items-center justify-center transition-colors mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 group-hover:text-[#EE0033] leading-tight">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Packages / Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black text-[#EE0033] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Ưu Đãi Đặc Quyền Viettel
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            BẢNG GIÁ LẮP ĐẶT CÁP QUANG TỐC ĐỘ CAO
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Phù hợp mọi nhu cầu: Cá nhân, gia đình, livestream, chơi game eSports và doanh nghiệp
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: "all", label: "Tất Cả Gói Cước" },
            { id: "personal", label: "Cá Nhân & Gia Đình" },
            { id: "combo", label: "Combo Net + TV360" },
            { id: "business", label: "Doanh Nghiệp" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition duration-150 ${
                selectedCategory === tab.id
                  ? "bg-[#EE0033] text-white shadow-md shadow-red-500/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <p className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-xs leading-relaxed text-slate-700">
          Giá tham khảo Viettel TP.HCM tháng 11/2026, đã gồm VAT. Giá, thiết bị và ưu đãi có thể khác theo khu vực nội thành/ngoại thành, hạ tầng và lựa chọn TV360 App/Box; vui lòng xác nhận theo địa chỉ lắp đặt.
        </p>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-medium text-slate-500">
            Đang hiển thị {Math.min(filteredPackages.length, 3)} gói mỗi lượt · Kéo ngang để xem đủ {filteredPackages.length} gói
          </p>
          <div className="flex gap-2">
            <button type="button" onClick={() => scrollPackages(-1)} aria-label="Xem các gói trước" className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-[#EE0033] hover:text-[#EE0033]">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => scrollPackages(1)} aria-label="Xem các gói tiếp theo" className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-[#EE0033] hover:text-[#EE0033]">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Packages carousel */}
        <div
          key={selectedCategory}
          ref={packageTrackRef}
          onPointerDown={(event) => {
            if (event.pointerType === "mouse" && event.button !== 0) return;
            const track = packageTrackRef.current;
            if (!track) return;
            dragState.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: track.scrollLeft };
            track.setPointerCapture(event.pointerId);
            track.classList.add("cursor-grabbing", "select-none");
          }}
          onPointerMove={(event) => {
            const drag = dragState.current;
            const track = packageTrackRef.current;
            if (!drag || !track || drag.pointerId !== event.pointerId) return;
            track.scrollLeft = drag.scrollLeft - (event.clientX - drag.startX);
          }}
          onScroll={(event) => {
            const track = event.currentTarget;
            const maxScroll = track.scrollWidth - track.clientWidth;
            setCarouselProgress(maxScroll > 0 ? track.scrollLeft / maxScroll : 0);
          }}
          onPointerUp={(event) => {
            const track = packageTrackRef.current;
            if (dragState.current?.pointerId === event.pointerId) dragState.current = null;
            track?.classList.remove("cursor-grabbing", "select-none");
          }}
          onPointerCancel={() => {
            dragState.current = null;
            packageTrackRef.current?.classList.remove("cursor-grabbing", "select-none");
          }}
          className="flex cursor-grab touch-pan-y snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-5 [scrollbar-color:#ee0033_#e2e8f0] [scrollbar-width:thin]"
          aria-label="Danh sách gói cước, kéo ngang để xem thêm"
        >
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`w-full shrink-0 snap-start rounded-3xl border bg-white transition duration-300 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-xl hover:-translate-y-1 sm:basis-[calc(50%_-_0.75rem)] lg:basis-[calc(33.333%_-_1rem)] ${
                pkg.badge ? "border-[#EE0033] ring-2 ring-[#EE0033]/20" : "border-slate-200"
              }`}
            >
              {pkg.badge && (
                <div className="bg-[#EE0033] text-white text-xs font-black py-1 px-4 text-center tracking-wider uppercase flex items-center justify-center gap-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">{pkg.name}</h3>
                    <div className="mt-1 inline-block px-2.5 py-0.5 bg-red-50 text-[#EE0033] font-bold text-xs rounded-md">
                      Tốc độ: {pkg.speed}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-black text-[#EE0033] tracking-tight">
                    {pkg.price.toLocaleString("vi-VN")}
                  </span>
                  <span className="ml-1 text-sm text-slate-500 font-medium">đ / tháng</span>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <button
                  onClick={() => {
                    setSelectedPackage(pkg.name);
                    const el = document.getElementById("register-form");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-[#EE0033] hover:bg-[#CC002B] text-white font-bold py-3.5 rounded-xl transition duration-150 shadow-md shadow-red-500/20 flex items-center justify-center gap-2"
                >
                  <span>Chọn Gói Cước Này</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200" aria-hidden="true">
          <div className="h-full rounded-full bg-gradient-to-r from-[#EE0033] via-[#ff6b45] to-[#ffc247] transition-[width] duration-200" style={{ width: `${filteredPackages.length > 3 ? 25 + carouselProgress * 75 : 100}%` }} />
        </div>
      </section>

      {/* Why Choose Viettel Section */}
      <section className="bg-white py-16 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              TẠI SAO NÊN CHỌN CÁP QUANG VIETTEL?
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Hạ tầng viễn thông hàng đầu Việt Nam cam kết chất lượng ổn định nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-[#EE0033] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">Tốc Độ & Băng Thông Thực</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Hạ tầng 100% cáp quang FTTH với nhiều tuyến cáp quang biển dự phòng, cam kết tốc độ chuẩn không bị bóp băng thông.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-[#EE0033] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">Thiết Bị Đời Mới Miễn Phí</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Trang bị Modem chuẩn Wi-Fi 6 hoặc Wi-Fi 7 thế hệ mới, hỗ trợ mesh xuyên tường cho biệt thự và nhà nhiều tầng.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-[#EE0033] flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">Hỗ Trợ Kỹ Thuật 24/7</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Đội ngũ kỹ thuật viên thường trực khắp các phường xã, hỗ trợ kiểm tra và xử lý sự cố trong vòng 2 giờ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register-form" className="max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#EE0033] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">
              HỖ TRỢ TOÀN QUỐC
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-2">
              ĐĂNG KÝ TƯ VẤN LẮP ĐẶT NHANH
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Điền thông tin bên dưới, chuyên viên Viettel sẽ liên hệ lại ngay trong 10 phút.
            </p>
          </div>

          {feedback && (
            <div
              className={`p-4 rounded-xl text-sm mb-6 font-bold flex items-center gap-2 ${
                feedback.type === "success"
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-red-50 text-[#EE0033] border border-red-200"
              }`}
            >
              {feedback.type === "success" ? <CheckCircle className="w-5 h-5 text-emerald-600" /> : <Flame className="w-5 h-5 text-red-600" />}
              <span>{feedback.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Họ và tên của bạn *
                </label>
                <input
                  type="text"
                  required
                  placeholder="VD: Nguyễn Văn A"
                  value={formData.customer_name}
                  onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EE0033] bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Số điện thoại liên hệ *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="VD: 0988 123 456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EE0033] bg-white text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Gói cước quan tâm *
                </label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EE0033] bg-white text-sm font-semibold"
                >
                  {packages.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.speed}) - {p.price.toLocaleString("vi-VN")}đ
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Địa chỉ lắp đặt *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Số nhà, Phường/Xã, Quận/Huyện, Tỉnh/TP"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EE0033] bg-white text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Ghi chú thêm (khung giờ liên hệ, vị trí...)
              </label>
              <textarea
                rows={3}
                placeholder="VD: Lắp đặt vào cuối tuần, cần khảo sát tầng 3..."
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EE0033] bg-white text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#EE0033] hover:bg-[#CC002B] text-white font-extrabold py-4 rounded-xl text-base shadow-lg shadow-red-500/25 transition duration-150 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              <span>{loading ? "Đang gửi đăng ký..." : "GỬI ĐĂNG KÝ TƯ VẤN NGAY"}</span>
            </button>
          </form>
        </div>
      </section>

      {/* Articles / Database Pages Directory */}
      {pages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="border-t border-slate-200 pt-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Cẩm Nang & Hướng Dẫn Dịch Vụ Viettel
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {pages.slice(0, 16).map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#EE0033] hover:border-[#EE0033]/40 transition line-clamp-1"
                >
                  📄 {item.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Floating Hotline / Contact Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="tel:0944362986"
          className="bg-[#EE0033] hover:bg-[#CC002B] text-white p-3.5 sm:px-5 sm:py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 animate-bounce-subtle group transition"
          aria-label="Gọi nhân viên tư vấn 0944 362 986"
        >
          <PhoneCall className="w-5 h-5 animate-pulse" />
          <span className="hidden sm:inline text-xs">Tư vấn: 0944 362 986</span>
        </a>
      </div>

      {/* Unified Footer */}
      <Footer />
    </div>
  );
}

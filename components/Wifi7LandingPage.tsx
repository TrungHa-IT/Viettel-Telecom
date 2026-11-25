"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  CheckCircle2,
  Gamepad2,
  Gauge,
  Home,
  Network,
  RadioTower,
  Router,
  ShieldCheck,
  Smartphone,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { wifi7Plans } from "@/lib/wifi7Plans";

const technologies = [
  { icon: Network, title: "Multi-Link Operation", body: "MLO cho phép thiết bị tương thích khai thác nhiều liên kết Wi-Fi để cải thiện thông lượng và khả năng phản hồi." },
  { icon: RadioTower, title: "Kênh rộng đến 320 MHz", body: "Wi-Fi 7 hỗ trợ kênh rộng hơn khi thiết bị, cấu hình và điều kiện phổ tần cho phép." },
  { icon: Gauge, title: "4096-QAM", body: "Mật độ điều chế cao hơn giúp truyền nhiều dữ liệu hơn trong điều kiện tín hiệu phù hợp." },
  { icon: Wifi, title: "Kết nối nhiều thiết bị", body: "Đáp ứng nhà có nhiều điện thoại, máy tính, camera, TV và thiết bị nhà thông minh." },
];

const useCases = [
  { icon: Home, title: "Gia đình", body: "Nhiều thiết bị, TV độ phân giải cao, camera và nhu cầu làm việc trực tuyến." },
  { icon: Gamepad2, title: "Gaming & streaming", body: "Băng thông rộng cho tải dữ liệu, livestream và chơi game trên thiết bị tương thích." },
  { icon: Building2, title: "Nhà nhiều tầng", body: "Chọn gói kèm Mesh để mở rộng vùng phủ theo diện tích và kết cấu nhà." },
  { icon: Smartphone, title: "Smart Home", body: "Kết nối hệ sinh thái thiết bị thông minh và IoT trong cùng không gian." },
];

export default function Wifi7LandingPage() {
  const planTrackRef = useRef<HTMLDivElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState(0);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [showPlanPicker, setShowPlanPicker] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(wifi7Plans[0]);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const openConsultation = (planName?: string) => {
    const plan = wifi7Plans.find((item) => item.name === planName);
    if (plan) setSelectedPlan(plan);
    setFeedback(null);
    setShowPlanPicker(false);
    setIsConsultationOpen(true);
  };

  const closeConsultation = useCallback(() => {
    if (isSubmitting) return;
    setIsConsultationOpen(false);
    setShowPlanPicker(false);
  }, [isSubmitting]);

  useEffect(() => {
    if (!isConsultationOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => phoneInputRef.current?.focus(), 40);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsConsultationOpen(false);
        setShowPlanPicker(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeConsultation, isConsultationOpen]);

  const handleConsultationSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: customerName.trim(),
          phone: phone.trim(),
          address: address.trim(),
          package_name: selectedPlan.name,
          note: "Tư vấn lắp đặt Wi-Fi 7 Viettel",
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Chưa gửi được thông tin. Vui lòng thử lại.");
      setFeedback({ type: "success", text: "Nhân viên tư vấn sẽ liên hệ với bạn trong thời gian sớm nhất." });
      setCustomerName("");
      setPhone("");
      setAddress("");
    } catch (error) {
      setFeedback({ type: "error", text: error instanceof Error ? error.message : "Chưa gửi được thông tin. Vui lòng thử lại." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollPlans = (direction: -1 | 1) => {
    const track = planTrackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstCard) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased flex flex-col">
      <Header activeSlug="viettel-wifi-7" />

      <main>
        <section
          className="relative isolate overflow-hidden bg-cover bg-center text-white"
          style={{ backgroundImage: 'linear-gradient(105deg, rgba(40, 0, 12, .96) 0%, rgba(110, 0, 27, .88) 52%, rgba(15, 23, 42, .78) 100%), url("/assets/hero-internet-hcm.png")' }}
        >
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#EE0033]/30 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:px-8">
            <div className="space-y-5 text-center lg:col-span-7 lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-300/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[.16em] text-amber-200 backdrop-blur">
                <Zap className="h-4 w-4" /> Viettel · XGS-PON · Wi-Fi 7
              </span>
              <h1 className="text-4xl font-black leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
                Internet tốc độ cao <span className="text-amber-300">với Wi-Fi 7</span>
              </h1>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-white/85 sm:text-lg lg:mx-0">
                Chọn tốc độ GIGA đến 2 Gbps, modem Wi-Fi 7 và số lượng Mesh phù hợp với diện tích nhà bạn.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-1 lg:justify-start">
                <a href="#wifi7-plans" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-[#B30024] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40">
                  Xem bảng giá <ArrowDown className="h-4 w-4" />
                </a>
                <button type="button" onClick={() => openConsultation()} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/45 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
                  Tư vấn lắp đặt
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-2 pt-1 text-xs font-semibold lg:justify-start">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-white/85"><Check className="h-4 w-4 text-emerald-300" /> Modem Wi-Fi 7</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-white/85"><Check className="h-4 w-4 text-emerald-300" /> Có gói kèm Mesh</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-white/85"><Check className="h-4 w-4 text-emerald-300" /> Giá gồm VAT</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="mx-auto max-w-md rounded-[2rem] border border-white/25 bg-white/10 p-3 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-4">
                <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white via-white to-red-50 p-5 sm:p-6">
                  <div className="mb-1 flex items-center justify-between"><span className="rounded-full bg-red-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em] text-[#B30024]">Kết nối thế hệ mới</span><span className="text-xs font-bold text-slate-400">XGS-PON</span></div>
                  <Image src="/assets/wifi7-modem.svg" alt="Thiết bị Wi-Fi 7 Viettel" width={460} height={320} priority className="mx-auto h-44 w-full object-contain sm:h-52" />
                  <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-900 px-4 py-4 text-white sm:px-5">
                    <div><p className="text-[10px] font-bold uppercase tracking-widest text-white/65">Gói Wi-Fi 7 từ</p><p className="mt-1 text-2xl font-black">279.000đ<span className="ml-1 text-xs font-semibold text-white/70">/tháng</span></p></div>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#EE0033] text-white"><Router className="h-5 w-5" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-6 grid max-w-7xl grid-cols-2 gap-3 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { value: "1–2 Gbps", label: "Tốc độ gói GIGA", icon: Gauge },
            { value: "Wi-Fi 7", label: "Chuẩn kết nối mới", icon: Wifi },
            { value: "MLO", label: "Đa liên kết", icon: Network },
            { value: "320 MHz", label: "Độ rộng kênh tối đa*", icon: RadioTower },
          ].map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-900/5 sm:gap-4 sm:p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-50 text-[#EE0033] sm:h-11 sm:w-11"><Icon className="h-5 w-5" /></span>
              <div className="min-w-0"><p className="text-lg font-black leading-tight text-slate-900 sm:text-xl">{value}</p>
              <p className="mt-1 text-[11px] font-semibold leading-tight text-slate-500 sm:text-xs">{label}</p></div>
            </div>
          ))}
        </section>

        <section className="mx-auto grid max-w-7xl gap-7 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-14">
          <div className="lg:col-span-5">
            <span className="text-xs font-black uppercase tracking-[.18em] text-[#EE0033]">Công nghệ kết nối mới</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Wi-Fi 7 là gì?</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Wi-Fi 7 (IEEE 802.11be) là thế hệ Wi-Fi kế tiếp, bổ sung các công nghệ như MLO, 4096-QAM và kênh rộng đến 320 MHz. Khi kết hợp hạ tầng cáp quang XGS-PON, các gói GIGA Viettel có tốc độ 1 Gbps hoặc 2 Gbps.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">* Tính năng và hiệu năng thực tế phụ thuộc thiết bị đầu cuối, cấu hình, vùng phủ và điều kiện phổ tần.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {technologies.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md sm:p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-red-50 text-[#EE0033]"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-3 font-extrabold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="wifi7-plans" className="scroll-mt-24 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div className="max-w-2xl">
                <span className="text-xs font-black uppercase tracking-[.18em] text-[#EE0033]">Gói cước Wi-Fi 7</span>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Chọn tốc độ và vùng phủ phù hợp</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">Từ GIGA1 1 Gbps đến GIGA8 2 Gbps. Chọn gói theo tốc độ và số lượng Mesh.</p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => scrollPlans(-1)} aria-label="Xem gói trước" className="grid h-11 w-11 place-items-center rounded-xl border border-red-100 bg-red-50 text-[#EE0033] shadow-sm transition hover:-translate-x-0.5 hover:border-[#EE0033] hover:bg-[#EE0033] hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200"><ChevronLeft className="h-5 w-5" /></button>
                <button type="button" onClick={() => scrollPlans(1)} aria-label="Xem gói tiếp theo" className="grid h-11 w-11 place-items-center rounded-xl border border-red-100 bg-red-50 text-[#EE0033] shadow-sm transition hover:translate-x-0.5 hover:border-[#EE0033] hover:bg-[#EE0033] hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>

            <div
              ref={planTrackRef}
              onScroll={(event) => {
                const track = event.currentTarget;
                const maxScroll = track.scrollWidth - track.clientWidth;
                setProgress(maxScroll > 0 ? track.scrollLeft / maxScroll : 0);
              }}
              className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 [scrollbar-color:#ee0033_#e2e8f0] [scrollbar-width:thin]"
              aria-label="Các gói Internet Wi-Fi 7 Viettel, kéo ngang để xem thêm"
            >
              {wifi7Plans.map((plan) => (
                <article key={plan.name} className={`flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[48%] lg:w-[calc(33.333%_-_0.7rem)] ${plan.isHot ? "border-[#EE0033] ring-2 ring-[#EE0033]/15" : "border-slate-200"}`}>
                  <div className={`flex items-center justify-between px-5 py-3 text-xs font-extrabold uppercase tracking-wider ${plan.isHot ? "bg-[#EE0033] text-white" : "bg-slate-900 text-white"}`}>
                    <span>{plan.label}</span><Zap className="h-4 w-4 text-amber-300" />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div><h3 className="text-2xl font-black text-slate-900">{plan.name}</h3><span className="mt-2 inline-flex rounded-lg bg-red-50 px-2.5 py-1 text-xs font-bold text-[#EE0033]">Tốc độ {plan.speed}</span></div>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700"><Router className="h-5 w-5" /></span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{plan.description}</p>
                    <p className="mt-4 text-3xl font-black tracking-tight text-[#EE0033]">{plan.price.toLocaleString("vi-VN")}<span className="ml-1 text-sm font-semibold text-slate-500">đ/tháng</span></p>
                    <div className="my-4 h-px bg-slate-100" />
                    <ul className="flex-1 space-y-2.5 text-sm text-slate-700">
                      {plan.features.map((feature) => <li key={feature} className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /><span>{feature}</span></li>)}
                    </ul>
                    <button type="button" onClick={() => openConsultation(plan.name)} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#EE0033] px-4 py-3 text-sm font-extrabold text-white shadow-md shadow-red-600/15 transition hover:-translate-y-0.5 hover:bg-[#ce002c] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200">
                      Tư vấn gói {plan.name}<ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-gradient-to-r from-[#EE0033] to-amber-300 transition-[width] duration-200" style={{ width: `${wifi7Plans.length > 3 ? 25 + progress * 75 : 100}%` }} /></div>
            <p className="mt-2 text-center text-xs text-slate-500">Vuốt ngang để xem đủ 7 gói · Giá đã gồm VAT</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div><span className="text-xs font-black uppercase tracking-[.18em] text-[#EE0033]">Tham khảo nhanh</span><h2 className="mt-2 text-3xl font-black text-slate-900">Bảng giá Wi-Fi 7 Viettel</h2></div>
            <p className="text-xs text-slate-500">Đơn vị: đồng/tháng</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-900 text-white"><tr>{["Gói", "Tốc độ", "Trang bị", "Phí hòa mạng*", "Giá/tháng"].map((title) => <th key={title} className="px-5 py-4 font-extrabold">{title}</th>)}</tr></thead>
              <tbody>{wifi7Plans.map((plan) => <tr key={plan.name} className="border-t border-slate-100 even:bg-slate-50/70"><th scope="row" className="whitespace-nowrap px-5 py-4 font-black text-slate-900">{plan.name}</th><td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-700">{plan.speed}</td><td className="px-5 py-4 text-slate-600">{plan.equipment}</td><td className="whitespace-nowrap px-5 py-4 text-slate-600">300.000đ</td><td className="whitespace-nowrap px-5 py-4 font-black text-[#EE0033]">{plan.price.toLocaleString("vi-VN")}đ</td></tr>)}</tbody>
            </table>
          </div>
          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-slate-700">* Giá tham khảo các gói GIGA Viettel, đã gồm VAT. Phí hòa mạng tham khảo 300.000đ; tốc độ, thiết bị và khả năng cung cấp phụ thuộc hạ tầng XGS-PON tại địa chỉ. Vui lòng xác nhận với Viettel trước khi đăng ký.</p>
          <p className="mt-3 text-xs text-slate-500">Nguồn giá và thông số: <a className="font-bold text-[#EE0033] underline" href="https://www.vietteltelecom.vn/tin-tuc/chi-tiet/viettel-chinh-thuc-cung-cap-cong-nghe-wi-fi-7-trai-nghiem-internet-dinh-cao-toc-do-den-2-gbps-chi-tu-279kthang/11394860" target="_blank" rel="noreferrer">Viettel Telecom</a> và <a className="font-bold text-[#EE0033] underline" href="https://www.viettelhochiminh.vn/internet-wifi-7-viettel.html" target="_blank" rel="noreferrer">Viettel TP.HCM</a>.</p>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-9 max-w-3xl text-center"><span className="text-xs font-black uppercase tracking-[.18em] text-[#EE0033]">Quyền lợi đăng ký</span><h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Chính sách và ưu đãi</h2><p className="mt-3 text-sm text-slate-600">Điều kiện áp dụng được xác nhận theo khu vực và thời điểm đăng ký.</p></div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { icon: BadgeCheck, title: "Trả trước 12 tháng", body: "Tặng thêm 01 tháng cước tại Hà Nội và TP.HCM theo chương trình được công bố." },
                { icon: Router, title: "Thiết bị theo gói", body: "Modem Wi-Fi 7 và số lượng Mesh tương ứng với lựa chọn GIGA." },
                { icon: ShieldCheck, title: "Kiểm tra vùng phủ", body: "Viettel kiểm tra hạ tầng XGS-PON và điều kiện lắp đặt theo địa chỉ." },
              ].map(({ icon: Icon, title, body }) => <article key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#EE0033] shadow-sm"><Icon className="h-5 w-5" /></span><div><h3 className="font-extrabold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-7 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-14">
          <div className="lg:col-span-5"><span className="text-xs font-black uppercase tracking-[.18em] text-[#EE0033]">So sánh thế hệ Wi-Fi</span><h2 className="mt-3 text-3xl font-black text-slate-900">Wi-Fi 7 khác gì Wi-Fi 6?</h2><p className="mt-4 text-sm leading-relaxed text-slate-600">Wi-Fi 7 bổ sung MLO, hỗ trợ kênh rộng đến 320 MHz và 4096-QAM. Thiết bị đầu cuối tương thích mới khai thác được các tính năng này.</p></div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-7"><table className="w-full min-w-[560px] text-left text-sm"><thead className="bg-slate-900 text-white"><tr><th className="px-5 py-4">Tiêu chí</th><th className="px-5 py-4">Wi-Fi 6</th><th className="px-5 py-4">Wi-Fi 7</th></tr></thead><tbody>{[["Chuẩn IEEE", "802.11ax", "802.11be"], ["Kênh tối đa", "160 MHz", "320 MHz*"], ["Điều chế", "1024-QAM", "4096-QAM"], ["Multi-Link Operation", "Không", "Có"]].map(([key, oldValue, newValue]) => <tr key={key} className="border-t border-slate-100 even:bg-slate-50"><th className="px-5 py-4 font-bold text-slate-800">{key}</th><td className="px-5 py-4 text-slate-600">{oldValue}</td><td className="px-5 py-4 font-bold text-[#EE0033]">{newValue}</td></tr>)}</tbody></table></div>
        </section>

        <section className="bg-slate-900 py-12 text-white sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 max-w-2xl"><span className="text-xs font-black uppercase tracking-[.18em] text-amber-300">Gợi ý nhu cầu</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Wi-Fi 7 phù hợp với ai?</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{useCases.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[.06] p-5 transition hover:-translate-y-1 hover:bg-white/[.1]"><Icon className="h-6 w-6 text-amber-300" /><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p></article>)}</div></div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <h2 className="mb-6 flex items-center justify-center gap-2 text-center text-3xl font-black text-slate-900"><CircleHelp className="h-6 w-6 text-[#EE0033]" /> Câu hỏi thường gặp</h2>
          <div className="space-y-3">{[
            ["Gói Wi-Fi 7 Viettel có giá bao nhiêu?", "Các gói GIGA tham khảo từ 279.000đ đến 515.000đ/tháng, đã gồm VAT. Giá và điều kiện triển khai cần xác nhận theo địa chỉ."],
            ["Nhà nhiều tầng nên chọn gói nào?", "Có thể tham khảo GIGA2, GIGA3, GIGA4 hoặc các gói GIGA6–GIGA8 kèm Mesh. Số lượng thiết bị phù hợp tùy diện tích và kết cấu nhà."],
            ["Thiết bị Wi-Fi cũ có dùng được không?", "Thiết bị Wi-Fi thế hệ trước vẫn có thể kết nối; tốc độ và tính năng phụ thuộc chuẩn Wi-Fi của thiết bị đó."],
            ["Địa chỉ nào cũng lắp được Wi-Fi 7 Viettel?", "Không. Gói GIGA cần hạ tầng XGS-PON sẵn sàng tại khu vực. Viettel sẽ kiểm tra trước khi xác nhận đăng ký."],
          ].map(([question, answer]) => <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-red-200 open:shadow-sm"><summary className="cursor-pointer list-none pr-7 font-bold text-slate-900 marker:hidden">{question}<span className="float-right text-[#EE0033] transition group-open:rotate-45">＋</span></summary><p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p></details>)}</div>
        </section>

        <section id="wifi7-contact" className="bg-gradient-to-r from-[#92001e] to-[#EE0033] px-4 py-14 text-white sm:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-red-200">Tư vấn Wi-Fi 7 Viettel</p><h2 className="mt-2 text-2xl font-black sm:text-3xl">Chọn gói theo diện tích và nhu cầu của bạn</h2><p className="mt-2 text-sm text-white/80">Để lại thông tin hoặc gọi nhân viên tư vấn 0944 362 986.</p></div>
            <div className="flex flex-wrap justify-center gap-3"><button type="button" onClick={() => openConsultation()} className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-extrabold text-[#EE0033] shadow-lg transition hover:-translate-y-0.5">Đăng ký tư vấn <ArrowRight className="h-4 w-4" /></button><a href="tel:0944362986" className="rounded-xl border border-white/40 px-5 py-3.5 text-sm font-extrabold text-white transition hover:bg-white/10">Gọi 0944 362 986</a></div>
          </div>
        </section>
      </main>

      {isConsultationOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/55 px-3 py-5 backdrop-blur-[3px] sm:px-5"
          onMouseDown={(event) => { if (event.target === event.currentTarget) closeConsultation(); }}
        >
          <section role="dialog" aria-modal="true" aria-labelledby="wifi7-consultation-title" className="relative my-auto w-full max-w-[570px] overflow-hidden rounded-[1.65rem] border border-white/70 bg-white shadow-2xl shadow-slate-950/30">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-red-50 via-white to-red-50" aria-hidden="true" />
            <button type="button" onClick={closeConsultation} disabled={isSubmitting} aria-label="Đóng cửa sổ tư vấn" className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#EE0033] text-white shadow-lg transition hover:rotate-90 hover:bg-[#c9002b] disabled:opacity-50"><X className="h-5 w-5" /></button>

            <div className="relative px-5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-8">
              <div className="mx-auto max-w-sm pr-8 text-center sm:pr-0">
                <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#B30024]">Đăng ký Wi-Fi 7 Viettel</span>
                <h2 id="wifi7-consultation-title" className="mt-2 text-2xl font-black text-slate-900 sm:text-[27px]">Đăng ký nhận tư vấn</h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">Để lại số điện thoại, nhân viên Viettel sẽ liên hệ tư vấn gói cước và kiểm tra hạ tầng.</p>
              </div>

              <form onSubmit={handleConsultationSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="wifi7-phone" className="mb-1.5 block text-xs font-bold text-slate-700">Số điện thoại <span className="text-[#EE0033]">*</span></label>
                  <div className="flex h-[50px] items-center rounded-xl border border-slate-200 bg-white shadow-sm transition focus-within:border-[#EE0033] focus-within:ring-2 focus-within:ring-[#EE0033]/10">
                    <span className="ml-3 rounded bg-red-50 px-1.5 py-1 text-base" aria-hidden="true">🇻🇳</span>
                    <input ref={phoneInputRef} id="wifi7-phone" type="tel" inputMode="tel" autoComplete="tel" required minLength={9} maxLength={15} value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Nhập số điện thoại" className="h-full w-full rounded-r-xl bg-transparent px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="wifi7-customer-name" className="mb-1.5 block text-xs font-bold text-slate-700">Tên khách hàng <span className="font-normal text-slate-400">(không bắt buộc)</span></label>
                  <input id="wifi7-customer-name" type="text" autoComplete="name" value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Nhập họ và tên" className="h-[50px] w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#EE0033] focus:ring-2 focus:ring-[#EE0033]/10" />
                </div>

                <div>
                  <label htmlFor="wifi7-address" className="mb-1.5 block text-xs font-bold text-slate-700">Phường/xã, địa chỉ <span className="font-normal text-slate-400">(không bắt buộc)</span></label>
                  <input id="wifi7-address" type="text" autoComplete="street-address" value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Số nhà, đường, phường/xã..." className="h-[50px] w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#EE0033] focus:ring-2 focus:ring-[#EE0033]/10" />
                </div>

                <div className="pt-1">
                  <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-700"><span className="grid h-6 w-6 place-items-center rounded-lg bg-red-50 text-[10px] text-[#B30024]">02</span> Lựa chọn gói cước</p>
                  <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/70 to-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0"><span className="text-[10px] font-black uppercase tracking-wider text-[#B30024]">Gói đang chọn</span><p className="mt-1 truncate text-lg font-black text-slate-900">{selectedPlan.name}</p><p className="text-xs text-slate-500">Wi-Fi 7 · {selectedPlan.speed} · {selectedPlan.price.toLocaleString("vi-VN")}đ/tháng</p></div>
                      <CheckCircle2 className="h-7 w-7 shrink-0 text-emerald-500" />
                    </div>
                    <button type="button" onClick={() => setShowPlanPicker((current) => !current)} className="mt-2 text-xs font-bold text-[#B30024] underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200">{showPlanPicker ? "Ẩn danh sách gói" : "Thay đổi gói cước"}</button>
                    {showPlanPicker && <div className="mt-3 grid max-h-44 grid-cols-2 gap-2 overflow-y-auto border-t border-red-100 pt-3">{wifi7Plans.map((plan) => <button key={plan.name} type="button" onClick={() => { setSelectedPlan(plan); setShowPlanPicker(false); }} className={`rounded-xl border px-3 py-2 text-left transition ${selectedPlan.name === plan.name ? "border-[#EE0033] bg-red-50" : "border-slate-200 bg-white hover:border-red-300"}`}><span className="block text-sm font-black text-slate-900">{plan.name}</span><span className="text-[11px] text-slate-500">{plan.price.toLocaleString("vi-VN")}đ · {plan.speed}</span></button>)}</div>}
                  </div>
                </div>

                {feedback && <div role={feedback.type === "error" ? "alert" : "status"} className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${feedback.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-700"}`}>{feedback.type === "success" && <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />}<div>{feedback.type === "success" && <p className="font-black">Bạn đã gửi yêu cầu thành công!</p>}<p className={feedback.type === "success" ? "mt-0.5 font-medium" : "font-semibold"}>{feedback.text}</p></div></div>}

                <button type="submit" disabled={isSubmitting} className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EE0033] to-[#B30024] px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 disabled:cursor-wait disabled:opacity-60">
                  {isSubmitting ? "ĐANG GỬI THÔNG TIN..." : "👉 XÁC NHẬN ĐĂNG KÝ"}
                </button>
                <p className="text-center text-[10px] text-slate-500">Thông tin được dùng để tư vấn dịch vụ Viettel.</p>
              </form>
            </div>
          </section>
        </div>
      )}

      <Footer />
    </div>
  );
}


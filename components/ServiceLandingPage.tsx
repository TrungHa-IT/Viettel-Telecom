"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import {
  ArrowDown, ArrowRight, BadgeCheck, Check, ChevronLeft, ChevronRight,
  CircleHelp, Clock3, Flame, MessageCircle, PhoneCall, ShieldCheck, Sparkles,
  Tv, Wifi, X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnterpriseContactWidget from "@/components/EnterpriseContactWidget";
import type { DetailedService } from "@/lib/servicesData";

function CameraDevicePricing({
  products,
  onChoose,
}: {
  products: NonNullable<DetailedService["deviceProducts"]>;
  onChoose: (packageName: string) => void;
}) {
  const [selectedIndexes, setSelectedIndexes] = useState<Record<string, number>>({});

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#ee0033]">Bảng giá thiết bị</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Camera Viettel chính hãng</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">Chọn mẫu trong nhà hoặc ngoài trời và thời gian lưu trữ. Giá dưới đây là giá thiết bị kèm Cloud 12 tháng, đã gồm VAT.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((product) => {
            const selectedIndex = selectedIndexes[product.name] ?? 0;
            const selectedTier = product.tiers[selectedIndex] ?? product.tiers[0];
            return (
              <article key={product.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="grid h-full md:grid-cols-[.82fr_1.18fr]">
                  <div className="relative min-h-52 overflow-hidden bg-gradient-to-br from-slate-50 to-red-50 md:min-h-full">
                    <Image src={product.image} alt={product.alt} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-contain p-6" />
                    <span className="absolute left-4 top-4 rounded-full bg-[#ee0033] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white shadow">Viettel Home Camera</span>
                  </div>
                  <div className="flex flex-col p-5 sm:p-6">
                    <span className="w-fit rounded-full bg-red-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#ee0033]">{product.name.includes("trong nhà") ? "Chuyên dùng trong nhà" : "Camera ngoài trời"}</span>
                    <h3 className="mt-3 text-2xl font-black text-slate-900">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.summary}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {product.specs.map((spec) => <div key={spec} className="rounded-xl bg-slate-50 p-3 text-xs font-semibold leading-snug text-slate-700"><Check className="mb-1 h-4 w-4 text-[#ee0033]" />{spec}</div>)}
                    </div>
                    <div className="mt-5 border-t border-dashed border-slate-200 pt-4">
                      <label htmlFor={`camera-tier-${product.name}`} className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Chọn thời gian Cloud · 12 tháng</label>
                      <select id={`camera-tier-${product.name}`} value={selectedIndex} onChange={(event) => setSelectedIndexes((current) => ({ ...current, [product.name]: Number(event.target.value) }))} className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-bold text-slate-800 outline-none focus:border-[#ee0033] focus:ring-2 focus:ring-red-100">
                        {product.tiers.map((tier, index) => <option key={tier.packageName} value={index}>{tier.retention} · {tier.price.toLocaleString("vi-VN")}đ</option>)}
                      </select>
                      <div className="mt-4 flex items-end justify-between gap-3">
                        <div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Giá thiết bị + Cloud</p><p className="mt-1 text-3xl font-black text-[#ee0033]">{selectedTier.price.toLocaleString("vi-VN")}đ</p></div>
                        <span className="pb-1 text-xs font-semibold text-emerald-700">✓ Bảo hành 12 tháng</span>
                      </div>
                    </div>
                    <button type="button" onClick={() => onChoose(selectedTier.packageName)} className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#ee0033] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-red-500/20 transition hover:bg-[#c9002b]">Đăng ký tư vấn <ArrowRight className="h-4 w-4" /></button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-slate-700">Giá bán lẻ gồm thiết bị và Cloud 12 tháng, đã gồm VAT; giá/khả năng cung cấp có thể thay đổi theo thời điểm và khu vực. Khi đăng ký lắp cùng FTTH Viettel, chính sách trang bị có thể khác theo gói. Vui lòng xác nhận trước khi đặt hàng.</p>
      </div>
    </section>
  );
}
export default function ServiceLandingPage({ service }: { service: DetailedService }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(service.packages[0]?.name ?? "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const consultationOptions = [
    ...service.packages.map((pkg) => ({ name: pkg.name, price: pkg.price, unit: "đ/tháng" })),
    ...(service.deviceProducts ?? []).flatMap((product) => product.tiers.map((tier) => ({ name: tier.packageName, price: tier.price, unit: "đ/12 tháng" }))),
  ];
  const isBusiness = service.slug === "viettel-internet-doanh-nghiep";
  const visual = service.slug === "dich-vu-camera-viettel" ? ShieldCheck : service.slug.includes("combo") ? Tv : Wifi;
  const Visual = visual;
  const hasDevicePricing = Boolean(service.deviceProducts?.length);
  const minimumOfferPrice = hasDevicePricing
    ? Math.min(...service.deviceProducts!.flatMap((product) => product.tiers.map((tier) => tier.price)))
    : Math.min(...service.packages.map((pkg) => pkg.price));

  useEffect(() => {
    if (!modalOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => phoneRef.current?.focus(), 40);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !busy) setModalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [busy, modalOpen]);

  const scrollCards = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-plan-card]");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 20;
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? 340) + gap), behavior: "smooth" });
  };

  const openForm = (packageName?: string) => {
    if (packageName) setSelectedPackage(packageName);
    setMessage(null);
    setModalOpen(true);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    setMessage(null);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: name.trim(), phone: phone.trim(), address: address.trim(),
          package_name: selectedPackage, note: `Tư vấn dịch vụ ${service.title}`,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Chưa gửi được thông tin. Vui lòng thử lại.");
      setMessage({ ok: true, text: "Nhân viên tư vấn sẽ liên hệ với bạn trong thời gian sớm nhất." });
      setName(""); setPhone(""); setAddress("");
    } catch (error) {
      setMessage({ ok: false, text: error instanceof Error ? error.message : "Chưa gửi được thông tin. Vui lòng thử lại." });
    } finally { setBusy(false); }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800 antialiased">
      <Header activeSlug={service.slug} />
      <main>
        <section className="relative isolate overflow-hidden bg-cover bg-center text-white" style={{ backgroundImage: `linear-gradient(100deg,rgba(30,0,12,.93),rgba(100,0,28,.78) 58%,rgba(15,23,42,.55)),url('${service.heroBackgroundImage ?? ""}')` }}>
          <div aria-hidden="true" className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-red-500/25 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
            <div className="space-y-5 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-amber-200 backdrop-blur"><Flame className="h-4 w-4" />{service.badge}</span>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{service.headline}</h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{service.tagline}</p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a href="#goi-cuoc" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-6 py-3 font-extrabold text-[#b30024] shadow-xl transition hover:-translate-y-0.5"><span>Xem gói dịch vụ</span><ArrowDown className="h-4 w-4" /></a>
                <button type="button" onClick={() => openForm()} className="inline-flex min-h-12 items-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20">Nhận tư vấn lắp đặt</button>
              </div>
              <div className="flex flex-wrap gap-2 pt-1 text-xs font-semibold">
                {service.highlights.slice(0, 3).map((item) => <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-white/90"><Check className="h-4 w-4 text-emerald-300" />{item}</span>)}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="mx-auto max-w-md rounded-[2rem] border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                <div className="overflow-hidden rounded-[1.5rem] bg-white p-5 text-slate-900 sm:p-6">
                  <div className="flex items-center justify-between"><span className="rounded-full bg-red-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#b30024]">Viettel · {service.badge}</span><Visual className="h-5 w-5 text-[#ee0033]" /></div>
                  <div className="my-4 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 p-3 sm:h-56">
                    <Image src={service.assetImage} alt={service.assetAlt} width={520} height={340} priority className="h-full w-full object-contain" />
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-950 px-4 py-4 text-white sm:px-5">
                    <div><p className="text-[10px] font-bold uppercase tracking-widest text-white/60">{hasDevicePricing ? "Camera + Cloud 12 tháng từ" : "Gói dịch vụ từ"}</p><p className="mt-1 text-2xl font-black text-white">{minimumOfferPrice.toLocaleString("vi-VN")}đ<span className="ml-1 text-xs font-semibold text-white/65">{hasDevicePricing ? "/12 tháng" : "/tháng"}</span></p></div>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ee0033]"><Visual className="h-5 w-5" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-6 grid max-w-7xl grid-cols-2 gap-3 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { icon: BadgeCheck, title: "Chính hãng Viettel", body: "Thông tin theo dịch vụ" },
            { icon: Visual, title: service.slug.includes("camera") ? "Cloud linh hoạt" : service.slug.includes("combo") || service.slug.includes("champions") ? "Giải trí tại nhà" : "Gói PRO & MeshPRO", body: "Chọn đúng nhu cầu" },
            { icon: Clock3, title: "Tư vấn nhanh", body: "Xác nhận theo địa chỉ" },
            { icon: ShieldCheck, title: "Hỗ trợ lắp đặt", body: "Theo điều kiện triển khai" },
          ].map(({ icon: Icon, title, body }) => <div key={title} className="flex min-h-[82px] items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-900/5 sm:gap-4 sm:p-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-50 text-[#ee0033]"><Icon className="h-5 w-5" /></span><div><p className="text-sm font-black leading-tight text-slate-900 sm:text-base">{title}</p><p className="mt-1 text-[11px] font-medium text-slate-500 sm:text-xs">{body}</p></div></div>)}
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16">
          <div className="lg:col-span-5"><span className="text-xs font-black uppercase tracking-[.18em] text-[#ee0033]">Chọn dịch vụ phù hợp</span><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Kết nối tốt hơn, trải nghiệm trọn vẹn hơn</h2><p className="mt-4 leading-relaxed text-slate-600">{service.introText}</p>
            {service.officialSources?.length ? <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">{service.officialSources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[#ee0033] underline underline-offset-2 hover:text-[#b30024]">{source.label} ↗</a>)}</div> : null}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">{service.highlights.map((item, i) => <article key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"><span className="grid h-10 w-10 place-items-center rounded-xl bg-red-50 text-[#ee0033]"><Sparkles className="h-5 w-5" /></span><h3 className="mt-3 font-extrabold text-slate-900">Điểm nổi bật {String(i + 1).padStart(2,"0")}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{item}</p></article>)}</div>
        </section>

          {service.galleryImages?.length ? <section className="bg-white py-12 sm:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><span className="text-xs font-black uppercase tracking-[.18em] text-[#ee0033]">Hình ảnh dịch vụ</span><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Khám phá sản phẩm Viettel</h2></div><span className="text-sm text-slate-500">Hình ảnh minh họa theo từng dịch vụ</span></div><div className="grid gap-5 md:grid-cols-3">{service.galleryImages.map((image) => <article key={image.src} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-red-50 p-4"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-3 transition duration-500 group-hover:scale-[1.03]" /></div><div className="p-5"><h3 className="font-black text-slate-900">{image.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{image.caption}</p></div></article>)}</div></div></section> : null}

        {service.deviceProducts?.length ? <CameraDevicePricing products={service.deviceProducts} onChoose={openForm} /> : null}

        <section id="goi-cuoc" className="scroll-mt-24 py-14 sm:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-5"><div className="max-w-2xl"><span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-[#ee0033]"><Flame className="h-4 w-4" />Gói dịch vụ</span><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Chọn gói phù hợp với bạn</h2><p className="mt-2 text-sm leading-relaxed text-slate-600">Vuốt hoặc dùng nút điều hướng để xem các gói còn lại.</p></div><div className="flex items-center gap-2"><button type="button" onClick={() => scrollCards(-1)} aria-label="Xem gói trước" className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-red-300 hover:text-[#ee0033]"><ChevronLeft className="h-5 w-5" /></button><button type="button" onClick={() => scrollCards(1)} aria-label="Xem gói tiếp theo" className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-red-300 hover:text-[#ee0033]"><ChevronRight className="h-5 w-5" /></button></div></div>
          <div ref={trackRef} onScroll={(event) => { const el = event.currentTarget; setScrollProgress(el.scrollWidth <= el.clientWidth ? 0 : el.scrollLeft / (el.scrollWidth - el.clientWidth)); }} className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin]" aria-label="Danh sách gói dịch vụ">
            {service.packages.map((pkg) => <article key={pkg.name} data-plan-card className={`relative flex w-[min(88vw,380px)] shrink-0 snap-start flex-col overflow-hidden rounded-[1.7rem] border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[360px] ${pkg.isHot ? "border-[#ee0033] ring-2 ring-[#ee0033]/10" : "border-slate-200"}`}><div className="flex items-center justify-center gap-2 bg-[#ee0033] px-4 py-2 text-xs font-black uppercase tracking-wider text-white"><Flame className="h-4 w-4" />{pkg.isHot ? "Được quan tâm" : pkg.speed}</div><div className="flex flex-1 flex-col p-6 sm:p-7"><h3 className="min-h-[3.5rem] text-xl font-black leading-snug text-slate-900">{pkg.name}</h3><span className="mt-2 inline-flex w-fit rounded-lg bg-red-50 px-3 py-1 text-xs font-bold text-[#ee0033]">{pkg.speed}</span><p className="mt-5 flex items-baseline gap-1"><span className="text-4xl font-black tracking-tight text-[#ee0033]">{pkg.price.toLocaleString("vi-VN")}</span><span className="text-sm text-slate-500">đ / tháng</span></p><p className="mt-2 min-h-10 text-xs leading-relaxed text-slate-500">{pkg.description}</p><div className="my-5 border-t border-slate-100"/><ul className="flex-1 space-y-3">{pkg.features.map((feature) => <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{feature}</li>)}</ul></div><div className="border-t border-slate-100 bg-slate-50 p-5"><button type="button" onClick={() => openForm(pkg.name)} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#ee0033] px-4 py-3 text-sm font-extrabold text-white shadow-md shadow-red-500/20 transition hover:bg-[#c9002b]">Tư vấn gói này <ArrowRight className="h-4 w-4" /></button></div></article>)}
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#ee0033] to-[#B30024] transition-transform duration-200" style={{ transform: `translateX(${scrollProgress * 200}%)` }} /></div>
        </div></section>

        {service.priceTable ? <section className="bg-white py-14 sm:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-6 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-red-50 text-[#ee0033]"><Visual className="h-5 w-5" /></span><div><p className="text-xs font-black uppercase tracking-widest text-[#ee0033]">Chi tiết tham khảo</p><h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">{service.priceTable.title}</h2></div></div><div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950 text-white"><tr>{service.priceTable.columns.map((column) => <th key={column} scope="col" className="px-4 py-4 font-bold">{column}</th>)}</tr></thead><tbody>{service.priceTable.rows.map((row) => <tr key={row.name} className={row.featured ? "bg-red-50" : "even:bg-slate-50"}><th scope="row" className="whitespace-nowrap px-4 py-4 font-black text-slate-900">{row.name}{row.featured && <span className="ml-2 rounded-full bg-[#ee0033] px-2 py-1 text-[10px] text-white">NỔI BẬT</span>}</th>{row.values.map((value, index) => <td key={`${row.name}-${index}`} className="whitespace-nowrap px-4 py-4 text-slate-700">{value}</td>)}</tr>)}</tbody></table></div><p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-slate-700">{service.priceTable.note}</p></div></section> : null}

        {service.specifications?.length ? <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><h2 className="mb-6 text-3xl font-black text-slate-900">Thông số dịch vụ</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{service.specifications.map((spec) => <div key={spec.label} className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">{spec.label}</p><p className="mt-2 font-extrabold text-slate-900">{spec.value}</p></div>)}</div></section> : null}

        <section className="bg-slate-950 py-14 text-white sm:py-16"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><span className="text-xs font-black uppercase tracking-[.18em] text-amber-300">Chính sách & hỗ trợ</span><h2 className="mt-3 text-3xl font-black">Sẵn sàng đồng hành cùng bạn</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">Để lại số điện thoại, đội ngũ Viettel sẽ xác nhận gói, giá và điều kiện triển khai theo địa chỉ của bạn.</p><button type="button" onClick={() => openForm()} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#ee0033] px-6 py-3.5 font-extrabold shadow-lg transition hover:bg-[#c9002b]">Nhận tư vấn <ArrowRight className="h-4 w-4" /></button></div><div className="grid gap-3 sm:grid-cols-2">{service.highlights.map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300"/><p className="text-sm leading-relaxed text-white/85">{item}</p></div>)}</div></div></section>

        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6"><div className="mb-7 text-center"><span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-[#ee0033]"><CircleHelp className="h-5 w-5" /></span><h2 className="mt-3 text-3xl font-black text-slate-900">Câu hỏi thường gặp</h2></div><div className="space-y-3">{service.faq.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="cursor-pointer list-none pr-6 font-extrabold text-slate-900 marker:hidden">{item.question}<span className="float-right text-[#ee0033] transition group-open:rotate-45">＋</span></summary><p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p></details>)}</div></section>

        <section className="bg-gradient-to-r from-[#8b001e] via-[#ce002d] to-[#8b001e] px-4 py-12 text-center text-white"><p className="text-xs font-black uppercase tracking-[.18em] text-white/75">Nhân viên tư vấn · 0944 362 986</p><h2 className="mt-2 text-3xl font-black">Bạn cần tư vấn thêm?</h2><p className="mx-auto mt-2 max-w-xl text-sm text-white/80">Chọn gói và gửi thông tin để được hỗ trợ nhanh chóng.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><button type="button" onClick={() => openForm()} className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-extrabold text-[#b30024] shadow-lg"><PhoneCall className="h-4 w-4"/>Nhận tư vấn</button><a href="tel:0944362986" className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white">Gọi 0944 362 986</a>{isBusiness && <><a href="https://zalo.me/0944362986" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#0068ff] px-5 py-3 font-bold text-white"><MessageCircle className="h-4 w-4"/>Zalo</a><a href="https://www.facebook.com/ha.trung.585" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#1877f2] px-5 py-3 font-bold text-white">Facebook</a></>}</div></section>
      </main>
      {isBusiness && <EnterpriseContactWidget />}
      <Footer />

      {modalOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 px-3 py-6 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget && !busy) setModalOpen(false); }}><section role="dialog" aria-modal="true" aria-labelledby="service-consult-title" className="relative my-auto w-full max-w-xl rounded-[1.75rem] bg-white p-5 shadow-2xl sm:p-7"><button type="button" onClick={() => !busy && setModalOpen(false)} aria-label="Đóng" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-[#EE0033] text-white transition hover:bg-[#c9002b]"><X className="h-5 w-5"/></button><div className="pr-12 text-center"><span className="rounded-full bg-red-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#B30024]">Đăng ký dịch vụ Viettel</span><h2 id="service-consult-title" className="mt-3 text-2xl font-black text-slate-900">Đăng ký nhận tư vấn</h2><p className="mt-1 text-sm text-slate-500">Chỉ cần số điện thoại, nhân viên sẽ liên hệ xác nhận thông tin.</p></div><form onSubmit={submit} className="mt-6 space-y-4"><div><label htmlFor="consult-phone" className="mb-1.5 block text-xs font-bold text-slate-700">Số điện thoại <span className="text-red-600">*</span></label><input ref={phoneRef} id="consult-phone" required type="tel" inputMode="tel" pattern="[0-9+() .-]{9,16}" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Nhập số điện thoại" className="min-h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#EE0033] focus:ring-4 focus:ring-[#EE0033]/10"/></div><div><label htmlFor="consult-name" className="mb-1.5 block text-xs font-bold text-slate-700">Tên khách hàng <span className="font-normal text-slate-400">(không bắt buộc)</span></label><input id="consult-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Nhập họ và tên" className="min-h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#EE0033] focus:ring-4 focus:ring-[#EE0033]/10"/></div><div><label htmlFor="consult-address" className="mb-1.5 block text-xs font-bold text-slate-700">Địa chỉ lắp đặt <span className="font-normal text-slate-400">(không bắt buộc)</span></label><input id="consult-address" value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Số nhà, đường, phường/xã" className="min-h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#EE0033] focus:ring-4 focus:ring-[#EE0033]/10"/></div><div className="rounded-2xl border border-red-200 bg-red-50/70 p-4"><p className="text-[10px] font-black uppercase tracking-wider text-[#B30024]">Gói dịch vụ đã chọn</p><div className="mt-2 flex items-center gap-2"><select aria-label="Chọn gói dịch vụ" value={selectedPackage} onChange={(event) => setSelectedPackage(event.target.value)} className="min-h-11 min-w-0 flex-1 rounded-lg border border-red-200 bg-white px-3 text-sm font-extrabold text-slate-900 outline-none focus:ring-2 focus:ring-red-200">{consultationOptions.map((pkg) => <option key={pkg.name} value={pkg.name}>{pkg.name} · {pkg.price.toLocaleString("vi-VN")}{pkg.unit}</option>)}</select><BadgeCheck className="h-6 w-6 shrink-0 text-emerald-600"/></div></div>{message && <div role={message.ok ? "status" : "alert"} className={`flex items-start gap-3 rounded-xl border p-3 text-sm ${message.ok ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-700"}`}>{message.ok && <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />}<div>{message.ok && <p className="font-black">Bạn đã gửi yêu cầu thành công!</p>}<p className={message.ok ? "mt-0.5" : "font-semibold"}>{message.text}</p></div></div>}<button type="submit" disabled={busy} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EE0033] to-[#B30024] px-5 py-3 font-black text-white shadow-lg shadow-red-600/20 transition hover:brightness-105 disabled:cursor-wait disabled:opacity-60">{busy ? "ĐANG GỬI…" : "GỬI YÊU CẦU TƯ VẤN"}<ArrowRight className="h-4 w-4"/></button><p className="text-center text-[11px] text-slate-400">Thông tin được sử dụng để tư vấn dịch vụ bạn đã chọn.</p></form></section></div>}
    </div>
  );
}

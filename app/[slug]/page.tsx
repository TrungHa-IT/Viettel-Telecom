import db from "@/lib/db";
import { servicesData } from "@/lib/servicesData";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnterpriseContactWidget from "@/components/EnterpriseContactWidget";
import Wifi7LandingPage from "@/components/Wifi7LandingPage";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { 
  PhoneCall, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles,
  Flame,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = slug.includes("fpt") 
    ? slug.replace(/fpt/gi, "viettel").replace(/-+/g, "-").replace(/^-|-$/g, "")
    : slug;
  const resolvedSlug = canonicalSlug === "viettel-ngoai-hang-anh" ? "viettel-champions-league" : canonicalSlug;

  const customService = servicesData[resolvedSlug] || servicesData[canonicalSlug] || servicesData[slug];
  if (customService) {
    return {
      title: customService.title,
      description: customService.tagline,
      openGraph: {
        title: customService.title,
        description: customService.tagline,
        images: [{ url: customService.assetImage, alt: customService.assetAlt }],
      },
    };
  }

  const page = db.prepare("SELECT title FROM pages WHERE slug = ?").get(canonicalSlug) as { title: string } | undefined;
  if (page) {
    return {
      title: `${page.title} - Viettel Telecom`,
      description: `Thông tin chi tiết về ${page.title} tại Tổng đại lý Viettel Telecom.`,
    };
  }

  return {
    title: "Viettel Telecom - Thông Tin Dịch Vụ",
  };
}

function sanitizeDbContent(html: string): string {
  if (!html) return "";
  // 1. Remove lazyload 1x1 placeholder GIFs
  let cleaned = html.replace(/<img[^>]*src=["']data:image\/gif;base64[^"']*["'][^>]*>/gi, "");
  // 2. Remove broken localhost:3000 images or replace with local logo
  cleaned = cleaned.replace(/<img[^>]*src=["']https?:\/\/localhost:3000\/[^"']*["'][^>]*>/gi, "");
  cleaned = cleaned.replace(/data-src=["']https?:\/\/localhost:3000\/[^"']*["']/gi, 'src="/assets/logo-viettel-hcm.png"');
  cleaned = cleaned.replace(/srcset=["'][^"']*["']/gi, "");
  cleaned = cleaned.replace(/data-srcset=["'][^"']*["']/gi, "");
  // 3. Clean broken WordPress classes & duplicate wrapper tags
  cleaned = cleaned.replace(/https?:\/\/localhost:3000\//gi, "/");
  // 4. Clean any legacy links
  cleaned = cleaned.replace(/https?:\/\/fpt\.vn/gi, "https://vietteltelecom.vn");
  cleaned = cleaned.replace(/fpt\.vn/gi, "vietteltelecom.vn");
  cleaned = cleaned.replace(/fpt/gi, "viettel");
  return cleaned;
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "viettel-ngoai-hang-anh") {
    redirect("/viettel-champions-league");
  }

  // Auto redirect any legacy fpt slug to viettel slug
  if (slug.includes("fpt")) {
    const cleanSlug = slug.replace(/fpt/gi, "viettel").replace(/-+/g, "-").replace(/^-|-$/g, "");
    redirect(`/${cleanSlug}`);
  }

  const customService = servicesData[slug];
  const dbPage = db.prepare("SELECT * FROM pages WHERE slug = ?").get(slug) as
    | { id: number; slug: string; title: string; content: string }
    | undefined;

  if (!customService && !dbPage) {
    notFound();
  }

  if (customService && slug === "viettel-wifi-7") {
    return <Wifi7LandingPage />;
  }

  if (customService && [
    "viettel-champions-league",
    "combo-internet-truyen-hinh-viettel",
    "dich-vu-camera-viettel",
    "viettel-internet-doanh-nghiep",
  ].includes(slug)) {
    return <ServiceLandingPage service={customService} />;
  }

  // Pure Tailwind Component View for rich custom services
  if (customService) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased flex flex-col">
        {/* Synchronized Header */}
        <Header activeSlug={slug} />

        {/* Hero Section */}
        <section
          className={`bg-gradient-to-br ${customService.heroBgGradient} text-white py-16 px-4 relative overflow-hidden shadow-md bg-cover bg-center`}
          style={customService.heroBackgroundImage ? { backgroundImage: `linear-gradient(90deg, rgba(7, 14, 29, .88) 0%, rgba(7, 14, 29, .74) 58%, rgba(7, 14, 29, .52) 100%), url("${customService.heroBackgroundImage}")` } : undefined}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black tracking-wider border border-white/20 text-yellow-300">
                <Flame className="w-4 h-4" /> {customService.badge}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight drop-shadow-sm">
                {customService.headline}
              </h1>
              <p className="text-white/95 text-base sm:text-lg font-medium max-w-2xl leading-relaxed">
                {customService.tagline}
              </p>
              <div className="flex flex-wrap gap-4 pt-3">
                <a
                  href="#dang-ky"
                  className="bg-white text-[#EE0033] hover:bg-slate-100 font-extrabold px-7 py-3.5 rounded-xl text-sm shadow-xl transition"
                >
                  ĐĂNG KÝ LẮP ĐẶT NGAY
                </a>
                <a
                  href="#bang-gia"
                  className="bg-black/30 hover:bg-black/40 border border-white/30 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition"
                >
                  Xem Bảng Giá Gói Cước
                </a>
              </div>
            </div>

            {/* Local Image Asset Feature Box */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white shadow-2xl space-y-4">
                <div className="bg-white/90 rounded-2xl p-4 flex items-center justify-center mb-2">
                  <Image
                    src={customService.assetImage}
                    alt={customService.assetAlt}
                    width={400}
                    height={260}
                    priority
                    className="w-full h-44 object-contain"
                  />
                </div>

                <h3 className="font-bold text-base flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-300" /> Điểm Vượt Trội
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {customService.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {customService.introText}
          </p>
          {customService.officialSources && (
            <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              {customService.officialSources.map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[#EE0033] underline underline-offset-2 hover:text-[#B30024]">
                  {source.label} ↗
                </a>
              ))}
            </div>
          )}
        </section>

        {/* Packages Grid */}
        <section id="bang-gia" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black text-[#EE0033] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">
              GÓI CƯỚC KHUYÊN DÙNG
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-2">
              BẢNG GIÁ DỊCH VỤ CHI TIẾT
            </h2>
          </div>

          {customService.priceTable && (
            <div className="mb-10">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">{customService.priceTable.title}</h3>
              <p className="text-sm text-slate-600 mb-4">Đơn vị: đồng/tháng</p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>{customService.priceTable.columns.map((column) => <th key={column} scope="col" className="px-4 py-3 font-bold">{column}</th>)}</tr>
                  </thead>
                  <tbody>
                    {customService.priceTable.rows.map((row) => (
                      <tr key={row.name} className={row.featured ? "bg-red-50" : "even:bg-slate-50"}>
                        <th scope="row" className="px-4 py-4 font-black text-slate-900 whitespace-nowrap">{row.name}{row.featured && <span className="ml-2 rounded-full bg-[#EE0033] px-2 py-1 text-[10px] text-white">PHỔ BIẾN</span>}</th>
                        {row.values.map((value, index) => <td key={`${row.name}-${index}`} className="px-4 py-4 text-slate-700 whitespace-nowrap">{value}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-slate-700">{customService.priceTable.note}</p>
            </div>
          )}

          {!customService.priceTable && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customService.packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl border transition duration-300 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-xl ${
                  pkg.isHot ? "border-[#EE0033] ring-2 ring-[#EE0033]/20" : "border-slate-200"
                }`}
              >
                {pkg.isHot && (
                  <div className="bg-[#EE0033] text-white text-xs font-black py-1.5 px-4 text-center tracking-wider uppercase">
                    GỢI Ý NHIỀU NGƯỜI CHỌN
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-black text-slate-900">{pkg.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-black text-[#EE0033] tracking-tight">
                      {pkg.price.toLocaleString("vi-VN")}
                    </span>
                    <span className="ml-1 text-sm text-slate-500 font-medium">đ / tháng</span>
                  </div>
                  <div className="mt-2 inline-block px-3 py-1 bg-red-50 text-[#EE0033] font-bold text-xs rounded-lg">
                    Tốc độ: {pkg.speed}
                  </div>
                  <p className="text-xs text-slate-500 mt-3">{pkg.description}</p>

                  <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100">
                  <a
                    href="#dang-ky"
                    className="w-full block text-center bg-[#EE0033] hover:bg-[#CC002B] text-white font-bold py-3.5 rounded-xl transition duration-150 shadow-md shadow-red-500/20"
                  >
                    Chọn Gói Này
                  </a>
                </div>
              </div>
            ))}
          </div>}
        </section>

        {/* Specifications Table */}
        {customService.specifications && (
          <section className="max-w-4xl mx-auto px-4 py-12 w-full">
            <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">
              Thông Số Kỹ Thuật Chi Tiết
            </h3>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full text-left text-sm">
                <tbody>
                  {customService.specifications.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-slate-50/70" : "bg-white"}>
                      <td className="px-6 py-4 font-bold text-slate-700 w-1/3 border-b border-slate-100">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-slate-900 border-b border-slate-100">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-12 w-full">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#EE0033]" />
              Câu Hỏi Thường Gặp
            </h3>
          </div>
          <div className="space-y-4">
            {customService.faq.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-base text-slate-900">{item.question}</h4>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Registration */}
        <section id="dang-ky" className="bg-slate-900 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-[#EE0033] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
              HỖ TRỢ LẮP ĐẶT TOÀN QUỐC
            </span>
            <h3 className="text-3xl font-black">ĐĂNG KÝ TƯ VẤN LẮP ĐẶT NHANH</h3>
            <p className="text-slate-400 text-sm">
              Để lại thông tin hoặc gọi ngay đến tổng đài Viettel để được kỹ thuật viên hỗ trợ tận nhà.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="tel:0944362986"
                className="bg-[#EE0033] hover:bg-[#CC002B] text-white font-extrabold px-8 py-4 rounded-xl text-base flex items-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-5 h-5 animate-bounce" />
                <span>TƯ VẤN: 0944 362 986</span>
              </a>
              <Link
                href="/#register-form"
                className="bg-white text-slate-900 hover:bg-slate-100 font-extrabold px-8 py-4 rounded-xl text-base flex items-center gap-2"
              >
                <span>Điền Form Trên Trang Chủ</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {slug === "viettel-internet-doanh-nghiep" && (
              <div className="pt-5">
                <p className="mb-3 text-sm font-semibold text-slate-300">Kết nối và nhận tư vấn trực tuyến</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="https://zalo.me/0944362986" target="_blank" rel="noopener noreferrer" aria-label="Nhắn tin Zalo 0944 362 986" className="inline-flex items-center gap-2 rounded-xl bg-[#0068ff] px-5 py-3 font-bold text-white shadow-lg transition hover:bg-blue-700">
                    <MessageCircle className="h-5 w-5" /> Nhắn tin Zalo
                  </a>
                  <a href="https://www.facebook.com/ha.trung.585" target="_blank" rel="noopener noreferrer" aria-label="Truy cập Facebook tư vấn" className="inline-flex items-center gap-2 rounded-xl bg-[#1877f2] px-5 py-3 font-bold text-white shadow-lg transition hover:bg-blue-700">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7z" /></svg> Facebook Viettel
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Global Footer */}
        {slug === "viettel-internet-doanh-nghiep" && <EnterpriseContactWidget />}
        <Footer />
      </div>
    );
  }

  // Fallback for database reader pages
  const sanitizedContent = sanitizeDbContent(dbPage?.content || "");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased flex flex-col">
      <Header activeSlug={slug} />
      <main className="max-w-4xl mx-auto px-4 py-12 flex-1 w-full">
        <article className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 border-b border-slate-100 pb-4">
            {dbPage?.title}
          </h1>
          <div
            className="rendered-viettel-content space-y-4 text-slate-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />

          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl">
            <div>
              <p className="font-bold text-slate-900 text-sm">Cần tư vấn trực tiếp gói cước?</p>
              <p className="text-slate-500 text-xs">Liên hệ tổng đài Viettel miễn phí 24/7</p>
            </div>
            <a
              href="tel:0944362986"
              className="bg-[#EE0033] hover:bg-[#CC002B] text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition"
            >
              <PhoneCall className="w-4 h-4" />
              <span>0944 362 986</span>
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

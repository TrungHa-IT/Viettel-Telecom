import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vietteltelecom.vn"),
  title: {
    default: "Viettel Telecom - Lắp Mạng Cáp Quang & Truyền Hình TV360 Chính Hãng",
    template: "%s | Viettel Telecom",
  },
  description:
    "Tổng đài tư vấn và đăng ký lắp mạng cáp quang Viettel siêu tốc, Wi-Fi 6, Wi-Fi 7, truyền hình số TV360 4K, camera an ninh AI Cloud. Lắp đặt nhanh 24h toàn quốc.",
  keywords: [
    "lắp mạng viettel",
    "cáp quang viettel",
    "wifi 6 viettel",
    "wifi 7 viettel",
    "truyền hình tv360",
    "camera viettel",
    "internet doanh nghiệp viettel",
  ],
  authors: [{ name: "Viettel Telecom" }],
  creator: "Viettel Telecom",
  publisher: "Tập đoàn Công nghiệp - Viễn thông Quân đội Viettel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Viettel Telecom - Lắp Mạng Cáp Quang & Truyền Hình TV360 Chính Hãng",
    description:
      "Tư vấn đăng ký lắp mạng Internet cáp quang Viettel tốc độ cao, Wi-Fi 6, Wi-Fi 7, truyền hình TV360, camera an ninh toàn quốc.",
    url: "https://vietteltelecom.vn",
    siteName: "Viettel Telecom",
    images: [
      {
        url: "/assets/logo-viettel.svg",
        width: 600,
        height: 160,
        alt: "Logo Viettel Telecom",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viettel Telecom - Lắp Mạng Cáp Quang & Truyền Hình TV360",
    description: "Đăng ký lắp đặt Internet cáp quang Viettel, TV360, Camera Cloud bảo mật.",
    images: ["/assets/logo-viettel.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 selection:bg-[#EE0033] selection:text-white">
        {children}
      </body>
    </html>
  );
}

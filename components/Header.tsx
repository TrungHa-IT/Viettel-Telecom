"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Radio, Trophy, Zap, Menu, X, Shield, Tv, Camera, Briefcase } from "lucide-react";

export default function Header({ activeSlug }: { activeSlug?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Trang Chủ", slug: "" },
    { href: "/viettel-wifi-7", label: "Wi-Fi 7", slug: "viettel-wifi-7", badge: "MỚI", icon: Zap },
    { href: "/viettel-champions-league", label: "Champions League", slug: "viettel-champions-league", badge: "HOT", icon: Trophy },
    { href: "/combo-internet-truyen-hinh-viettel", label: "Combo TV360", slug: "combo-internet-truyen-hinh-viettel", icon: Tv },
    { href: "/dich-vu-camera-viettel", label: "Camera Viettel", slug: "dich-vu-camera-viettel", icon: Camera },
    { href: "/viettel-internet-doanh-nghiep", label: "Doanh Nghiệp", slug: "viettel-internet-doanh-nghiep", icon: Briefcase },
  ];

  return (
    <>
      {/* Top Banner Viettel */}
      <div className="bg-[#B30024] text-white text-xs py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-yellow-300 animate-pulse shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">
              Hạ tầng Viettel 100% Cáp Quang Siêu Tốc — Lắp đặt nhanh trong 24h
            </span>
          </span>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden md:inline">
              Nhân viên tư vấn: <strong className="text-yellow-300 font-bold">0944 362 986</strong>
            </span>
            <Link
              href="/admin/login"
              className="bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded-md text-white font-medium transition flex items-center gap-1"
            >
              <Shield className="w-3 h-3" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/assets/logo-viettel-hcm.png" alt="Viettel Telecom" width={118} height={34} priority className="h-auto w-[118px] transition-transform duration-200 group-hover:scale-[1.03]" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 pl-4 border-l border-slate-200">
              {navLinks.map((link) => {
                const isActive = activeSlug === link.slug || (!activeSlug && link.slug === "");
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-xs font-bold rounded-lg transition duration-150 flex items-center gap-1.5 ${
                      isActive
                        ? "text-[#EE0033] bg-red-50"
                        : "text-slate-700 hover:text-[#EE0033] hover:bg-slate-50"
                    }`}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5 text-[#EE0033]" />}
                    <span>{link.label}</span>
                    {link.badge && (
                      <span
                        className={`text-[9px] px-1.5 py-0.2 rounded-full font-extrabold ${
                          link.badge === "MỚI"
                            ? "bg-[#EE0033] text-white"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:0944362986"
              className="bg-[#EE0033] hover:bg-[#CC002B] text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-red-500/20 hover:shadow-lg transition duration-200"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>0944 362 986</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-[#EE0033] hover:bg-slate-100 rounded-lg transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-1 shadow-lg animate-fade-in">
            {navLinks.map((link) => {
              const isActive = activeSlug === link.slug || (!activeSlug && link.slug === "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition ${
                    isActive
                      ? "bg-red-50 text-[#EE0033]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#EE0033]"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {link.icon && <link.icon className="w-4 h-4 text-[#EE0033]" />}
                    <span>{link.label}</span>
                  </span>
                  {link.badge && (
                    <span className="text-[10px] bg-red-100 text-[#EE0033] px-2 py-0.5 rounded-full font-bold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-xs text-slate-500 font-semibold hover:text-[#EE0033]"
              >
                <Shield className="w-4 h-4" />
                <span>Cổng Quản Trị Admin</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

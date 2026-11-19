"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function EnterpriseContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <section aria-label="Kênh tư vấn trực tuyến" className="w-[min(21rem,calc(100vw-2rem))] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
          <div className="flex items-center justify-between bg-[#ff6a36] px-4 py-3 text-sm font-extrabold text-white">
            <span>Bạn cần tư vấn doanh nghiệp?</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Đóng bảng liên hệ" className="rounded p-1 hover:bg-white/20"><X className="h-5 w-5" /></button>
          </div>
          <div className="space-y-2 p-3">
            <a href="https://zalo.me/viettel198" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0068ff] text-white"><MessageCircle className="h-5 w-5" /></span>
              <span><strong className="block text-sm text-slate-800">Nhắn tin Zalo</strong><small className="text-xs text-slate-500">Kênh Viettel Telecom</small></span>
            </a>
            <a href="https://www.facebook.com/Vietteltelecom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1877f2] text-white"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7z" /></svg></span>
              <span><strong className="block text-sm text-slate-800">Facebook Viettel</strong><small className="text-xs text-slate-500">Trang Viettel Telecom</small></span>
            </a>
          </div>
        </section>
      )}
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Đóng tư vấn" : "Mở tư vấn trực tuyến"} className="flex items-center gap-2 rounded-full bg-[#ff6a36] px-5 py-3 text-sm font-extrabold text-white shadow-xl transition hover:bg-[#ed5424]">
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        <span>{open ? "Đóng" : "Tư vấn tại đây"}</span>
      </button>
    </div>
  );
}

import { wifi7Plans } from "@/lib/wifi7Plans";

export interface DetailedService {
  slug: string;
  title: string;
  headline: string;
  tagline: string;
  badge: string;
  heroBgGradient: string;
  heroBackgroundImage?: string;
  galleryImages?: { src: string; alt: string; title: string; caption: string }[];
  deviceProducts?: {
    name: string; image: string; alt: string; summary: string; specs: string[];
    tiers: { retention: string; price: number; packageName: string }[];
  }[];
  assetImage: string;
  assetAlt: string;
  introText: string;
  highlights: string[];
  packages: {
    name: string;
    speed: string;
    price: number;
    description: string;
    isHot?: boolean;
    features: string[];
  }[];
  priceTable?: {
    title: string;
    columns: string[];
    rows: { name: string; values: string[]; featured?: boolean }[];
    note: string;
  };
  specifications?: {
    label: string;
    value: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  officialSources?: { label: string; url: string }[];
}

const baseServices: Record<string, DetailedService> = {
  "viettel-wifi-7": {
    slug: "viettel-wifi-7",
    title: "Internet Wi-Fi 7 Viettel – Gói GIGA từ 279.000đ/tháng",
    headline: "WI-FI 7 VIETTEL — KẾT NỐI TỐC ĐỘ GIGABIT",
    tagline: "Chọn gói GIGA tốc độ đến 2 Gbps, kết hợp Modem Wi-Fi 7 và Mesh theo nhu cầu không gian.",
    badge: "XGS-PON · Wi-Fi 7",
    heroBgGradient: "from-[#8B0000] via-[#EE0033] to-[#B30024]",
    heroBackgroundImage: "/assets/hero-internet-hcm.png",
    assetImage: "/assets/wifi7-modem.svg",
    assetAlt: "Thiết bị Modem Wi-Fi 7 Viettel",
    introText: "Các gói GIGA dùng kết nối cáp quang XGS-PON và thiết bị Wi-Fi 7. Chọn cấu hình từ một modem đến ba thiết bị Mesh, với tốc độ gói 1 Gbps hoặc 2 Gbps. Giá và khả năng lắp đặt cần được xác nhận theo địa chỉ.",
    highlights: [
      "Gói GIGA tốc độ 1 Gbps hoặc 2 Gbps",
      "Modem Wi-Fi 7 và tùy chọn Mesh theo từng gói",
      "Công nghệ Wi-Fi 7: MLO, 4096-QAM, kênh đến 320 MHz",
      "Cước đã gồm VAT; hạ tầng XGS-PON cần sẵn sàng tại địa chỉ",
    ],
    packages: wifi7Plans,
    specifications: [
      { label: "Chuẩn Wi-Fi", value: "Wi-Fi 7 (IEEE 802.11be)" },
      { label: "Kênh Wi-Fi tối đa", value: "320 MHz, tùy thiết bị và điều kiện phổ tần" },
      { label: "Điều chế", value: "4096-QAM" },
      { label: "Công nghệ", value: "Multi-Link Operation (MLO), 16×16 MIMO" },
      { label: "Hạ tầng", value: "XGS-PON; tốc độ gói 1 Gbps hoặc 2 Gbps" },
    ],
    faq: [
      {
        question: "Thiết bị cũ (điện thoại, laptop Wi-Fi 5/6) có dùng được Wi-Fi 7 không?",
        answer: "Thiết bị Wi-Fi thế hệ trước vẫn có thể kết nối. Trải nghiệm thực tế và tính năng khai thác được phụ thuộc chuẩn Wi-Fi mà thiết bị đầu cuối hỗ trợ.",
      },
      {
        question: "Quy trình đăng ký và lắp đặt gói Wi-Fi 7 như thế nào?",
        answer: "Viettel cần kiểm tra hạ tầng XGS-PON tại địa chỉ. Có thể để lại thông tin tư vấn trên trang hoặc gọi tổng đài 1800 8168 để được xác nhận giá, phí ban đầu và thiết bị.",
      },
    ],
  },

  "viettel-champions-league": {
    slug: "viettel-champions-league",
    title: "Xem UEFA Champions League trên TV360 Viettel",
    headline: "UEFA CHAMPIONS LEAGUE TRÊN TV360",
    tagline: "Theo dõi Champions League cùng các giải thể thao hàng đầu trên TV360. Chọn gói phù hợp thiết bị và nhu cầu xem.",
    badge: "BÓNG ĐÁ CHÂU ÂU · TV360",
    heroBgGradient: "from-[#38003c] via-[#5b0060] to-[#EE0033]",
    heroBackgroundImage: "/assets/hero-tv360-hcm.jpg",
    galleryImages: [
      { src: "/assets/hero-tv360-hcm.jpg", alt: "TV360 phát sóng thể thao châu Âu", title: "Bóng đá trên TV360", caption: "Theo dõi lịch thi đấu và quyền xem theo gói đang áp dụng." },
      { src: "/assets/tv360-box.svg", alt: "Thiết bị TV360 Box Viettel", title: "TV360 trên màn hình lớn", caption: "Chọn thiết bị tương thích theo quyền lợi từng gói." },
      { src: "/assets/hero-internet-hcm.png", alt: "Gia đình sử dụng dịch vụ Internet và truyền hình", title: "Giải trí tại nhà", caption: "Kết hợp Internet cáp quang và truyền hình theo nhu cầu." },
    ],
    assetImage: "/assets/tv360-box.svg",
    assetAlt: "TV360 Viettel trên thiết bị truyền hình",
    introText:
      "TV360 của Viettel có các nội dung thể thao gồm UEFA Champions League, Europa League và Bundesliga. Gói cước, danh sách trận, thiết bị hỗ trợ và quyền xem có thể thay đổi theo chính sách tại thời điểm đăng ký; hãy kiểm tra trực tiếp trên TV360 trước khi mua.",
    highlights: [
      "Theo dõi UEFA Champions League trên nền tảng TV360",
      "Gói thể thao có lựa chọn dành cho điện thoại; gói khác hỗ trợ thêm thiết bị tùy quyền lợi",
      "Một số gói TV360 có miễn phí data 4G/5G Viettel khi xem trên di động",
      "Kiểm tra lịch thi đấu, danh sách trận và thiết bị được hỗ trợ trong ứng dụng TV360",
    ],
    packages: [
      {
        name: "TV360 VSPORT",
        speed: "Gói thể thao · 30 ngày",
        price: 35000,
        description: "Mức cước tham khảo theo thông báo Viettel áp dụng từ 15/05/2026. Gói và giá có thể được cập nhật; xem giá đang áp dụng tại TV360 trước khi đăng ký.",
        isHot: true,
        features: [
          "Nội dung thể thao gồm Champions League, Europa League và Bundesliga theo thông tin gói Viettel",
          "Thông báo giá Viettel nêu miễn phí data 4G/5G khi xem trên thiết bị di động",
          "Phạm vi nội dung và thiết bị xem phụ thuộc gói đang đăng ký",
          "Giá và quyền lợi cuối cùng hiển thị trên trang đăng ký TV360",
        ],
      },
    ],
    officialSources: [
      { label: "Viettel Telecom: Thông báo giá và quyền xem gói VSPORT", url: "https://5g.vietteltelecom.vn/vx/tin-tuc/chi-tiet/dieu-chinh-gia-cuoc-dich-vu-truyen-hinh-tv360/14593708" },
      { label: "Viettel Telecom: Thông tin TV360 và UEFA Champions League", url: "https://www.vietteltelecom.vn/tin-tuc/chi-tiet/xem-world-cup-2026-khong-gioi-han-cung-cac-goi-dich-vu-tv360/15260544" },
      { label: "TV360: Kiểm tra gói cước hiện hành", url: "https://tv360.vn/packages" },
    ],
    faq: [
      {
        question: "Gói VSPORT xem được trên thiết bị nào?",
        answer: "Thông tin Viettel công bố cho VSPORT áp dụng xem trên điện thoại; một số nội dung/gói có thể hỗ trợ thiết bị khác. Hãy xem mô tả gói trên TV360 để xác nhận trước khi đăng ký.",
      },
      {
        question: "Giá 35.000đ/tháng có phải giá đang áp dụng không?",
        answer: "Đây là mức Viettel công bố cho VSPORT từ ngày 15/05/2026. TV360 có thể cập nhật tên gói, giá và quyền lợi; giá xác nhận là giá hiển thị tại trang packages hoặc ứng dụng lúc đăng ký.",
      },
    ],
  },

  "combo-internet-truyen-hinh-viettel": {
    slug: "combo-internet-truyen-hinh-viettel",
    title: "Combo Internet Cáp Quang & Truyền Hình TV360 Viettel",
    headline: "COMBO INTERNET & TRUYỀN HÌNH TV360",
    tagline: "Chọn gói Internet, truyền hình TV360, combo hoặc combo Cloud theo nhu cầu của gia đình.",
    badge: "BẢNG GIÁ THAM KHẢO THÁNG 11/2026",
    heroBgGradient: "from-[#8B0000] via-[#CC002B] to-[#1E293B]",
    heroBackgroundImage: "/assets/hero-tv360-hcm.jpg",
    galleryImages: [
      { src: "/assets/hero-internet-hcm.png", alt: "Gia đình sử dụng Internet Viettel tại nhà", title: "Internet cho cả gia đình", caption: "Kết nối nhiều thiết bị và không gian trong nhà." },
      { src: "/assets/hero-tv360-hcm.jpg", alt: "Nội dung truyền hình trên TV360", title: "Truyền hình TV360", caption: "Chọn App hoặc Box cùng nội dung gói phù hợp." },
      { src: "/assets/tv360-box.svg", alt: "TV360 Box Viettel", title: "TV360 Box", caption: "Giải pháp xem trên màn hình TV tương thích." },
    ],
    assetImage: "/assets/tv360-box.svg",
    assetAlt: "Combo Internet và TV360 Box Viettel",
    introText:
      "Bảng giá tham khảo Viettel TP.HCM tháng 11/2026. Mức cước thay đổi theo khu vực nội thành/ngoại thành, gói TV360 App hoặc TV Box và điều kiện hạ tầng tại địa chỉ lắp đặt.",
    highlights: [
      "NETVT1: 300 Mbps; NETVT2: từ 500 Mbps đến 1 Gbps",
      "Lựa chọn gói Internet, TV360, combo hoặc combo Cloud",
      "Có các gói Mesh Wi-Fi phục vụ nhà nhiều tầng và diện tích lớn",
      "Giá tham khảo theo bảng cước; xác nhận ưu đãi theo địa chỉ lắp đặt",
    ],
    priceTable: {
      title: "Bảng giá Internet và các gói Combo TV360 Viettel TP.HCM",
      columns: ["Gói cước", "Tốc độ / thiết bị", "Internet ngoại thành / nội thành", "App Basic", "App VIP", "Box Basic", "Box VIP"],
      rows: [
        { name: "NETVT1", values: ["300 Mbps", "195.000đ / 235.000đ", "220.000đ / 260.000đ", "245.000đ / 285.000đ", "245.000đ / 285.000đ", "275.000đ / 315.000đ"] },
        { name: "NETVT2", values: ["500 Mbps – 1 Gbps", "240.000đ / 265.000đ", "266.000đ / 290.000đ", "290.000đ / 315.000đ", "290.000đ / 315.000đ", "320.000đ / 345.000đ"] },
        { name: "MESHVT1", values: ["300 Mbps · 1 Mesh", "210.000đ / 255.000đ", "235.000đ / 280.000đ", "260.000đ / 305.000đ", "260.000đ / 305.000đ", "290.000đ / 335.000đ"] },
        { name: "MESHVT2", values: ["500 Mbps – 1 Gbps · 2 Mesh", "245.000đ / 289.000đ", "270.000đ / 324.000đ", "295.000đ / 339.000đ", "295.000đ / 329.000đ", "325.000đ / 369.000đ"], featured: true },
        { name: "MESHVT3", values: ["500 Mbps – 1 Gbps · 3 Mesh", "299.000đ / 359.000đ", "324.000đ / 384.000đ", "349.000đ / 409.000đ", "349.000đ / 409.000đ", "379.000đ / 439.000đ"] },
      ],
      note: "Giá tính theo đồng/tháng; mỗi ô ghi ngoại thành / nội thành TP.HCM. Giá đã gồm VAT. MESHVT1/2/3 lần lượt kèm 1/2/3 thiết bị Home WiFi. Khuyến mại trả trước và phí hòa mạng cần xác nhận theo địa chỉ, thời điểm đăng ký và điều kiện triển khai.",
    },
    packages: [
      {
        name: "NETVT1 + TV360 App Basic",
        speed: "300 Mbps + TV360 App Basic",
        price: 220000,
        description: "Giá App Basic tham khảo tháng 11/2026; nội thành 260.000đ/tháng.",
        features: ["Ngoại thành TP.HCM: 220.000đ/tháng", "Nội thành TP.HCM: 260.000đ/tháng", "Giá đã gồm VAT; thiết bị và ưu đãi xác nhận theo địa chỉ"]
      },
      {
        name: "NETVT2 + TV360 App Basic",
        speed: "500 Mbps–1 Gbps + TV360 App Basic",
        price: 266000,
        description: "Giá App Basic tham khảo tháng 11/2026; nội thành 290.000đ/tháng.",
        features: ["Ngoại thành TP.HCM: 266.000đ/tháng", "Nội thành TP.HCM: 290.000đ/tháng", "Giá đã gồm VAT; thiết bị và ưu đãi xác nhận theo địa chỉ"]
      },
      {
        name: "MESHVT1 + TV360 App Basic",
        speed: "300 Mbps + 1 Mesh + TV360 App Basic",
        price: 235000,
        description: "Giá App Basic tham khảo tháng 11/2026; nội thành 280.000đ/tháng.",
        isHot: true,
        features: ["01 modem + 01 Mesh", "Ngoại thành TP.HCM: 235.000đ/tháng", "Nội thành TP.HCM: 280.000đ/tháng", "Giá đã gồm VAT; thiết bị và ưu đãi xác nhận theo địa chỉ"]
      },
      {
        name: "MESHVT2 + TV360 App Basic",
        speed: "500 Mbps–1 Gbps + 2 Mesh + TV360 App Basic",
        price: 270000,
        description: "Giá App Basic tham khảo tháng 11/2026; nội thành 324.000đ/tháng.",
        features: ["01 modem + 02 Mesh", "Ngoại thành TP.HCM: 270.000đ/tháng", "Nội thành TP.HCM: 324.000đ/tháng", "Giá đã gồm VAT; thiết bị và ưu đãi xác nhận theo địa chỉ"]
      },
      {
        name: "MESHVT3 + TV360 App Basic",
        speed: "500 Mbps–1 Gbps + 3 Mesh + TV360 App Basic",
        price: 324000,
        description: "Giá App Basic tham khảo tháng 11/2026; nội thành 384.000đ/tháng.",
        features: ["01 modem + 03 Mesh", "Ngoại thành TP.HCM: 324.000đ/tháng", "Nội thành TP.HCM: 384.000đ/tháng", "Giá đã gồm VAT; thiết bị và ưu đãi xác nhận theo địa chỉ"]
      }
    ],
    faq: [
      {
        question: "Nhà có 2 TV thì lắp đặt như thế nào?",
        answer: "Quý khách có thể cài trực tiếp app TV360 trên SmartTV thứ 2 hoặc đăng ký thêm Box phụ với giá cước ưu đãi chỉ từ 35.000đ/tháng.",
      },
    ],
  },

  "dich-vu-camera-viettel": {
    slug: "dich-vu-camera-viettel",
    title: "Camera An Ninh Viettel – Camera Cloud",
    headline: "CAMERA VIETTEL CHO NHÀ VÀ CỬA HÀNG",
    tagline: "Camera trong nhà và ngoài trời Full HD, đàm thoại hai chiều, phát hiện thông minh và lựa chọn lưu trữ Cloud theo nhu cầu.",
    badge: "BẢO MẬT VIETTEL CLOUD",
    heroBgGradient: "from-[#0F172A] via-[#1E293B] to-[#EE0033]",
    heroBackgroundImage: "/assets/hero-camera-hcm.png",
    galleryImages: [
      { src: "/assets/hero-camera-hcm.png", alt: "Các mẫu camera Viettel trong nhà và ngoài trời", title: "Camera Viettel", caption: "Lựa chọn thiết bị trong nhà hoặc ngoài trời." },
      { src: "/assets/hero-camera-hcm.jpg", alt: "Camera Viettel ngoài trời", title: "Camera ngoài trời", caption: "Chuẩn IP67 theo thông tin sản phẩm Viettel HCM." },
      { src: "/assets/camera-indoor.svg", alt: "Camera Viettel trong nhà", title: "Camera trong nhà", caption: "Theo dõi và đàm thoại qua ứng dụng hỗ trợ." },
    ],
    deviceProducts: [
      {
        name: "Camera trong nhà HC26",
        image: "/assets/camera-indoor.svg",
        alt: "Camera trong nhà Viettel HC26",
        summary: "Camera 3 MP xoay trong nhà, kèm Cloud 12 tháng theo lựa chọn lưu trữ.",
        specs: ["3 MP (2304 × 1296)", "Xoay ngang 355° · dọc 180°", "Hồng ngoại 10 m", "Đàm thoại hai chiều"],
        tiers: [
          { retention: "Cloud 1 ngày · 12 tháng", price: 670000, packageName: "Camera trong nhà HC26 + Cloud 1 ngày (12 tháng)" },
          { retention: "Cloud 3 ngày · 12 tháng", price: 700000, packageName: "Camera trong nhà HC26 + Cloud 3 ngày (12 tháng)" },
          { retention: "Cloud 7 ngày · 12 tháng", price: 820000, packageName: "Camera trong nhà HC26 + Cloud 7 ngày (12 tháng)" },
          { retention: "Cloud 15 ngày · 12 tháng", price: 1060000, packageName: "Camera trong nhà HC26 + Cloud 15 ngày (12 tháng)" },
          { retention: "Cloud 30 ngày · 12 tháng", price: 1420000, packageName: "Camera trong nhà HC26 + Cloud 30 ngày (12 tháng)" },
        ],
      },
      {
        name: "Camera ngoài trời HC34",
        image: "/assets/hero-camera-hcm.jpg",
        alt: "Camera Viettel ngoài trời",
        summary: "Camera ngoài trời, kèm Cloud 12 tháng theo lựa chọn lưu trữ.",
        specs: ["Thiết kế lắp đặt ngoài trời", "Chọn Cloud 1, 3 hoặc 7 ngày", "Bảo hành chính hãng 12 tháng", "Giá bán đã gồm VAT"],
        tiers: [
          { retention: "Cloud 1 ngày · 12 tháng", price: 870000, packageName: "Camera ngoài trời HC34 + Cloud 1 ngày (12 tháng)" },
          { retention: "Cloud 3 ngày · 12 tháng", price: 900000, packageName: "Camera ngoài trời HC34 + Cloud 3 ngày (12 tháng)" },
          { retention: "Cloud 7 ngày · 12 tháng", price: 1020000, packageName: "Camera ngoài trời HC34 + Cloud 7 ngày (12 tháng)" },
        ],
      },
    ],
    assetImage: "/assets/camera-indoor.svg",
    assetAlt: "Camera Viettel AI Cloud 360°",
    introText:
      "Chọn thiết bị camera trong nhà hoặc ngoài trời và gói lưu trữ Cloud theo số ngày cần xem lại. Mức cước bên dưới là giá tham khảo Viettel HCM, đã gồm VAT; phí triển khai và ưu đãi cần xác nhận theo địa chỉ.",
    highlights: [
      "Camera trong nhà HC26: 3 MP, xoay ngang 355° và xoay dọc 180°",
      "Có lựa chọn camera ngoài trời HC34 và gói Cloud theo thời gian lưu trữ",
      "Chọn lưu trữ Cloud từ 1 đến 30 ngày theo từng gói",
      "Mua thiết bị kèm Cloud 12 tháng: trong nhà HC26 từ 670.000đ, ngoài trời HC34 từ 870.000đ",
    ],
    packages: [
      {
        name: "CLOUD1",
        speed: "Lưu trữ 1 ngày · mỗi camera",
        price: 20000,
        description: "Gói lưu trữ Cloud Viettel HCM tham khảo, giá đã gồm VAT.",
        isHot: true,
        features: ["Cước 20.000đ/camera/tháng", "Thiết bị trong nhà miễn phí theo bảng giá", "Thiết bị ngoài trời 200.000đ", "Phí lắp đặt xác nhận theo phương án triển khai"],
      },
      {
        name: "CLOUD3",
        speed: "Lưu trữ 3 ngày · mỗi camera",
        price: 30000,
        description: "Chọn thời gian lưu trữ dài hơn để xem lại sự kiện gần đây.",
        features: ["Cước 30.000đ/camera/tháng", "Thiết bị trong nhà miễn phí theo bảng giá", "Thiết bị ngoài trời 200.000đ", "Giá đã gồm VAT"],
      },
      { name: "CLOUD7", speed: "Lưu trữ 7 ngày · mỗi camera", price: 40000, description: "Gói lưu trữ Cloud Viettel HCM tham khảo.", features: ["Cước 40.000đ/camera/tháng", "Thiết bị trong nhà miễn phí theo bảng giá", "Thiết bị ngoài trời 200.000đ", "Giá đã gồm VAT"] },
      { name: "CLOUD15", speed: "Lưu trữ 15 ngày · mỗi camera", price: 60000, description: "Gói lưu trữ Cloud Viettel HCM tham khảo.", features: ["Cước 60.000đ/camera/tháng", "Thiết bị trong nhà miễn phí theo bảng giá", "Thiết bị ngoài trời 200.000đ", "Giá đã gồm VAT"] },
      { name: "CLOUD30", speed: "Lưu trữ 30 ngày · mỗi camera", price: 90000, description: "Gói lưu trữ Cloud Viettel HCM tham khảo.", features: ["Cước 90.000đ/camera/tháng", "Thiết bị trong nhà miễn phí theo bảng giá", "Thiết bị ngoài trời 200.000đ", "Giá đã gồm VAT"] },
    ],
    priceTable: {
      title: "Cước Cloud và mức trang bị khi dùng Internet Viettel",
      columns: ["Gói Cloud", "Lưu trữ", "Cước / camera / tháng", "Trong nhà (kèm FTTH)", "Ngoài trời (kèm FTTH)"],
      rows: [
        { name: "CLOUD1", values: ["1 ngày", "20.000đ", "Miễn phí", "200.000đ"] },
        { name: "CLOUD3", values: ["3 ngày", "30.000đ", "Miễn phí", "200.000đ"] },
        { name: "CLOUD7", values: ["7 ngày", "40.000đ", "Miễn phí", "200.000đ"], featured: true },
        { name: "CLOUD15", values: ["15 ngày", "60.000đ", "Miễn phí", "200.000đ"] },
        { name: "CLOUD30", values: ["30 ngày", "90.000đ", "Miễn phí", "200.000đ"] },
      ],
      note: "Cước Cloud tham khảo đã gồm VAT. Mức trang bị miễn phí trong nhà/200.000đ ngoài trời áp dụng theo chính sách khi đăng ký kèm Internet Viettel; giá mua thiết bị kèm Cloud 12 tháng được hiển thị riêng ở bảng sản phẩm phía trên.",
    },
    officialSources: [
      { label: "Viettel HCM: Bảng giá Home Camera", url: "https://www.viettelhochiminh.vn/home-camera-viettel.html" },
      { label: "Viettel HCM: Camera ngoài trời", url: "https://www.viettelhochiminh.vn/camera-ngoai-troi.html" },
      { label: "Viettel Shop: Camera trong nhà HC26 và giá Cloud 12 tháng", url: "https://www.viettel.vn/vx/dien-thoai-thiet-bi/camera-trong-nha-hc26-cloud03" },
      { label: "Viettel Shop: Thiết bị Camera", url: "https://www.viettel.vn/vx/shop/" },
    ],
    faq: [
      {
        question: "Cước Cloud tính theo camera hay theo tài khoản?",
        answer: "Mức cước tham khảo trong bảng được tính cho mỗi camera mỗi tháng. Số lượng camera, thiết bị đi kèm và điều kiện lắp đặt sẽ được xác nhận theo địa chỉ cụ thể.",
      },
    ],
  },

  "viettel-internet-doanh-nghiep": {
    slug: "viettel-internet-doanh-nghiep",
    title: "Bảng giá Internet Viettel dành cho Doanh nghiệp TP.HCM 2026",
    headline: "INTERNET VIETTEL CHO DOANH NGHIỆP",
    tagline: "Các gói PRO và MeshPRO với tốc độ đến 1 Gbps, băng thông quốc tế cam kết và lựa chọn mở rộng vùng phủ Wi-Fi.",
    badge: "GIẢI PHÁP KẾT NỐI DOANH NGHIỆP",
    heroBgGradient: "from-[#0c1829] via-[#162a45] to-[#EE0033]",
    heroBackgroundImage: "/assets/hero-internet-hcm.png",
    galleryImages: [
      { src: "/assets/enterprise-router.svg", alt: "Thiết bị mạng cho văn phòng doanh nghiệp", title: "Hạ tầng mạng doanh nghiệp", caption: "Chọn gói theo số người dùng và nhu cầu vận hành." },
      { src: "/assets/hero-internet-hcm.png", alt: "Không gian làm việc sử dụng Internet Viettel", title: "Kết nối văn phòng", caption: "Kết nối ổn định cho làm việc và dịch vụ số." },
      { src: "/assets/wifi6-modem.svg", alt: "Modem Wi-Fi Viettel", title: "Modem và Mesh Wi-Fi", caption: "Mở rộng vùng phủ tại văn phòng theo gói." },
    ],
    assetImage: "/assets/enterprise-router.svg",
    assetAlt: "Thiết bị cân bằng tải Doanh nghiệp Viettel",
    introText:
      "Bảng giá tham khảo dành cho doanh nghiệp tại TP.HCM theo công bố Viettel tháng 11/2026. Chọn gói theo tốc độ, nhu cầu băng thông quốc tế và vùng phủ Wi-Fi; hạ tầng và thiết bị được xác nhận theo địa chỉ lắp đặt.",
    highlights: [
      "Gói PRO và MeshPRO tốc độ đến 1 Gbps",
      "Băng thông quốc tế cam kết đến 10 Mbps tùy gói",
      "Có lựa chọn mở rộng Wi-Fi Mesh cho văn phòng",
      "Giá đã gồm VAT; trả trước 12 tháng tặng 1 tháng theo chính sách công bố",
    ],
    priceTable: {
      title: "Bảng giá Internet doanh nghiệp Viettel TP.HCM",
      columns: ["Gói cước", "Tốc độ trong nước", "Quốc tế cam kết", "Wi-Fi / Mesh", "Giá/tháng"],
      rows: [
        { name: "PRO1", values: ["400 Mbps – 1 Gbps", "2 Mbps", "Modem Wi-Fi", "350.000đ"] },
        { name: "PRO2", values: ["500 Mbps – 1 Gbps", "5 Mbps", "Modem Wi-Fi", "500.000đ"] },
        { name: "MESHPRO1", values: ["400 Mbps – 1 Gbps", "2 Mbps", "Modem + Mesh", "400.000đ"], featured: true },
        { name: "MESHPRO2", values: ["500 Mbps – 1 Gbps", "5 Mbps", "Modem + Mesh", "600.000đ"] },
        { name: "PRO600", values: ["600 Mbps", "2 Mbps", "Modem Wi-Fi", "500.000đ"] },
        { name: "PRO1000", values: ["1 Gbps", "10 Mbps", "Modem Wi-Fi", "700.000đ"] },
        { name: "MESHPRO600", values: ["600 Mbps", "2 Mbps", "Modem + Mesh", "650.000đ"] },
        { name: "MESHPRO1000", values: ["1 Gbps", "10 Mbps", "Modem + Mesh", "880.000đ"] },
      ],
      note: "Giá tham khảo Viettel TP.HCM tháng 11/2026, đã gồm 10% VAT. Gói trả trước 12 tháng được tặng 1 tháng theo chính sách được công bố. Tốc độ và thiết bị có thể phụ thuộc hạ tầng; cần xác nhận điều kiện áp dụng tại địa chỉ doanh nghiệp.",
    },
    packages: [
      {
        name: "PRO1",
        speed: "400 Mbps–1 Gbps · quốc tế 2 Mbps",
        price: 350000,
        description: "Gói doanh nghiệp. giá tham khảo 350.000đ/tháng đã gồm VAT.",
        features: ["Băng thông quốc tế cam kết: 2 Mbps", "Modem Wi-Fi", "Trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]
      },
      {
        name: "PRO2",
        speed: "500 Mbps–1 Gbps · quốc tế 5 Mbps",
        price: 500000,
        description: "Gói doanh nghiệp. giá tham khảo 500.000đ/tháng đã gồm VAT.",
        features: ["Băng thông quốc tế cam kết: 5 Mbps", "Modem Wi-Fi", "Trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]
      },
      {
        name: "MESHPRO1",
        speed: "400 Mbps–1 Gbps · quốc tế 2 Mbps",
        price: 400000,
        description: "Gói doanh nghiệp. giá tham khảo 400.000đ/tháng đã gồm VAT.",
        isHot: true,
        features: ["Băng thông quốc tế cam kết: 2 Mbps", "Modem + Mesh", "Trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]
      },
      {
        name: "MESHPRO2",
        speed: "500 Mbps–1 Gbps · quốc tế 5 Mbps",
        price: 600000,
        description: "Gói doanh nghiệp. giá tham khảo 600.000đ/tháng đã gồm VAT.",
        features: ["Băng thông quốc tế cam kết: 5 Mbps", "Modem + Mesh", "Trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]
      },
      {
        name: "PRO600",
        speed: "600 Mbps · quốc tế 2 Mbps",
        price: 500000,
        description: "Gói doanh nghiệp. giá tham khảo 500.000đ/tháng đã gồm VAT.",
        features: ["Băng thông quốc tế cam kết: 2 Mbps", "Modem Wi-Fi", "Trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]
      },
      {
        name: "PRO1000",
        speed: "1 Gbps · quốc tế 10 Mbps",
        price: 700000,
        description: "Gói doanh nghiệp. giá tham khảo 700.000đ/tháng đã gồm VAT.",
        features: ["Băng thông quốc tế cam kết: 10 Mbps", "Modem Wi-Fi", "Trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]
      },
      {
        name: "MESHPRO600",
        speed: "600 Mbps · quốc tế 2 Mbps",
        price: 650000,
        description: "Gói doanh nghiệp. giá tham khảo 650.000đ/tháng đã gồm VAT.",
        features: ["Băng thông quốc tế cam kết: 2 Mbps", "Modem + Mesh", "Trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]
      },
      {
        name: "MESHPRO1000",
        speed: "1 Gbps · quốc tế 10 Mbps",
        price: 880000,
        description: "Gói doanh nghiệp. giá tham khảo 880.000đ/tháng đã gồm VAT.",
        features: ["Băng thông quốc tế cam kết: 10 Mbps", "Modem + Mesh", "Trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]
      }
    ],
    faq: [
      {
        question: "Doanh nghiệp đăng ký cần những thủ tục gì?",
        answer: "Liên hệ Viettel để kiểm tra hạ tầng, hồ sơ cần thiết, phí hòa mạng và chu kỳ đóng cước tại địa chỉ doanh nghiệp. Thông tin gói công bố nêu giá đã gồm VAT; phí và ưu đãi đăng ký cần xác nhận theo khu vực.",
      },
    ],
  },

  "dich-vu-viettel-wifi-6": {
    slug: "dich-vu-viettel-wifi-6",
    title: "Cáp Quang Viettel Wi-Fi 6 – Tốc Độ Đột Phá, Độ Trễ Cực Thấp",
    headline: "INTERNET CÁP QUANG VIETTEL WI-FI 6",
    tagline: "Trang bị Modem chuẩn Wi-Fi 6 AX3000 thế hệ mới, tốc độ nhanh gấp 3 lần, kết nối mượt mà 50+ thiết bị.",
    badge: "CHUẨN WI-FI 6 MỚI",
    heroBgGradient: "from-[#990020] via-[#EE0033] to-[#0F172A]",
    heroBackgroundImage: "/assets/hero-internet-hcm.png",
    assetImage: "/assets/wifi6-modem.svg",
    assetAlt: "Modem Wi-Fi 6 Viettel AX3000",
    introText:
      "Công nghệ Wi-Fi 6 (802.11ax) mang đến bước nhảy vọt về tốc độ, vùng phủ và khả năng chịu tải so với chuẩn Wi-Fi 5 truyền thống. Khả năng phát sóng mạnh mẽ xuyên tường giúp cả gia đình thoải mái học tập, làm việc và giải trí cùng lúc mà không bị nghẽn mạng.",
    highlights: [
      "Băng thông thực tế đạt từ 150 Mbps đến 1 Gbps không giới hạn",
      "Công nghệ OFDMA và MU-MIMO cho phép kết nối cùng lúc hơn 50 thiết bị",
      "Target Wake Time (TWT) giúp tiết kiệm pin cho các thiết bị điện thoại kết nối",
      "Trang bị miễn phí thiết bị Modem Wi-Fi 6 2 băng tần chuẩn Gigabit",
    ],
    packages: [
      {
        name: "NETVT01",
        speed: "300 Mbps",
        price: 195000,
        description: "Gói Internet 300 Mbps; giá áp dụng theo khu vực và địa chỉ lắp đặt.",
        features: [
          "Giá 195.000đ/tháng tại 32 tỉnh và ngoại thành Hà Nội/TP.HCM",
          "Nội thành Hà Nội/TP.HCM: NETVT01_H 235.000đ/tháng",
          "Modem Wi-Fi 6 cho thuê bao lắp mới; giá đã gồm VAT",
          "Phí hòa mạng 300.000đ; chu kỳ cước 1/6/13 tháng",
        ],
      },
      {
        name: "NETVT2",
        speed: "500 Mbps – 1 Gbps",
        price: 240000,
        description: "Băng thông cao; giá NETVT2_H ở nội thành Hà Nội/TP.HCM là 265.000đ/tháng.",
        isHot: true,
        features: [
          "Giá 240.000đ/tháng tại 32 tỉnh và ngoại thành Hà Nội/TP.HCM",
          "Modem Wi-Fi 6 cho thuê bao lắp mới; giá đã gồm VAT",
          "Tốc độ thực tế tùy hạ tầng và thiết bị tại địa chỉ",
          "Phí hòa mạng 300.000đ; ưu đãi cảm biến/bảo hiểm tùy điều kiện khu vực",
        ],
      },
      {
        name: "MESHVT1",
        speed: "300 Mbps + 1 Mesh",
        price: 210000,
        description: "Gói Mesh cơ bản cho nhà nhiều phòng; nội thành Hà Nội/TP.HCM là 255.000đ/tháng.",
        features: [
          "01 Modem Wi-Fi 6 + 01 thiết bị Mesh",
          "MESHVT2 (2 Mesh): 245.000đ; nội thành: 289.000đ/tháng",
          "MESHVT3 (3 Mesh): 299.000đ; nội thành: 359.000đ/tháng",
          "Giá đã gồm VAT; phạm vi và thiết bị xác nhận theo địa chỉ",
        ],
      },
    ],
    faq: [
      {
        question: "Nhà tôi đang dùng Wi-Fi cũ có nâng cấp lên Wi-Fi 6 được không?",
        answer: "Được! Khách hàng chỉ cần liên hệ hotline 1800 8168 hoặc để lại thông tin để kỹ thuật viên Viettel đổi mới thiết bị sang Modem Wi-Fi 6.",
      },
    ],
  },

  "dich-vu-internet-viettel": {
    slug: "dich-vu-internet-viettel",
    title: "Lắp Mạng Internet Cáp Quang Viettel – Bảng Giá Mới Nhất 2026",
    headline: "LẮP MẠNG CÁP QUANG VIETTEL SIÊU TỐC",
    tagline: "Hạ tầng 100% cáp quang FTTH Gpon thế hệ mới, đường truyền ổn định không phụ thuộc thời tiết, lắp đặt trong 24h.",
    badge: "HẠ TẦNG SỐ 1 VIỆT NAM",
    heroBgGradient: "from-[#8B0000] via-[#EE0033] to-[#1E293B]",
    heroBackgroundImage: "/assets/hero-internet-hcm.png",
    assetImage: "/assets/hero-fiber.svg",
    assetAlt: "Hạ tầng Internet Cáp Quang Viettel FTTH",
    introText:
      "Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel) là nhà mạng viễn thông sở hữu hạ tầng cáp quang lớn nhất và phủ sóng rộng khắp 63 tỉnh thành Việt Nam. Với nhiều tuyến cáp quang biển quốc tế dự phòng, Viettel cam kết mang lại trải nghiệm truy cập Internet nhanh nhất, an toàn nhất.",
    highlights: [
      "Tốc độ truyền tải đối xứng Download = Upload lên đến hàng Gbps",
      "Đường truyền ổn định, không gián đoạn kể cả giờ cao điểm",
      "Lắp đặt siêu tốc trong ngày, kỹ thuật hỗ trợ tận tình",
      "Nhiều ưu đãi tặng tháng cước và miễn phí vật tư thiết bị",
    ],
    packages: [
      {
        name: "NETVT01",
        speed: "300 Mbps",
        price: 195000,
        description: "Giá khu vực 32 tỉnh và ngoại thành Hà Nội/TP.HCM.",
        features: [
          "Nội thành Hà Nội/TP.HCM (NETVT01_H): 235.000đ/tháng",
          "Modem Wi-Fi 6 cho thuê bao lắp mới",
          "Giá đã gồm VAT; phí hòa mạng 300.000đ",
          "Chu kỳ cước 1, 6 hoặc 13 tháng",
        ],
      },
      {
        name: "NETVT2",
        speed: "500 Mbps – 1 Gbps",
        price: 240000,
        description: "Giá khu vực 32 tỉnh và ngoại thành; nội thành Hà Nội/TP.HCM là 265.000đ.",
        isHot: true,
        features: [
          "Modem Wi-Fi 6 cho thuê bao lắp mới",
          "Giá đã gồm VAT; phí hòa mạng 300.000đ",
          "Tốc độ thực tế tùy hạ tầng và thiết bị tại địa chỉ",
          "Ưu đãi cảm biến khói/bảo hiểm tùy khu vực và điều kiện đóng trước",
        ],
      },
      {
        name: "MESHVT1",
        speed: "300 Mbps + 1 Mesh",
        price: 210000,
        description: "Nội thành Hà Nội/TP.HCM: 255.000đ; MESHVT2 từ 245.000đ/tháng.",
        features: [
          "01 Modem Wi-Fi 6 + 01 thiết bị Mesh",
          "MESHVT2 (2 Mesh): 245.000đ; nội thành: 289.000đ/tháng",
          "MESHVT3 (3 Mesh): 299.000đ; nội thành: 359.000đ/tháng",
          "Giá đã gồm VAT; thiết bị/ưu đãi xác nhận theo địa chỉ",
        ],
      },
    ],
    priceTable: {
      title: "Bảng giá Internet cáp quang Viettel TP.HCM",
      columns: ["Gói cước", "Tốc độ", "Ngoại thành", "Nội thành", "Thiết bị"],
      rows: [
        { name: "NETVT1", values: ["300 Mbps", "195.000đ", "235.000đ", "Modem Wi-Fi 6"] },
        { name: "NETVT2", values: ["500 Mbps – 1 Gbps", "240.000đ", "265.000đ", "Modem Wi-Fi 6"] },
        { name: "MESHVT1", values: ["300 Mbps", "210.000đ", "255.000đ", "1 Home Wi-Fi Mesh"], featured: true },
        { name: "MESHVT2", values: ["500 Mbps – 1 Gbps", "245.000đ", "289.000đ", "2 Home Wi-Fi Mesh"] },
        { name: "MESHVT3", values: ["500 Mbps – 1 Gbps", "299.000đ", "359.000đ", "3 Home Wi-Fi Mesh"] },
      ],
      note: "Giá tham khảo Viettel TP.HCM tháng 11/2026, đồng/tháng, đã gồm VAT. Tốc độ phụ thuộc hạ tầng tại địa chỉ; ưu đãi trả trước, thiết bị và phí hòa mạng cần xác nhận trước khi đăng ký.",
    },
    faq: [
      {
        question: "Cần giấy tờ gì khi đăng ký lắp mạng Viettel?",
        answer: "Khách hàng cá nhân chỉ cần chuẩn bị ảnh chụp Căn cước công dân (CCCD). Kỹ thuật viên sẽ ký hợp đồng điện tử tiện lợi tại nhà.",
      },
    ],
  },
};

// Also support legacy fpt slugs mapping to viettel slugs for backward compatibility
export const servicesData: Record<string, DetailedService> = {
  ...baseServices,
  "viettel-ngoai-hang-anh": baseServices["viettel-champions-league"],
  "fpt-wifi-7": baseServices["viettel-wifi-7"],
  "fpt-ngoai-hang-anh": baseServices["viettel-champions-league"],
  "combo-internet-truyen-hinh-fpt": baseServices["combo-internet-truyen-hinh-viettel"],
  "dich-vu-camera-fpt": baseServices["dich-vu-camera-viettel"],
  "fpt-internet-doanh-nghiep": baseServices["viettel-internet-doanh-nghiep"],
  "dich-vu-fpt-wifi-6": baseServices["dich-vu-viettel-wifi-6"],
  "dich-vu-internet-fpt": baseServices["dich-vu-internet-viettel"],
};

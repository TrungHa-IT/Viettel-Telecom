export interface DetailedService {
  slug: string;
  title: string;
  headline: string;
  tagline: string;
  badge: string;
  heroBgGradient: string;
  heroBackgroundImage?: string;
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
}

const baseServices: Record<string, DetailedService> = {
  "viettel-wifi-7": {
    slug: "viettel-wifi-7",
    title: "Viettel WiFi 7 – Đột Phá Băng Thông Không Dây Thế Hệ Mới",
    headline: "CÔNG NGHỆ INTERNET WI-FI 7 ĐỘT PHÁ",
    tagline: "Băng thông siêu khủng tới 10 Gbps, độ trễ tiệm cận 0ms, công nghệ MLO đa băng tần đồng thời.",
    badge: "TIÊN PHONG CÔNG NGHỆ 2026",
    heroBgGradient: "from-[#8B0000] via-[#EE0033] to-[#B30024]",
    heroBackgroundImage: "/assets/hero-internet-hcm.png",
    assetImage: "/assets/wifi7-modem.svg",
    assetAlt: "Modem Viettel Wi-Fi 7 BE3600",
    introText:
      "Viettel Telecom tự hào giới thiệu công nghệ Wi-Fi 7 (chuẩn 802.11be) đột phá. Khả năng gộp kênh 320MHz cùng điều chế 4096-QAM giúp tốc độ truyền tải tăng gấp 4.8 lần so với Wi-Fi 6, phục vụ tối đa nhu cầu xem video 8K, thực tế ảo VR/AR và gaming eSports đỉnh cao.",
    highlights: [
      "Băng thông kênh siêu rộng 320 MHz trên dải tần 6 GHz",
      "Điều chế 4K-QAM tăng 20% dung lượng dữ liệu truyền tải",
      "Tính năng Multi-Link Operation (MLO) gộp nhiều băng tần chống rớt mạng",
      "Độ trễ siêu thấp dưới 1ms, không giật lag khi chơi game",
    ],
    packages: [
      {
        name: "VIETTEL SPEED X1",
        speed: "1 Gbps không giới hạn",
        price: 350000,
        description: "Trang bị Modem Wi-Fi 7 thế hệ mới, tối ưu cho streamer và người sáng tạo nội dung.",
        isHot: true,
        features: [
          "1 Thiết bị Modem Wi-Fi 7 BE3600 chính hãng Viettel",
          "Tốc độ Download/Upload: Không giới hạn (tối đa 1 Gbps)",
          "Hỗ trợ kết nối cùng lúc hơn 120 thiết bị",
          "Miễn phí công lắp đặt và vật tư cáp quang",
        ],
      },
      {
        name: "VIETTEL SPEED X2 (MESH)",
        speed: "2 Gbps Băng thông lớn",
        price: 520000,
        description: "Hệ thống Mesh Wi-Fi 7 phủ sóng toàn diện cho biệt thự, nhà nhiều tầng, quán cafe lớn.",
        features: [
          "1 Modem Wi-Fi 7 chính + 1 Bộ phụ Wi-Fi 7 Mesh",
          "Phủ sóng xuyên tường tới 250m², vùng chết sóng bằng 0",
          "Chuyển vùng Roaming tức thì dưới 10ms",
          "Tặng 1 tháng cước khi thanh toán trước 6 tháng",
        ],
      },
      {
        name: "VIETTEL SPEED PRO 10G",
        speed: "10 Gbps Chuyên Nghiệp",
        price: 1200000,
        description: "Dành riêng cho studio đồ họa, phòng game cao cấp và văn phòng công nghệ cao.",
        features: [
          "Trang bị Router Wi-Fi 7 chuẩn Enterprise chịu tải 300+ user",
          "IP tĩnh miễn phí trọn đời",
          "Cam kết băng thông quốc tế tối thiểu 25 Mbps",
          "Đội ngũ kỹ thuật hỗ trợ chuyên biệt 24/7",
        ],
      },
    ],
    specifications: [
      { label: "Băng tần hoạt động", value: "2.4 GHz, 5 GHz và 6 GHz (Tri-Band)" },
      { label: "Độ rộng kênh tối đa", value: "320 MHz" },
      { label: "Công nghệ điều chế", value: "4096-QAM (4K-QAM)" },
      { label: "Tính năng đột phá", value: "Multi-Link Operation (MLO), Multi-RU" },
      { label: "Bảo mật", value: "WPA3 Enterprise thế hệ mới nhất" },
    ],
    faq: [
      {
        question: "Thiết bị cũ (điện thoại, laptop Wi-Fi 5/6) có dùng được Wi-Fi 7 không?",
        answer: "Hoàn toàn tương thích! Chuẩn Wi-Fi 7 có tính tương thích ngược, các thiết bị cũ vẫn kết nối bình thường và đạt tốc độ tối đa của thiết bị đó.",
      },
      {
        question: "Quy trình đăng ký và lắp đặt gói Wi-Fi 7 như thế nào?",
        answer: "Quý khách chỉ cần điền form đăng ký trực tuyến hoặc gọi hotline 1800 8168. Kỹ thuật viên Viettel sẽ khảo sát và mang modem Wi-Fi 7 đến lắp đặt trong vòng 24 giờ.",
      },
    ],
  },

  "viettel-ngoai-hang-anh": {
    slug: "viettel-ngoai-hang-anh",
    title: "Xem Ngoại Hạng Anh Bản Quyền Trên TV360 Viettel",
    headline: "TRỌN VẸN NGOẠI HẠNG ANH TRÊN TV360 VIETTEL",
    tagline: "Bản quyền phát sóng trọn vẹn 380 trận đấu mỗi mùa, chất lượng 4K siêu sắc nét, âm thanh Dolby Audio.",
    badge: "ĐỘC QUYỀN NGOẠI HẠNG ANH",
    heroBgGradient: "from-[#38003c] via-[#5b0060] to-[#EE0033]",
    heroBackgroundImage: "/assets/hero-tv360-hcm.jpg",
    assetImage: "/assets/premier-league.svg",
    assetAlt: "Ngoại Hạng Anh Bản Quyền TV360 Viettel",
    introText:
      "Thưởng thức trọn vẹn giải bóng đá hấp dẫn nhất hành tinh English Premier League cùng ứng dụng TV360 của Viettel. Trải nghiệm công nghệ truyền hình độ trễ thấp (Ultra Low Latency), bình luận tiếng Việt chuyên sâu và tính năng xem lại 72 giờ không bỏ lỡ bàn thắng nào.",
    highlights: [
      "Bản quyền 380 trận đấu Premier League mỗi mùa",
      "Độ phân giải 4K Ultra HD mượt mà 60fps",
      "Xem đồng thời trên SmartTV, Smartphone, Tablet và Box",
      "Tính năng xem lại highlights, thống kê trận đấu trực tiếp",
    ],
    packages: [
      {
        name: "TV360 NGOẠI HẠNG VIP",
        speed: "Truyền hình đa nền tảng",
        price: 99000,
        description: "Dành cho khách hàng đã có mạng Internet, chỉ đăng ký gói tài khoản TV360.",
        isHot: true,
        features: [
          "Trọn vẹn các trận đấu Ngoại Hạng Anh trực tiếp",
          "Hơn 160 kênh truyền hình trong nước & quốc tế",
          "Kho phim điện ảnh bom tấn 4K cập nhật hàng tuần",
          "Đăng nhập cùng lúc trên 5 thiết bị, xem đồng thời 2 màn hình",
        ],
      },
      {
        name: "COMBO INTERNET 150M + TV360",
        speed: "150 Mbps + Box 4K",
        price: 210000,
        description: "Gói cước tiết kiệm bao gồm cả đường truyền mạng Viettel và truyền hình TV360.",
        features: [
          "Đường truyền Internet cáp quang siêu tốc 150 Mbps",
          "Tặng đầu thu TV360 thông minh điều khiển giọng nói",
          "Trọn gói bản quyền giải Ngoại Hạng Anh",
          "Bảo hành thiết bị trọn đời suốt thời gian sử dụng",
        ],
      },
      {
        name: "COMBO MESH 300M + TV360",
        speed: "300 Mbps Mesh + TV",
        price: 275000,
        description: "Đỉnh cao giải trí cho nhà phố nhiều tầng hoặc chung cư lớn.",
        features: [
          "Internet 300 Mbps kèm 1 thiết bị Mesh mở rộng sóng",
          "Gói truyền hình TV360 Premium không giới hạn",
          "Xem bóng đá mượt mà không delay ngay cả giờ cao điểm",
          "Ưu tiên đường truyền băng thông quốc tế",
        ],
      },
    ],
    faq: [
      {
        question: "Tôi có thể xem Ngoại Hạng Anh TV360 trên tivi thông thường không?",
        answer: "Được! Viettel sẽ trang bị cho bạn TV360 Box 4K chính hãng, biến tivi thường thành SmartTV có điều khiển tìm kiếm giọng nói bằng tiếng Việt.",
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
    title: "Camera An Ninh Thông Minh Viettel – AI Cloud Bảo Mật",
    headline: "CAMERA AN NINH THÔNG MINH VIETTEL AI",
    tagline: "Hình ảnh Full HD 2K sắc nét, đàm thoại 2 chiều, trí tuệ nhân tạo AI nhận diện người, lưu trữ Cloud an toàn tuyệt đối.",
    badge: "BẢO MẬT VIETTEL CLOUD",
    heroBgGradient: "from-[#0F172A] via-[#1E293B] to-[#EE0033]",
    heroBackgroundImage: "/assets/hero-camera-hcm.png",
    assetImage: "/assets/camera-indoor.svg",
    assetAlt: "Camera Viettel AI Cloud 360°",
    introText:
      "Viettel Camera sử dụng công nghệ điện toán đám mây Cloud tiêu chuẩn quân đội, bảo mật tuyệt đối dữ liệu riêng tư ngay tại Việt Nam. Tính năng AI nhận diện khuôn mặt và cảnh báo đột nhập tức thì về điện thoại qua ứng dụng My Viettel.",
    highlights: [
      "Độ phân giải 2K 3MP siêu nét, quan sát ban đêm hồng ngoại 15m",
      "Trí tuệ nhân tạo AI cảnh báo chuyển động chính xác, giảm báo động giả",
      "Lưu trữ đám mây Cloud Viettel an toàn, không sợ bị trộm hoặc hỏng thẻ nhớ",
      "Bảo hành chính hãng 24 tháng, hỗ trợ kỹ thuật tận nhà",
    ],
    packages: [
      {
        name: "CAMERA TRONG NHÀ (INDOOR 360°)",
        speed: "Xoay 360° bao quát",
        price: 690000,
        description: "Phù hợp phòng khách, phòng ngủ, theo dõi trẻ nhỏ và người cao tuổi.",
        isHot: true,
        features: [
          "Góc xoay ngang 360°, dọc 100° không góc chết",
          "Đàm thoại 2 chiều âm thanh trung thực",
          "Phát hiện tiếng khóc trẻ em, chuyển động bất thường",
          "Gói lưu trữ Cloud chỉ từ 22.000đ/tháng",
        ],
      },
      {
        name: "CAMERA NGOÀI TRỜI (OUTDOOR KHÁNG NƯỚC)",
        speed: "Chuẩn chống nước IP66",
        price: 990000,
        description: "Lắp đặt sân vườn, cổng ngõ, ban công, bãi xe chịu mưa nắng bền bỉ.",
        features: [
          "Vỏ kim loại chống chịu thời tiết khắc nghiệt",
          "Đèn LED chiếu sáng ban đêm có màu sắc nét",
          "Còi hú báo động kết hợp đèn chớp răn đe kẻ gian",
          "Miễn phí công lắp đặt khi dùng kèm mạng Viettel",
        ],
      },
    ],
    faq: [
      {
        question: "Dữ liệu camera có bị rò rỉ ra bên ngoài không?",
        answer: "Tuyệt đối an toàn. Toàn bộ hình ảnh được mã hóa đầu cuối và lưu trên Cloud Data Center tiêu chuẩn quốc tế của Viettel tại Việt Nam, máy chủ không đặt ở nước ngoài.",
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
    heroBackgroundImage: "/assets/hero-business-hcm.png",
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
  "fpt-wifi-7": baseServices["viettel-wifi-7"],
  "fpt-ngoai-hang-anh": baseServices["viettel-ngoai-hang-anh"],
  "combo-internet-truyen-hinh-fpt": baseServices["combo-internet-truyen-hinh-viettel"],
  "dich-vu-camera-fpt": baseServices["dich-vu-camera-viettel"],
  "fpt-internet-doanh-nghiep": baseServices["viettel-internet-doanh-nghiep"],
  "dich-vu-fpt-wifi-6": baseServices["dich-vu-viettel-wifi-6"],
  "dich-vu-internet-fpt": baseServices["dich-vu-internet-viettel"],
};

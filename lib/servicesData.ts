export interface DetailedService {
  slug: string;
  title: string;
  headline: string;
  tagline: string;
  badge: string;
  heroBgGradient: string;
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
    tagline: "Tiết kiệm tới 35% chi phí so với đăng ký riêng lẻ. Trọn gói giải trí đỉnh cao cho cả gia đình.",
    badge: "TIẾT KIỆM 35% CƯỚC",
    heroBgGradient: "from-[#8B0000] via-[#CC002B] to-[#1E293B]",
    assetImage: "/assets/tv360-box.svg",
    assetAlt: "Combo Internet và TV360 Box Viettel",
    introText:
      "Gói cước tích hợp 2 trong 1 hoàn hảo của Viettel Telecom: vừa sở hữu đường truyền cáp quang Wi-Fi 6 tốc độ cao không giới hạn, vừa tận hưởng hơn 160 kênh truyền hình bản quyền TV360 đặc sắc cùng kho phim HD bom tấn cập nhật liên tục.",
    highlights: [
      "1 đường truyền 2 dịch vụ: Tiết kiệm tối đa chi phí hàng tháng",
      "Trang bị miễn phí Modem Wi-Fi 6 thế hệ mới & Box TV360 4K",
      "Điều khiển giọng nói thông minh bằng tiếng Việt mọi vùng miền",
      "Kho phim, ca nhạc, thiếu nhi và thể thao độc quyền phong phú",
    ],
    packages: [
      {
        name: "COMBO SUN1 TV360",
        speed: "150 Mbps + 160 Kênh TV",
        price: 210000,
        description: "Gói cước gia đình phổ biến nhất, đáp ứng hoàn hảo nhu cầu xem TV và lướt web.",
        isHot: true,
        features: [
          "Internet cáp quang 150 Mbps ổn định",
          "Cài đặt ứng dụng TV360 trên SmartTV hoặc cấp Box 4K",
          "160+ kênh truyền hình trong nước và quốc tế",
          "Miễn phí lắp đặt khi thanh toán trước",
        ],
      },
      {
        name: "COMBO SUN2 TV360",
        speed: "250 Mbps + 160 Kênh TV",
        price: 259000,
        description: "Băng thông rộng hơn cho gia đình đông người, nhiều thiết bị kết nối cùng lúc.",
        features: [
          "Tốc độ mạng 250 Mbps cực nhanh",
          "Xem phim 4K, video streaming không độ trễ",
          "Đầu thu TV360 4K điều khiển giọng nói",
          "Tặng 1 tháng cước khi đóng trước 6 tháng",
        ],
      },
      {
        name: "COMBO STAR1 MESH + TV360",
        speed: "150 Mbps Mesh + TV",
        price: 240000,
        description: "Tích hợp sẵn công nghệ Mesh phủ sóng xuyên tường cho nhà nhiều tầng.",
        features: [
          "1 Modem Wi-Fi chính + 1 Home Wifi Mesh",
          "Phủ sóng rộng khắp nhà không góc chết",
          "Trọn gói truyền hình TV360 chất lượng cao",
          "Hỗ trợ kỹ thuật định kỳ tận nhà 24/7",
        ],
      },
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
    title: "Cáp Quang Doanh Nghiệp Viettel – Băng Thông Quốc Tế Lớn",
    headline: "INTERNET CÁP QUANG DOANH NGHIỆP TỐC ĐỘ CAO",
    tagline: "Cam kết băng thông quốc tế lớn, miễn phí địa chỉ IP tĩnh, thiết bị chịu tải hàng trăm kết nối đồng thời.",
    badge: "CHUYÊN NGHIỆP - ỔN ĐỊNH",
    heroBgGradient: "from-[#0c1829] via-[#162a45] to-[#EE0033]",
    assetImage: "/assets/enterprise-router.svg",
    assetAlt: "Thiết bị cân bằng tải Doanh nghiệp Viettel",
    introText:
      "Dịch vụ Internet Leased Line và Cáp quang Doanh nghiệp của Viettel được thiết kế riêng cho công ty, ngân hàng, trường học và quán cafe. Đường truyền riêng biệt, ưu tiên luồng dữ liệu cao cấp, đảm bảo hoạt động kinh doanh luôn liên tục 24/7/365.",
    highlights: [
      "Cam kết băng thông quốc tế tối thiểu, SLA cam kết 99.9%",
      "Tặng kèm 1 đến nhiều địa chỉ IP Tĩnh (Static IP)",
      "Thiết bị Modem cân bằng tải chuyên dụng DrayTek / MikroTik",
      "Đội ngũ phản ứng nhanh xử lý sự cố trong vòng 60 phút",
    ],
    packages: [
      {
        name: "PRO300",
        speed: "300 Mbps",
        price: 550000,
        description: "Phù hợp văn phòng nhỏ 15 - 25 nhân sự hoặc quán cafe vừa.",
        features: [
          "Băng thông trong nước: 300 Mbps",
          "Băng thông quốc tế tối thiểu: 5.5 Mbps",
          "Trang bị Modem chuẩn Gigabit chịu tải cao",
          "Miễn phí lắp đặt khi đóng trước 6 tháng",
        ],
      },
      {
        name: "PRO600 (BÁN CHẠY NHẤT)",
        speed: "600 Mbps",
        price: 880000,
        description: "Phù hợp công ty quy mô 30 - 60 máy tính, hội họp video online liên tục.",
        isHot: true,
        features: [
          "Băng thông trong nước: 600 Mbps",
          "Băng thông quốc tế tối thiểu: 10 Mbps",
          "Miễn phí 1 IP Tĩnh (Static IP) suốt quá trình sử dụng",
          "Trang bị Router cân bằng tải chuyên dụng",
        ],
      },
      {
        name: "VIP1000",
        speed: "1.000 Mbps (1 Gbps)",
        price: 1900000,
        description: "Dành cho doanh nghiệp lớn, công ty phần mềm, tòa nhà văn phòng.",
        features: [
          "Tốc độ trong nước cực đỉnh 1.000 Mbps",
          "Băng thông quốc tế tối thiểu: 20 Mbps",
          "Tặng dải 4 IP Tĩnh",
          "Đường truyền cáp quang riêng biệt đến tận phòng máy chủ",
        ],
      },
    ],
    faq: [
      {
        question: "Doanh nghiệp đăng ký cần những thủ tục gì?",
        answer: "Chỉ cần bản chụp Giấy phép Đăng ký Kinh doanh (GPKD) và CCCD của người đại diện pháp luật. Viettel hỗ trợ ký hợp đồng và xuất hóa đơn điện tử VAT tận nơi.",
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
        name: "GÓI SUN1 WI-FI 6",
        speed: "150 Mbps",
        price: 180000,
        description: "Phù hợp sinh viên, người độc thân hoặc gia đình nhỏ từ 2 - 5 thiết bị.",
        features: [
          "Tốc độ Download/Upload: 150 Mbps",
          "Trang bị Modem Wi-Fi 6 chính hãng Viettel",
          "Hỗ trợ kỹ thuật 24/7 tận nhà",
          "Miễn phí dây cáp quang và công đấu nối",
        ],
      },
      {
        name: "GÓI SUN2 WI-FI 6",
        speed: "250 Mbps",
        price: 229000,
        description: "Gói cước bán chạy nhất cho hộ gia đình có nhu cầu xem 4K, chơi game online.",
        isHot: true,
        features: [
          "Tốc độ Download/Upload: 250 Mbps cực nhanh",
          "Trang bị Modem 2 băng tần 2.4GHz & 5GHz",
          "Tối ưu ping thấp cho game thủ",
          "Tặng 1 tháng cước khi đóng trước 6 tháng",
        ],
      },
      {
        name: "GÓI STAR2 WI-FI 6 MESH",
        speed: "300 Mbps + 2 Mesh",
        price: 289000,
        description: "Dành cho nhà tầng, nhà ống dài hoặc biệt thự cần phủ sóng không góc chết.",
        features: [
          "1 Modem Wi-Fi 6 chính + 2 Bộ phát phụ Mesh Wi-Fi 6",
          "Công nghệ roaming tự động chuyển trạm liền mạch",
          "Phủ sóng xuyên tầng mạnh mẽ",
          "Tặng 2 tháng cước khi đóng trước 12 tháng",
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
        name: "GÓI CƯỚC SUN1",
        speed: "150 Mbps",
        price: 180000,
        description: "Gói cước cơ bản tiết kiệm cho cá nhân và gia đình nhỏ.",
        features: [
          "Tốc độ 150 Mbps không giới hạn lưu lượng",
          "Trang bị Modem 2 băng tần chuẩn Gigabit",
          "Miễn phí bảo trì trọn đời",
          "Tặng 1 tháng cước khi đóng trước",
        ],
      },
      {
        name: "GÓI CƯỚC SUN2",
        speed: "250 Mbps",
        price: 229000,
        description: "Băng thông mạnh mẽ cho gia đình đa thiết bị giải trí.",
        isHot: true,
        features: [
          "Tốc độ 250 Mbps lướt web, xem phim mượt mà",
          "Modem Wi-Fi thế hệ mới phát sóng xa",
          "Ưu tiên luồng băng thông trong nước",
          "Miễn phí modem và công lắp",
        ],
      },
      {
        name: "GÓI CƯỚC STAR1 (MESH)",
        speed: "150 Mbps Mesh",
        price: 210000,
        description: "Khắc phục triệt để tình trạng sóng yếu ở các góc phòng khuất.",
        features: [
          "Trang bị 1 Modem chính + 1 Home Wifi Mesh",
          "Tự động chuyển vùng không gián đoạn kết nối",
          "Thích hợp nhà 2 - 3 tầng diện tích vừa",
          "Tặng thêm tháng cước khi đóng dài hạn",
        ],
      },
    ],
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

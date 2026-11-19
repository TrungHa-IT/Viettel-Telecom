import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const dbDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, "viettel.db");

// Singleton connection
const db = new Database(dbPath);
db.pragma("journal_mode = WAL");

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS packages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    speed TEXT NOT NULL,
    price INTEGER NOT NULL,
    category TEXT NOT NULL,
    features TEXT NOT NULL,
    badge TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT NOT NULL,
    package_name TEXT NOT NULL,
    note TEXT,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS pages (
    id INTEGER PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    original_link TEXT,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed Admin User
const checkUser = db.prepare("SELECT * FROM users WHERE username = ?").get("admin");
if (!checkUser) {
  db.prepare("INSERT INTO users (username, password) VALUES (?, ?)").run("admin", "Viettel@2026");
}

// Seed Packages if empty
const countPackages = db.prepare("SELECT count(*) as count FROM packages").get() as { count: number };
if (countPackages.count === 0) {
  const insertPackage = db.prepare(
    "INSERT INTO packages (name, speed, price, category, features, badge) VALUES (?, ?, ?, ?, ?, ?)"
  );

  const initialPackages = [
    {
      name: "NETVT1 (Ngoại thành)",
      speed: "300 Mbps",
      price: 195000,
      category: "personal",
      features: JSON.stringify(["Modem Wi-Fi 6", "Giá 195.000đ/tháng tại khu vực ngoại thành TP.HCM", "Giá đã gồm VAT; tốc độ và ưu đãi xác nhận theo địa chỉ"]),
      badge: "300 Mbps",
    },
    {
      name: "NETVT1 (Nội thành TP.HCM)",
      speed: "300 Mbps",
      price: 235000,
      category: "personal",
      features: JSON.stringify(["Modem Wi-Fi 6", "Giá 235.000đ/tháng tại khu vực nội thành TP.HCM", "Giá đã gồm VAT; tốc độ và ưu đãi xác nhận theo địa chỉ"]),
      badge: "Nội thành",
    },
    {
      name: "NETVT2 (Ngoại thành)",
      speed: "500 Mbps – 1 Gbps",
      price: 240000,
      category: "personal",
      features: JSON.stringify(["Modem Wi-Fi 6", "Giá 240.000đ/tháng tại khu vực ngoại thành TP.HCM", "Giá đã gồm VAT; tốc độ và ưu đãi xác nhận theo địa chỉ"]),
      badge: "Băng thông cao",
    },
    {
      name: "NETVT2 (Nội thành TP.HCM)",
      speed: "500 Mbps – 1 Gbps",
      price: 265000,
      category: "personal",
      features: JSON.stringify(["Modem Wi-Fi 6", "Giá 265.000đ/tháng tại khu vực nội thành TP.HCM", "Giá đã gồm VAT; tốc độ và ưu đãi xác nhận theo địa chỉ"]),
      badge: "Nội thành",
    },
    {
      name: "MESHVT1 (Ngoại thành)",
      speed: "300 Mbps + 1 Mesh",
      price: 210000,
      category: "personal",
      features: JSON.stringify(["01 modem + 01 Home Wi-Fi Mesh", "Giá 210.000đ/tháng tại khu vực ngoại thành TP.HCM", "Giá đã gồm VAT; tốc độ và ưu đãi xác nhận theo địa chỉ"]),
      badge: "Mesh Wi-Fi",
    },
    {
      name: "MESHVT1 (Nội thành TP.HCM)",
      speed: "300 Mbps + 1 Mesh",
      price: 255000,
      category: "personal",
      features: JSON.stringify(["01 modem + 01 Home Wi-Fi Mesh", "Giá 255.000đ/tháng tại khu vực nội thành TP.HCM", "Giá đã gồm VAT; tốc độ và ưu đãi xác nhận theo địa chỉ"]),
      badge: "Nội thành",
    },
    {
      name: "MESHVT2 (Ngoại thành)",
      speed: "500 Mbps – 1 Gbps + 2 Mesh",
      price: 245000,
      category: "personal",
      features: JSON.stringify(["01 modem + 02 Home Wi-Fi Mesh", "Giá 245.000đ/tháng tại khu vực ngoại thành TP.HCM", "Giá đã gồm VAT; tốc độ và ưu đãi xác nhận theo địa chỉ"]),
      badge: "Mesh phủ rộng",
    },
    {
      name: "MESHVT2 (Nội thành TP.HCM)",
      speed: "500 Mbps – 1 Gbps + 2 Mesh",
      price: 289000,
      category: "personal",
      features: JSON.stringify(["01 modem + 02 Home Wi-Fi Mesh", "Giá 289.000đ/tháng tại khu vực nội thành TP.HCM", "Giá đã gồm VAT; tốc độ và ưu đãi xác nhận theo địa chỉ"]),
      badge: "Nội thành",
    },
    {
      name: "MESHVT3 (Ngoại thành)",
      speed: "500 Mbps – 1 Gbps + 3 Mesh",
      price: 299000,
      category: "personal",
      features: JSON.stringify(["01 modem + 03 Home Wi-Fi Mesh", "Giá 299.000đ/tháng tại khu vực ngoại thành TP.HCM", "Giá đã gồm VAT; tốc độ và ưu đãi xác nhận theo địa chỉ"]),
      badge: "Mesh gia đình lớn",
    },
    {
      name: "MESHVT3 (Nội thành TP.HCM)",
      speed: "500 Mbps – 1 Gbps + 3 Mesh",
      price: 359000,
      category: "personal",
      features: JSON.stringify(["01 modem + 03 Home Wi-Fi Mesh", "Giá 359.000đ/tháng tại khu vực nội thành TP.HCM", "Giá đã gồm VAT; tốc độ và ưu đãi xác nhận theo địa chỉ"]),
      badge: "Nội thành",
    },
    {
      name: "NETVT1 + TV360 App Basic (Ngoại thành)",
      speed: "300 Mbps + TV360 App Basic",
      price: 220000,
      category: "combo",
      features: JSON.stringify(["Internet riêng: 195.000đ/tháng", "Combo App Basic: 220.000đ/tháng · Ngoại thành", "Giá đã gồm VAT; thiết bị/ưu đãi theo điều kiện địa chỉ"]),
      badge: "TV360",
    },
    {
      name: "NETVT1 + TV360 App Basic (Nội thành TP.HCM)",
      speed: "300 Mbps + TV360 App Basic",
      price: 260000,
      category: "combo",
      features: JSON.stringify(["Internet riêng: 195.000đ/tháng", "Combo App Basic: 260.000đ/tháng · Nội thành TP.HCM", "Giá đã gồm VAT; thiết bị/ưu đãi theo điều kiện địa chỉ"]),
      badge: "TV360",
    },
    {
      name: "NETVT2 + TV360 App Basic (Ngoại thành)",
      speed: "500 Mbps – 1 Gbps + TV360 App Basic",
      price: 266000,
      category: "combo",
      features: JSON.stringify(["Internet riêng: 240.000đ/tháng", "Combo App Basic: 266.000đ/tháng · Ngoại thành", "Giá đã gồm VAT; thiết bị/ưu đãi theo điều kiện địa chỉ"]),
      badge: "TV360",
    },
    {
      name: "NETVT2 + TV360 App Basic (Nội thành TP.HCM)",
      speed: "500 Mbps – 1 Gbps + TV360 App Basic",
      price: 290000,
      category: "combo",
      features: JSON.stringify(["Internet riêng: 240.000đ/tháng", "Combo App Basic: 290.000đ/tháng · Nội thành TP.HCM", "Giá đã gồm VAT; thiết bị/ưu đãi theo điều kiện địa chỉ"]),
      badge: "TV360",
    },
    {
      name: "MESHVT1 + TV360 App Basic (Ngoại thành)",
      speed: "300 Mbps + 1 Mesh + TV360 App Basic",
      price: 235000,
      category: "combo",
      features: JSON.stringify(["Internet riêng: 210.000đ/tháng", "Combo App Basic: 235.000đ/tháng · Ngoại thành", "Giá đã gồm VAT; thiết bị/ưu đãi theo điều kiện địa chỉ"]),
      badge: "Mesh + TV360",
    },
    {
      name: "MESHVT1 + TV360 App Basic (Nội thành TP.HCM)",
      speed: "300 Mbps + 1 Mesh + TV360 App Basic",
      price: 280000,
      category: "combo",
      features: JSON.stringify(["Internet riêng: 210.000đ/tháng", "Combo App Basic: 280.000đ/tháng · Nội thành TP.HCM", "Giá đã gồm VAT; thiết bị/ưu đãi theo điều kiện địa chỉ"]),
      badge: "Mesh + TV360",
    },
    {
      name: "MESHVT2 + TV360 App Basic (Ngoại thành)",
      speed: "500 Mbps – 1 Gbps + 2 Mesh + TV360 App Basic",
      price: 270000,
      category: "combo",
      features: JSON.stringify(["Internet riêng: 245.000đ/tháng", "Combo App Basic: 270.000đ/tháng · Ngoại thành", "Giá đã gồm VAT; thiết bị/ưu đãi theo điều kiện địa chỉ"]),
      badge: "Mesh + TV360",
    },
    {
      name: "MESHVT2 + TV360 App Basic (Nội thành TP.HCM)",
      speed: "500 Mbps – 1 Gbps + 2 Mesh + TV360 App Basic",
      price: 324000,
      category: "combo",
      features: JSON.stringify(["Internet riêng: 245.000đ/tháng", "Combo App Basic: 324.000đ/tháng · Nội thành TP.HCM", "Giá đã gồm VAT; thiết bị/ưu đãi theo điều kiện địa chỉ"]),
      badge: "Mesh + TV360",
    },
    {
      name: "MESHVT3 + TV360 App Basic (Ngoại thành)",
      speed: "500 Mbps – 1 Gbps + 3 Mesh + TV360 App Basic",
      price: 324000,
      category: "combo",
      features: JSON.stringify(["Internet riêng: 299.000đ/tháng", "Combo App Basic: 324.000đ/tháng · Ngoại thành", "Giá đã gồm VAT; thiết bị/ưu đãi theo điều kiện địa chỉ"]),
      badge: "Mesh + TV360",
    },
    {
      name: "MESHVT3 + TV360 App Basic (Nội thành TP.HCM)",
      speed: "500 Mbps – 1 Gbps + 3 Mesh + TV360 App Basic",
      price: 384000,
      category: "combo",
      features: JSON.stringify(["Internet riêng: 299.000đ/tháng", "Combo App Basic: 384.000đ/tháng · Nội thành TP.HCM", "Giá đã gồm VAT; thiết bị/ưu đãi theo điều kiện địa chỉ"]),
      badge: "Mesh + TV360",
    },
    {
      name: "PRO1 (Doanh nghiệp)",
      speed: "400 Mbps – 1 Gbps · quốc tế 2 Mbps",
      price: 350000,
      category: "business",
      features: JSON.stringify(["Băng thông quốc tế cam kết: 2 Mbps", "Modem Wi-Fi", "Giá đã gồm VAT; trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]),
      badge: "Doanh nghiệp · PRO",
    },
    {
      name: "PRO2 (Doanh nghiệp)",
      speed: "500 Mbps – 1 Gbps · quốc tế 5 Mbps",
      price: 500000,
      category: "business",
      features: JSON.stringify(["Băng thông quốc tế cam kết: 5 Mbps", "Modem Wi-Fi", "Giá đã gồm VAT; trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]),
      badge: "Doanh nghiệp · PRO",
    },
    {
      name: "MESHPRO1 (Doanh nghiệp)",
      speed: "400 Mbps – 1 Gbps · quốc tế 2 Mbps",
      price: 400000,
      category: "business",
      features: JSON.stringify(["Băng thông quốc tế cam kết: 2 Mbps", "Modem + Mesh", "Giá đã gồm VAT; trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]),
      badge: "Doanh nghiệp · MeshPRO",
    },
    {
      name: "MESHPRO2 (Doanh nghiệp)",
      speed: "500 Mbps – 1 Gbps · quốc tế 5 Mbps",
      price: 600000,
      category: "business",
      features: JSON.stringify(["Băng thông quốc tế cam kết: 5 Mbps", "Modem + Mesh", "Giá đã gồm VAT; trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]),
      badge: "Doanh nghiệp · MeshPRO",
    },
    {
      name: "PRO600 (Doanh nghiệp)",
      speed: "600 Mbps · quốc tế 2 Mbps",
      price: 500000,
      category: "business",
      features: JSON.stringify(["Băng thông quốc tế cam kết: 2 Mbps", "Modem Wi-Fi", "Giá đã gồm VAT; trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]),
      badge: "Doanh nghiệp · PRO",
    },
    {
      name: "PRO1000 (Doanh nghiệp)",
      speed: "1 Gbps · quốc tế 10 Mbps",
      price: 700000,
      category: "business",
      features: JSON.stringify(["Băng thông quốc tế cam kết: 10 Mbps", "Modem Wi-Fi", "Giá đã gồm VAT; trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]),
      badge: "Doanh nghiệp · PRO",
    },
    {
      name: "MESHPRO600 (Doanh nghiệp)",
      speed: "600 Mbps · quốc tế 2 Mbps",
      price: 650000,
      category: "business",
      features: JSON.stringify(["Băng thông quốc tế cam kết: 2 Mbps", "Modem + Mesh", "Giá đã gồm VAT; trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]),
      badge: "Doanh nghiệp · MeshPRO",
    },
    {
      name: "MESHPRO1000 (Doanh nghiệp)",
      speed: "1 Gbps · quốc tế 10 Mbps",
      price: 880000,
      category: "business",
      features: JSON.stringify(["Băng thông quốc tế cam kết: 10 Mbps", "Modem + Mesh", "Giá đã gồm VAT; trả trước 12 tháng tặng 1 tháng theo điều kiện công bố"]),
      badge: "Doanh nghiệp · MeshPRO",
    }
  ];

  for (const pkg of initialPackages) {
    insertPackage.run(pkg.name, pkg.speed, pkg.price, pkg.category, pkg.features, pkg.badge);
  }
}

export default db;

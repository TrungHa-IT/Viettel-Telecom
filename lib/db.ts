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
      name: "SUN1",
      speed: "150 Mbps",
      price: 180000,
      category: "personal",
      features: JSON.stringify(["Trang bị Modem 2 băng tần Wifi 5/6", "Phù hợp 1 - 5 thiết bị", "Hỗ trợ kỹ thuật 24/7"]),
      badge: "Phổ Biến Nhất",
    },
    {
      name: "SUN2",
      speed: "250 Mbps",
      price: 229000,
      category: "personal",
      features: JSON.stringify(["Trang bị Modem Wifi 6 thế hệ mới", "Phù hợp gia đình 5 - 10 thiết bị", "Chơi game, stream video 4K"]),
      badge: "Bán Chạy",
    },
    {
      name: "STAR1 (Mesh)",
      speed: "150 - 200 Mbps",
      price: 210000,
      category: "personal",
      features: JSON.stringify(["1 Modem chính + 1 Home Wifi Mesh", "Phủ sóng nhà tầng, chung cư rộng", "Roaming mượt mà khắp nhà"]),
      badge: "Gia Đình Rộng",
    },
    {
      name: "STAR2 (Mesh Wifi 6)",
      speed: "300 Mbps+",
      price: 245000,
      category: "personal",
      features: JSON.stringify(["1 Modem Wifi 6 + 2 Home Wifi Mesh", "Phủ sóng nhà 2-3 tầng hoặc quán cafe", "Tốc độ cực cao, không góc chết"]),
      badge: "Hot",
    },
    {
      name: "COMBO SUN1 + TV360",
      speed: "150 Mbps + TV",
      price: 210000,
      category: "combo",
      features: JSON.stringify(["Internet 150Mbps + 150 kênh truyền hình", "Ứng dụng TV360 cài sẵn SmartTV", "Xem phim, thể thao đỉnh cao"]),
      badge: "Ưu Đãi",
    },
    {
      name: "PRO600 (Doanh Nghiệp)",
      speed: "600 Mbps",
      price: 880000,
      category: "business",
      features: JSON.stringify(["Cam kết quốc tế 10 Mbps", "Trang bị Modem chuyên dụng chịu tải", "Phù hợp công ty 30-50 nhân sự"]),
      badge: "Doanh Nghiệp",
    },
  ];

  for (const pkg of initialPackages) {
    insertPackage.run(pkg.name, pkg.speed, pkg.price, pkg.category, pkg.features, pkg.badge);
  }
}

export default db;

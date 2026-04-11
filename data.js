// =====================
// 演唱會後記資料
// =====================

const posts = [
  {
    id: "20220226",
    title: "Phantom: The Musical Live",
    date: "2022 / 02 / 26 14:00",
    venue: "📍 어느 威秀",
    fellow: "with Trista",
    tags: ["규현", "뮤직컬"],
    link: "20220226.html"
  },
  {
    id: "20230305",
    title: "WERTHER: THE MUSICAL",
    date: "2023 / 03 / 05 13:05",
    venue: "📍 中和威秀",
    fellow: "with Polin",
    tags: ["규현", "뮤직컬"],
    link: "20230305.html"
  },
  {
    id: "20230311",
    title: "WERTHER: THE MUSICAL",
    date: "2023 / 03 / 11 14:30",
    venue: "📍 어느 威秀",
    fellow: "with Trista",
    tags: ["규현", "뮤직컬"],
    link: "20230311.html"
  },
  {
    id: "20230416",
    title: "2023 LEE SEUNG YOON CONCERT <Docking> in Taipei",
    date: "2023 / 04 / 16  18:00",
    venue: "📍 信義劇場 Legacy MAX （臺北新光三越 A11 6F）",
    tags: ["이승윤", "콘서트"],
    link: "20230416.html"
  },
  {
    id: "20230715",
    title: "PEAK TIME CONCER [YOUR TIME] IN TAIPEI",
    date: "2023 / 07 / 15  13:00",
    venue: "📍TICC 臺北國際會議中心",
    tags: ["VANNER", "SEVENUS", "M.O.N.T", "콘서트"],
    link: "20230715.html"
  },
  {
    id: "20230909",
    title: "M.O.N.T FAN CON in TAIPEI 《Will you be my mint?》",
    date: "2023 / 09 / 09  18:00",
    venue: "📍TICC 臺北國際會議中心",
    tags: ["M.O.N.T", "콘서트"],
    link: "20230909.html"
  },
  {
    id: "20240504",
    title: "Restrart in Taipei",
    date: "2024 / 05 / 04 17:00",
    venue: "📍新北工商展覽中心",
    tags: ["규현", "콘서트"],
    link: "20240504.html"
  },
  {
    id: "20240510",
    title: "2024 VANNER 1st CONCERT [THE FLAG:A TO V] IN TAIPEI",
    date: "2024 / 05 / 10 19:30",
    venue: "📍Zepp New Taipei",
    tags: ["VANNER", "콘서트"],
    link: "20240510.html"
  },
  {
    id: "20240524",
    title: "BEST OF MONT Mini Concert in Taipei",
    date: "2024 / 05 / 24 19:00",
    venue: "📍花漾展演空間 HANA SPACE",
    tags: ["M.O.N.T", "콘서트"],
    link: "20240524.html"
  },
  {
    id: "20250118",
    title: "M.O.N.T [ON MY WAY TO YOU] CONCERT in Taipei",
    date: "2025 / 01 / 18 14:00 ; 19:00",
    venue: "📍Clapper Studio",
    tags: ["M.O.N.T", "콘서트"],
    link: "20250118.html"
  },
  {
    id: "20250525",
    title: "J-hope tour 'HOPE ON THE STAGE' in TAIPEI",
    date: "2025 / 05 / 25 18:00",
    venue: "📍國立體育大學綜合體育館（林口體育館）",
    tags: ["J-hope", "BTS", "콘서트"],
    link: "20250525.html"
  },
  {
    id: "20250531",
    title: "J-hope tour 'HOPE ON THE STAGE' in JAPAN: LIVE VIEWING",
    date: "2025 / 05 / 31 17:15",
    venue: "📍樹林秀泰影城 2廳",
    tags: ["J-hope", "BTS", "라이브뷰잉", "콘서트"],
    link: "20250531.html"
  },
  {
    id: "20250712",
    title: "#RUNSEOKJIN_EP.TOUR in JAPAN: LIVE VIEWING",
    date: "2025 / 07 / 12 17:45",
    venue: "📍新店裕隆城威秀影城 10廳",
    tags: ["Jin", "BTS", "라이브뷰잉", "콘서트"],
    link: "20250712.html"
  },
  {
    id: "20250810",
    title: "#RUNSEOKJIN_EP.TOUR in AMSTERDAM: LIVE VIEWING",
    date: "2025 / 08 / 10 14:05",
    venue: "📍臺北信義威秀影城 3廳",
    tags: ["Jin", "BTS", "라이브뷰잉", "콘서트"],
    link: "20250810.html"
  },
  {
    id: "20250906",
    title: "MONTHLY MONT SPECIAL EDITION IN TAIPEI",
    date: "2025 / 09 / 06 13:00 , 18:00",
    venue: "📍Live House D",
    tags: ["M.O.N.T", "콘서트"],
    link: "20250906.html"
  },
  {
    id: "20251116",
    title: "J-hope tour 'HOPE ON THE STAGE' THE MOVIE",
    date: "2025 / 11 / 16 14:00",
    venue: "📍中和環球威秀影城 9廳",
    tags: ["J-hope", "BTS", "영화", "콘서트"],
    link: "20251116.html"
  },
  {
    id: "20251225",
    title: "M.O.N.T WINTER CONCERT 'A DECEMBER TO CELEBRATE' in TAIPEI",
    date: "2025 / 12 / 25 13:00",
    venue: "📍花漾展演空間 HANA SPACE",
    tags: ["M.O.N.T", "콘서트"],
    link: "20251225.html"
  },
  {
    id: "20251227",
    title: "#RUNSEOKJIN_EP.TOUR THE MOVIE",
    date: "2025 / 12 / 27 12:40",
    venue: "📍臺北信義威秀影城 2廳",
    tags: ["Jin", "BTS", "영화", "콘서트"],
    link: "20251227.html"
  },
  {
    id: "20260411",
    title: "BTS WORLD TOUR ‘ARIRANG’ IN GOYANG LIVE VIEWING",
    date: "2026 / 04 / 11 17:45",
    venue: "📍新店裕隆城威秀影城 10廳",
    tags: ["BTS", "라이브뷰잉", "콘서트"],
    link: "20260411.html"
  },
  {
    id: "20260418",
    title: "BTS WORLD TOUR ‘ARIRANG’ IN JAPAN LIVE VIEWING",
    date: "2026 / 04 / 18 13:45",
    venue: "📍新店裕隆城威秀影城 10廳",
    tags: ["BTS", "라이브뷰잉", "콘서트"],
    link: "20260418.html"
  }
];

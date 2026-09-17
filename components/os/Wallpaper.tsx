"use client";

export function Wallpaper() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 bg-[#05060b]" />
        <div className="absolute -left-[18%] -top-[28%] h-[85%] w-[75%] rounded-full bg-[#163a78] opacity-70 blur-[100px]" />
        <div className="absolute left-[28%] -top-[18%] h-[50%] w-[40%] rounded-full bg-[#7dd3fc] opacity-25 blur-[90px]" />
        <div className="absolute -right-[8%] top-[4%] h-[70%] w-[58%] rounded-full bg-[#6d28d9] opacity-45 blur-[110px]" />
        <div className="absolute right-[18%] top-[22%] h-[28%] w-[22%] rounded-full bg-[#fde68a] opacity-20 blur-[70px]" />
        <div className="absolute -bottom-[10%] left-[8%] h-[55%] w-[70%] rounded-full bg-[#0f766e] opacity-35 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] h-[40%] w-[40%] rounded-full bg-[#1e3a8a] opacity-40 blur-[90px]" />

        <div className="absolute left-[12%] top-[14%] h-2 w-2 rounded-full bg-white/90 blur-[1px]" />
        <div className="absolute left-[18%] top-[22%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute right-[22%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/80 blur-[1px]" />
        <div className="absolute right-[30%] top-[28%] h-1 w-1 rounded-full bg-sky-100/80" />
        <div className="absolute left-[62%] top-[12%] h-1 w-1 rounded-full bg-white/60" />

        <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0.6px,transparent_0.8px),radial-gradient(circle,rgba(186,230,253,0.7)_0.5px,transparent_0.7px),radial-gradient(circle,rgba(255,255,255,0.45)_0.4px,transparent_0.6px)] bg-position-[0_0,40px_70px,90px_20px] bg-size-[160px_160px,210px_210px,120px_120px]" />

        <svg className="absolute inset-x-0 bottom-0 h-[46%] w-full" viewBox="0 0 1440 420" preserveAspectRatio="none">
          <path fill="#0b1224" d="M0 220C180 160 320 250 520 190C720 128 860 240 1080 170C1260 118 1360 180 1440 150V420H0Z" />
          <path fill="#10192f" d="M0 280C220 210 400 310 640 240C880 168 1040 300 1240 230C1340 200 1400 240 1440 220V420H0Z" />
          <path fill="#080c18" d="M0 340C200 300 380 370 620 320C860 268 1020 380 1260 330C1360 310 1410 340 1440 328V420H0Z" />
        </svg>
      </div>

      <div className="absolute inset-0 dark:hidden">
        <div className="absolute inset-0 bg-[#c8d6ee]" />
        <div className="absolute -left-[18%] -top-[28%] h-[85%] w-[75%] rounded-full bg-[#8eaae6] opacity-70 blur-[100px]" />
        <div className="absolute left-[28%] -top-[18%] h-[50%] w-[40%] rounded-full bg-[#b8e4f8] opacity-45 blur-[90px]" />
        <div className="absolute -right-[8%] top-[4%] h-[70%] w-[58%] rounded-full bg-[#b8a4e6] opacity-40 blur-[110px]" />
        <div className="absolute right-[16%] top-[12%] h-[32%] w-[26%] rounded-full bg-[#fde68a] opacity-35 blur-[70px]" />
        <div className="absolute -bottom-[10%] left-[8%] h-[55%] w-[70%] rounded-full bg-[#8ec5c0] opacity-30 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] h-[40%] w-[40%] rounded-full bg-[#8aa3d4] opacity-40 blur-[90px]" />
        <div className="absolute right-[10%] top-[14%] h-28 w-28 rounded-full bg-[#fff8e7] opacity-95 blur-lg" />

        <svg className="absolute inset-x-0 bottom-0 h-[52%] w-full" viewBox="0 0 1440 420" preserveAspectRatio="none">
          <path fill="#9bb6d8" d="M0 210C200 150 340 240 540 180C740 118 900 230 1120 160C1280 112 1360 170 1440 140V420H0Z" />
          <path fill="#7f9dc4" d="M0 270C220 200 400 300 640 230C880 160 1040 290 1240 220C1340 190 1400 230 1440 210V420H0Z" />
          <path fill="#6586b0" d="M0 330C200 290 380 360 620 310C860 258 1020 370 1260 320C1360 300 1410 330 1440 318V420H0Z" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.22)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}

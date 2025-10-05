export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-pretty text-3xl sm:text-5xl font-semibold leading-tight">
              Transparansi dan Kualitas untuk Program Makan Bergizi
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              MBGku menghadirkan dasbor real-time, verifikasi QR, dan pelaporan instan dari penerima manfaat. Pastikan
              bantuan tepat sasaran, aman, dan bergizi—mendukung target Zero Hunger.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#data"
                className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-white shadow-card hover:shadow-cardHover hover:-translate-y-0.5 transition"
              >
                Lihat Data
              </a>
              <a
                href="#about"
                className="inline-flex items-center rounded-md border border-muted px-5 py-3 hover:bg-muted transition"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                Real-time Dashboard
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                Verifikasi QR
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-400"></span>
                Pelaporan Instan
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-muted bg-white p-4 shadow-card hover:shadow-cardHover transition">
              <img src="/dashboard-mbgku-overview.jpg" alt="Ilustrasi dashboard MBGku" className="rounded-lg" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-muted p-3 text-center hover:shadow-cardHover transition">
                  <div className="text-xs text-slate-500">Distribusi Hari Ini</div>
                  <div className="text-xl font-semibold">1.284</div>
                </div>
                <div className="rounded-lg border border-muted p-3 text-center hover:shadow-cardHover transition">
                  <div className="text-xs text-slate-500">Verifikasi QR</div>
                  <div className="text-xl font-semibold">97.4%</div>
                </div>
                <div className="rounded-lg border border-muted p-3 text-center hover:shadow-cardHover transition">
                  <div className="text-xs text-slate-500">Feedback Positif</div>
                  <div className="text-xl font-semibold">92%</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-accent/20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

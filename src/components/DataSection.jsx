function DataCard({ title, value, sub, icon }) {
  return (
    <div className="rounded-xl border border-muted bg-white p-5 shadow-card hover:shadow-cardHover hover:-translate-y-0.5 transition">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-600">{title}</div>
          <div className="mt-1 text-2xl font-semibold">{value}</div>
        </div>
        <div className="h-10 w-10 rounded-md bg-accent/10 text-accent flex items-center justify-center">{icon}</div>
      </div>
      <div className="mt-3 text-xs text-slate-500">{sub}</div>
    </div>
  )
}

export default function DataSection() {
  return (
    <section id="data" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-pretty">Data</h2>
          <p className="mt-3 text-slate-600">
            Lihat ringkasan data seperti umpan balik sekolah, rating dapur, dan metrik penting lainnya.
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DataCard
            title="Show feedback sekolah"
            value="1.124 feedback"
            sub="Terakhir diperbarui 5 menit lalu"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 5h16v10H7l-3 4V5z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <DataCard
            title="Show rating dapur"
            value="4.6/5"
            sub="Berdasarkan 327 penilaian"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <DataCard
            title="Verifikasi QR sukses"
            value="97.4%"
            sub="Validasi pengiriman via QR"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <DataCard
            title="Keluhan kualitas"
            value="2.8%"
            sub="Pelaporan instan dari penerima manfaat"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 9v4m0 4h.01M5.07 19h13.86L12 3 5.07 19z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <DataCard
            title="Distribusi tersalurkan"
            value="85.2%"
            sub="Progress cakupan wilayah"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18M3 6h18M3 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            }
          />
          <DataCard
            title="Kepuasan penerima"
            value="92%"
            sub="Survei bulanan"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 10h6m-7 4h8M3 12a9 9 0 1018 0A9 9 0 003 12z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>

        <div className="mt-8 rounded-xl border border-dashed border-muted p-6 text-sm text-slate-600">
          <p className="font-medium">Tindak lanjut</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Integrasikan API data aktual untuk menggantikan placeholder.</li>
            <li>Tambahkan filter (wilayah, tanggal, pemasok) di masa depan.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

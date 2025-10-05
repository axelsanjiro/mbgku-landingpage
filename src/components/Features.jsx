function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-muted bg-white p-6 shadow-card hover:shadow-cardHover hover:-translate-y-0.5 transition">
      <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">{icon}</div>
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm">{desc}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h16M4 6h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            }
            title="Transparansi Distribusi"
            desc="Pantau alur distribusi bantuan secara terbuka dan akuntabel melalui dasbor real-time."
          />
          <FeatureCard
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Verifikasi QR"
            desc="Validasi pengiriman secara langsung dengan QR code yang mudah dipindai dan aman."
          />
          <FeatureCard
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 20v-6M6 10l6-6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Pelaporan Instan"
            desc="Penerima manfaat dapat melaporkan kualitas makanan secara cepat untuk umpan balik."
          />
        </div>
      </div>
    </section>
  )
}

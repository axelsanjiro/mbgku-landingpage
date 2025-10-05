export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-pretty">About us (Team)</h2>
          <p className="mt-3 text-slate-600">
            MBGku dibangun oleh tim lintas-disiplin dengan misi meningkatkan efektivitas dan akuntabilitas program MBG.
            Kami memadukan teknologi pelacakan, verifikasi, dan pelaporan agar bantuan sampai kepada yang berhak—aman
            dan bergizi.
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Koordinator Program", "Data Engineer", "UX Researcher"].map((role, i) => (
            <div
              key={i}
              className="rounded-xl border border-muted p-5 shadow-card hover:shadow-cardHover hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`/diverse-professional-profiles.png?height=64&width=64&query=profile%20${encodeURIComponent(role)}`}
                  alt={`Foto ${role}`}
                  className="h-16 w-16 rounded-lg border border-muted"
                />
                <div>
                  <div className="font-semibold">Nama Anggota {i + 1}</div>
                  <div className="text-sm text-slate-600">{role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Berkomitmen pada transparansi, kualitas, dan partisipasi publik dalam setiap proses distribusi.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

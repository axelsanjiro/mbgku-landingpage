"use client"

import { useState } from "react"

export default function Login() {
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      alert("Login sukses (mock). Integrasikan auth sesuai kebutuhan Anda.")
      setLoading(false)
      window.location.hash = "#home"
    }, 800)
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <div className="rounded-xl border border-muted bg-white p-6 shadow-card">
          <h1 className="text-2xl font-semibold">Login</h1>
          <p className="mt-2 text-sm text-slate-600">Masuk ke MBGku untuk mengakses dasbor internal.</p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="nama@contoh.id"
                className="w-full rounded-md border border-muted px-3 py-2 bg-[var(--bg)] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-md border border-muted px-3 py-2 bg-[var(--bg)] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white hover:shadow-cardHover transition disabled:opacity-70"
              aria-busy={loading}
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>
          </form>
          <div className="mt-4 text-sm">
            <a href="#home" className="text-primary hover:underline">
              Kembali ke beranda
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

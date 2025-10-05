export default function Footer() {
  return (
    <footer className="mt-10 border-t border-muted bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-primary/90"></div>
              <span className="font-semibold tracking-tight">MBGku</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Transparansi, pengawasan kualitas, dan partisipasi publik untuk program MBG.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Quick Navigation</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="hover:text-primary transition" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#about">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#data">
                  Data
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#login">
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <span className="text-slate-600">Kebijakan Privasi</span>
              </li>
              <li>
                <span className="text-slate-600">Syarat & Ketentuan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} MBGku. Semua hak dilindungi.</div>
      </div>
    </footer>
  )
}

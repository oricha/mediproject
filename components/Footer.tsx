export function Footer() {
  return (
    <footer className="mt-20 border-t py-8 text-sm">
      <div className="container-page flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p className="text-gray-600">© {new Date().getFullYear()} Barcelona Aesthetics Clinic</p>
        <nav className="flex gap-4">
          <a className="text-gray-600 hover:text-deep" href="/privacy">Privacy</a>
          <a className="text-gray-600 hover:text-deep" href="/terms">Terms</a>
          <a className="text-gray-600 hover:text-deep" href="/cookies">Cookies</a>
        </nav>
      </div>
    </footer>
  )
}


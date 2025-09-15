export function Footer() {
  return (
    <footer className="mt-20 border-t py-10 text-sm bg-white">
      <div className="container-page grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="font-serif text-xl">Barcelona Aesthetics</div>
          <div className="text-gray-600 mt-2">Los Ángeles, CA</div>
          <div className="text-gray-600">+1 (555) 123-4567 · hello@barcelona-aesthetics.com</div>
          <div className="mt-3">
            <a href="/book" className="inline-block rounded-md bg-gold text-white px-4 py-2">Agendar cita</a>
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-2">
          <a className="text-gray-700 hover:text-deep" href="/treatments">Tratamientos</a>
          <a className="text-gray-700 hover:text-deep" href="/blog">Blog</a>
          <a className="text-gray-700 hover:text-deep" href="/contact">Contacto</a>
          <a className="text-gray-700 hover:text-deep" href="/privacy">Políticas</a>
        </nav>
        <div className="flex items-start md:justify-end gap-3">
          <a aria-label="Instagram" href="https://instagram.com/royalclinic" target="_blank" className="h-9 w-9 rounded-full border flex items-center justify-center hover:bg-beige">IG</a>
          <a aria-label="Facebook" href="#" className="h-9 w-9 rounded-full border flex items-center justify-center hover:bg-beige">FB</a>
          <a aria-label="Twitter" href="#" className="h-9 w-9 rounded-full border flex items-center justify-center hover:bg-beige">X</a>
        </div>
      </div>
      <div className="container-page mt-8 text-gray-500">© {new Date().getFullYear()} Barcelona Aesthetics Clinic</div>
    </footer>
  )
}

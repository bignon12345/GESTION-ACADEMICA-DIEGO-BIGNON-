import { NavLink } from "react-router-dom"

const navigationItems = [
  { to: "/", label: "Cursos" },
  { to: "/permisos", label: "Permisos" },
  { to: "/sedes", label: "Sedes" },
  { to: "/secciones", label: "Secciones" },
  { to: "/horario", label: "Horario" },
  { to: "/Cliente", label: "Clientes" },
  { to: "/Producto", label: "Productos" },
]

function Header() {
  return (
    <header className="border-t-4 border-[#b22435] bg-white text-[#30343c] shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:py-4">
        <NavLink to="/" aria-label="Universidad Andrés Bello, inicio" className="shrink-0">
          <img src="/logo-unab.png" alt="Universidad Andrés Bello" className="h-16 w-auto max-w-[72vw] sm:h-20" />
        </NavLink>
        <div className="hidden border-l-2 border-[#b22435] pl-4 text-right md:block">
          <p className="text-xs font-bold uppercase tracking-wide text-[#b22435]">Portal universitario</p>
          <p className="mt-1 text-sm font-semibold text-[#30343c]">Gestión académica</p>
        </div>
      </div>
      <div className="bg-[#30343c] text-white">
        <nav aria-label="Navegación principal" className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 text-sm font-semibold sm:gap-3">
          {navigationItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `shrink-0 border-b-[3px] px-3 py-4 transition-colors ${isActive ? "border-[#d43a4b] text-white" : "border-transparent text-gray-300 hover:border-gray-500 hover:text-white"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
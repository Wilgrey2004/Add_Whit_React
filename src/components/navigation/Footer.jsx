const Footer = () => {
  return (
    <footer className="layout-primary ">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Marca */}
          <div>
            <h3 className="layout-fond-color text-lg font-semibold">MiApp</h3>
            <p className="mt-2 text-sm layout-fond-color">
              Aplicación construida con React, Vite y Tailwind CSS.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="layout-fond-color font-medium mb-3">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:layout-fond-color layout-fond-color cursor-pointer">
                Inicio
              </li>
              <li className="hover:layout-fond-color layout-fond-color cursor-pointer">
                About
              </li>
              <li className="hover:layout-fond-color layout-fond-color cursor-pointer">
                Contacto
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="layout-fond-color font-medium mb-3">Información</h4>
            <p className="text-sm layout-fond-color">
              © {new Date().getFullYear()} MiApp. Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t layout-fond-color border-slate-700 mt-8 pt-4 text-center text-xs">
          Desarrollado por Wilgrey Ravelo Cruz
        </div>
      </div>
    </footer>
  );
};

export default Footer;

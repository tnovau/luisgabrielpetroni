import { siteConfig } from "@/config/site";

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-20 lg:px-16">
      <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-[#641c34]">
        Servicios
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-gray-500">
        Soluciones integrales en seguridad, higiene y medio ambiente para su
        empresa.
      </p>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {siteConfig.services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-[#641c34]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#641c34]/5 text-2xl">
                {service.icon}
              </span>
              <h3 className="text-lg font-semibold text-[#641c34]">
                {service.title}
              </h3>
            </div>

            <ul className="space-y-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#641c34]/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { PerfumeBottleIcon } from "@/components/PerfumeBottleIcon";
import { useState } from "react";

function getAsset(name: string) {
  const fileName = name.includes(".") ? name : `${name}.jpg`;
  return `/assets/${fileName}`;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Esencia Dorada — Perfumes de Lujo" },
      {
        name: "description",
        content:
          "Esencia Dorada: fragancias exclusivas para quienes aprecian lo extraordinario. El lujo que se siente, el aroma que permanece.",
      },
      { property: "og:title", content: "Esencia Dorada — Perfumes de Lujo" },
      {
        property: "og:description",
        content: "Fragancias exclusivas para quienes aprecian lo extraordinario.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_GENERAL =
  "https://wa.me/51996502329?text=Hola%20quiero%20informacion%20sobre%20los%20perfumes";

const perfumes = [
  {
    img: "kamrah-clasico",
    name: "Kamrah Clásico",
    description: "La esencia de lo eterno. Un aroma que nació para perdurar.",
    about:
      "Huele dulce, cálido y especiado. Lo primero que se siente es canela, vainilla y un toque licoroso tipo coñac o postre elegante. Después salen notas ambaradas y cremosas que lo hacen muy envolvente.",
    sensation: "Elegante, seductor, maduro y bastante llamativo.",
    when: ["Noches", "Salidas", "Citas", "Clima frío o invierno", "Eventos donde quieras destacar"],
    note: "No es ideal para calor fuerte o uso diario en universidad/gym porque puede sentirse pesado.",
    url: "https://wa.me/51996502329?text=Hola%20quiero%20informacion%20sobre%20Kamrah%20Cl%C3%A1sico",
  },
  {
    img: "kamrah-qawa",
    name: "Khamrah Qahwa",
    description: "Tiene la base dulce del Khamrah clásico, pero con café tostado.",
    about:
      "Tiene la base dulce del Khamrah clásico, pero con café tostado y un toque más oscuro y masculino. Se siente menos empalagoso y más refinado. El café no es tipo Starbucks fuerte; es más elegante y cálido.",
    sensation: "Más serio, sofisticado y masculino que el clásico.",
    when: ["Noches", "Reuniones elegantes", "Citas", "Clima frío", "Salidas formales o semi-formales"],
    note: "Suele gustarle más a personas que sienten el Khamrah clásico demasiado dulce.",
    url: "https://wa.me/51996502329?text=Hola%20quiero%20informacion%20sobre%20Khamrah%20Qahwa",
  },
  {
    img: "mandarin-sky",
    name: "Mandarin Sky",
    description: "Dulce fresco con mandarina cítrica y caramelizado.",
    about:
      "Huele dulce fresco. Tiene mandarina cítrica al inicio, pero rápido sale un aroma caramelizado y ligeramente avainillado. Mucha gente lo compara con un perfume juvenil de fiesta. Tiene vibra moderna y coqueta.",
    sensation: "Joven, energético y atractivo.",
    when: ["Fiestas", "Salidas con amigos", "Discotecas", "Citas casuales", "Primavera o noches templadas"],
    note: "No tanto para oficina o ambientes muy serios.",
    url: "https://wa.me/51996502329?text=Hola%20quiero%20informacion%20sobre%20Mandarin%20Sky",
  },
  {
    img: "9am-afnan",
    name: "9 AM",
    description: "Muy fresco y limpio. Sensación de recién bañado.",
    about:
      "Muy fresco y limpio. Se sienten cítricos, un toque acuático y algo jabonoso elegante. Da sensación de recién bañado y energía.",
    sensation: "Activo, limpio, relajado y versátil.",
    when: ["Universidad", "Trabajo", "Día a día", "Verano", "Gym", "Salidas casuales"],
    note: "Es de los más fáciles de usar porque casi nunca incomoda.",
    url: "https://wa.me/51996502329?text=Hola%20quiero%20informacion%20sobre%209%20AM",
  },
  {
    img: "9pm-afnan",
    name: "9 PM",
    description: "Dulce, avainillado y frutal. Joven y seductor.",
    about:
      "Dulce, avainillado y frutal. Tiene manzana, vainilla y un fondo cálido que recuerda a perfumes de fiesta muy populares. Se siente juvenil y bastante seductor.",
    sensation: "Coqueto, llamativo y fiestero.",
    when: ["Discotecas", "Fiestas", "Citas", "Noches", "Clima fresco"],
    note: "Proyecta bastante. Con pocas atomizaciones ya se nota.",
    url: "https://wa.me/51996502329?text=Hola%20quiero%20informacion%20sobre%209%20PM",
  },
];

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.473-8.413z" />
    </svg>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-[rgba(201,168,76,0.3)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-2xl tracking-[0.3em] text-[color:var(--gold)]"
        >
          ESENCIA DORADA
        </a>
        <a
          href={WHATSAPP_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-outline px-5 py-2 text-sm tracking-wider rounded"
        >
          Cotizar ahora
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('${getAsset("hero-bg")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 pointer-events-none" />
      <div className="max-w-3xl text-center relative z-10">
        <FadeInOnScroll>
          <p className="text-[color:var(--gold)] tracking-[0.5em] text-xs mb-8 uppercase">
            Esencia Dorada
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={150}>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6">
            El lujo que se siente,
            <br />
            <span className="italic">el aroma que permanece.</span>
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll delay={300}>
          <p className="text-[color:var(--text-secondary)] text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Fragancias exclusivas para quienes aprecian lo extraordinario.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={450}>
          <a
            href="#coleccion"
            className="btn-gold-outline inline-block px-8 py-3 tracking-widest text-sm rounded"
          >
            Ver Colección
          </a>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeInOnScroll>
          <p className="text-[color:var(--gold)] tracking-[0.4em] text-xs uppercase mb-6">
            Sobre nosotros
          </p>
          <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed italic">
            En Esencia Dorada, cada fragancia es una obra de arte. Seleccionamos las
            esencias más finas para crear experiencias olfativas que perduran
            en la memoria.
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

function Coleccion() {
  const [selectedPerfume, setSelectedPerfume] = useState<typeof perfumes[number] | null>(null);

  return (
    <section id="coleccion" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-[color:var(--gold)] tracking-[0.4em] text-xs uppercase mb-4">
              Nuestras esencias
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Nuestra Colección
            </h2>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((p, i) => (
            <FadeInOnScroll key={p.name} delay={i * 100}>
              <article
                onClick={() => setSelectedPerfume(p)}
                className="glass-card rounded-lg overflow-hidden flex flex-col h-full cursor-pointer transition hover:-translate-y-1"
              >
                <div className="perfume-placeholder aspect-[4/5] overflow-hidden">
                  <img
                    src={getAsset(p.img)}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-2xl text-foreground mb-3">
                    {p.name}
                  </h3>
                  <p className="text-[color:var(--text-secondary)] italic leading-relaxed mb-6 flex-1">
                    {p.description}
                  </p>
                  <button
                    type="button"
                    className="btn-gold-solid w-full text-center py-3 rounded font-medium tracking-wider"
                  >
                    Ver más
                  </button>
                </div>
              </article>
            </FadeInOnScroll>
          ))}
        </div>
      </div>

      {selectedPerfume && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedPerfume(null)}
        >
          <div
            className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[rgba(201,168,76,0.3)] animate-in fade-in zoom-in-95 duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background flex items-center justify-between p-6 border-b border-[rgba(201,168,76,0.3)]">
              <h2 className="font-display text-3xl text-foreground">
                {selectedPerfume.name}
              </h2>
              <button
                onClick={() => setSelectedPerfume(null)}
                className="text-2xl text-[color:var(--gold)] hover:opacity-70 transition"
              >
                ✕
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src={getAsset(selectedPerfume.img)}
                  alt={selectedPerfume.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-display text-xl text-[color:var(--gold)] mb-2 uppercase tracking-[0.1em]">
                  ¿A qué huele?
                </h3>
                <p className="text-[color:var(--text-secondary)] leading-relaxed">
                  {selectedPerfume.about}
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-[color:var(--gold)] mb-2 uppercase tracking-[0.1em]">
                  Sensación que da
                </h3>
                <p className="text-[color:var(--text-secondary)] leading-relaxed">
                  {selectedPerfume.sensation}
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-[color:var(--gold)] mb-3 uppercase tracking-[0.1em]">
                  ¿Cuándo usarlo?
                </h3>
                <ul className="space-y-2">
                  {selectedPerfume.when.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[color:var(--text-secondary)]">
                      <span className="text-[color:var(--gold)] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl text-[color:var(--gold)] mb-2 uppercase tracking-[0.1em]">
                  Nota
                </h3>
                <p className="text-[color:var(--text-secondary)] leading-relaxed">
                  {selectedPerfume.note}
                </p>
              </div>

              <a
                href={selectedPerfume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-solid inline-flex px-8 py-3 rounded font-medium tracking-wider w-full text-center justify-center"
              >
                Cotizar este perfume
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-20 px-6 bg-card">
      <FadeInOnScroll>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
            ¿Listo para encontrar tu aroma ideal?
          </h2>
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-solid inline-flex items-center gap-3 px-8 py-4 rounded font-medium tracking-wider"
          >
            <WhatsAppIcon />
            Contáctanos por WhatsApp
          </a>
        </div>
      </FadeInOnScroll>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-12 px-6 border-t border-[rgba(201,168,76,0.3)]">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-display text-2xl tracking-[0.3em] text-[color:var(--gold)] mb-3">
          ESENCIA DORADA
        </h3>
        <p className="text-[color:var(--text-secondary)] italic mb-6">
          El lujo que se siente, el aroma que nopermanece.
        </p>
        <a
          href={WHATSAPP_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contáctanos por WhatsApp"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[rgba(201,168,76,0.3)] text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-background transition-colors"
        >
          <WhatsAppIcon />
        </a>
        <p className="mt-8 text-xs text-[color:var(--text-secondary)] tracking-wider">
          © {new Date().getFullYear()} Esencia Dorada. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_GENERAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full btn-gold-solid flex items-center justify-center shadow-lg"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <hr className="gold-divider mx-auto max-w-5xl" />
      <About />
      <hr className="gold-divider mx-auto max-w-5xl" />
      <Coleccion />
      <hr className="gold-divider mx-auto max-w-5xl" />
      <CTABanner />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

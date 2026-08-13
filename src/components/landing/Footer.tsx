import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";
import logoWhite from "@/assets/logo-white.png.asset.json";
import { COMPANY, NAV_LINKS } from "@/lib/siloflex";

export function Footer() {
  return (
    <footer className="bg-primary-deep pt-14 pb-8 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <img
              src={logoWhite.url}
              alt="Logo Silo Flex - Sacos para Silagem"
              loading="lazy"
              className="h-20 w-auto"
            />
            <p className="mt-5 font-display text-lg font-extrabold">
              {COMPANY.fullName}
            </p>
            <p className="mt-2 max-w-xs text-sm text-primary-foreground/75">
              Embalagens para silagem com resistência, segurança e qualidade.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-primary-foreground/60 uppercase">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-primary-foreground/60 uppercase">
              Contato
            </p>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                {COMPANY.whatsappDisplay}
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {COMPANY.address}
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                {COMPANY.hours}
              </li>
              <li className="flex items-center gap-4 pt-1">
                <a
                  href={COMPANY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground"
                >
                  <Instagram className="h-4 w-4" />
                  {COMPANY.instagram}
                </a>
                <a
                  href={COMPANY.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground"
                >
                  <Facebook className="h-4 w-4" />
                  {COMPANY.facebook}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>CNPJ: {COMPANY.cnpj}</p>
          <p>
            © {new Date().getFullYear()} {COMPANY.fullName}
          </p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { PageHeroProps } from "@/lib/types";

export default function PageHero({
  title,
  breadcrumbs = [{ label: "Home", href: "/" }],
  backgroundImage = "/assets/breadcrumb/image.png",
}: PageHeroProps): React.ReactElement {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={`${title} hero background`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-accent/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        {/* Page Title */}
        <h1 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-white/90">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <li key={crumb.href} className="flex items-center gap-2">
                  {isLast ? (
                    <span className="font-medium text-white">
                      {crumb.label}
                    </span>
                  ) : (
                    <>
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-white"
                      >
                        {crumb.label}
                      </Link>
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}

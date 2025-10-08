import Image from "next/image";
import type { ServiceDetailProps } from "@/lib/types";

export default function ServiceDetail({
  title,
  description,
  image,
}: ServiceDetailProps): React.ReactElement {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-28">
        {/* Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden lg:aspect-[21/9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Content */}
        <div className="mt-8 lg:mt-12">
          {/* Title */}
          <h2 className="mb-4 font-display text-2xl font-bold text-[#153C78] lg:text-3xl">
            {title}
          </h2>

          {/* Description */}
          <p className="max-w-5xl text-base leading-relaxed text-gray-700 lg:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Footer(): React.ReactElement {
  return (
    <footer className="relative mt-auto">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/pages/homepage/images/footer_bg.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
          quality={85}
        />
        {/* Optional overlay for text readability */}
        <div className="absolute inset-0 bg-accent/60" />
      </div>

      {/* Content */}
      <div className="relative px-6 py-16 text-white h-[500px]">
        <div className="mx-auto max-w-7xl"></div>
      </div>
    </footer>
  );
}

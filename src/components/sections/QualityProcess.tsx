import Image from "next/image";
import { qualitySteps } from "@/lib/data/qualityProcess";

export default function QualityProcess(): React.ReactElement {
  return (
    <section className="relative z-12 overflow-visible">
      {/* Mobile Background - Solid Color with Clip Path */}
      <div
        className="absolute inset-0 bg-[#0B3574] lg:hidden"
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
        }}
      />

      {/* Desktop Background - Image with Slanted Edges */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "url('/assets/pages/Why_Choose_Mophire/Images/quality_process.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 -mb-15 px-4 py-22 sm:px-8 sm:py-16 lg:px-54 lg:py-38">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-3xl lg:mb-16 lg:text-4xl">
            Our Quality Process
          </h2>

          {/* Process Steps */}
          <div className="flex flex-col items-center gap-0 lg:flex-row lg:items-start lg:justify-center">
            {qualitySteps.map((step, index) => {
              const isEvenIndex = index % 2 === 1; // 2nd, 4th items (index 1, 3)
              const isUpArrow = index % 2 === 1; // Up arrows after 2nd, 4th items

              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center lg:flex-row lg:items-start"
                >
                  {/* Step Container */}
                  <div
                    className={`flex flex-col items-center text-center lg:w-[240px] ${
                      isEvenIndex ? "-ml-16 lg:ml-0 lg:mt-16" : ""
                    }`}
                  >
                    {/* Icon Circle with Number Badge */}
                    <div className="relative mb-4">
                      {/* Main Circle */}
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg sm:h-28 sm:w-28">
                        <Image
                          src={step.icon}
                          alt=""
                          width={40}
                          height={40}
                          className="h-10 w-10 sm:h-12 sm:w-12"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Number Badge */}
                      <div className="absolute -right-1 -top-1 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#0B3574] bg-[#0066D0] text-sm font-bold text-white shadow-md">
                        {step.number}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="max-w-[200px] text-base font-semibold leading-snug text-white sm:text-lg lg:text-sm">
                      {step.title}
                    </h3>
                  </div>

                  {/* Connecting Arrow - Beside on desktop, Below on mobile */}
                  {index < qualitySteps.length - 1 && (
                    <div
                      className={`my-6 flex items-center justify-center lg:my-0 lg:px-4 lg:pt-8 ${
                        isUpArrow ? "-ml-16 lg:ml-0 lg:mt-16" : ""
                      }`}
                    >
                      {/* Mobile: Vertical arrow (rotated 90deg), Desktop: Horizontal */}
                      <Image
                        src={
                          index % 2 === 0
                            ? "/assets/pages/Why_Choose_Mophire/icons/curved-arrow-down.svg"
                            : "/assets/pages/Why_Choose_Mophire/icons/curved-arrow-up.svg"
                        }
                        alt=""
                        width={80}
                        height={60}
                        className="h-12 w-20 rotate-90 lg:h-auto lg:w-20 lg:rotate-0"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

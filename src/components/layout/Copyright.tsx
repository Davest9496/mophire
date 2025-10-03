import { cn } from "@/lib/utils";

interface CopyrightProps {
  className?: string;
}

export default function Copyright({
  className,
}: CopyrightProps): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <div className={cn("bg-gray-100 py-6", className)}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          © {currentYear} Mophire Cleaning Services. All rights reserved.
        </p>
      </div>
    </div>
  );
}

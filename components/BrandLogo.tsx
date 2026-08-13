import { brand } from "@/lib/content";

type BrandLogoProps = {
  size?: number;
  className?: string;
};

export function BrandLogo({ size = 36, className = "" }: BrandLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={brand.shortName}
    >
      <rect width="120" height="120" fill="#121212" />
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fill="#E6E2DC"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="13"
        fontWeight="400"
        letterSpacing="0.12em"
      >
        {brand.name}
      </text>
    </svg>
  );
}

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
      aria-label="Vicéli Living"
    >
      <rect width="120" height="120" fill="#121212" />
      <text
        x="60"
        y="54"
        textAnchor="middle"
        fill="#E6E2DC"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="22"
        fontWeight="400"
        letterSpacing="0.18em"
      >
        VICÉLI
      </text>
      <text
        x="60"
        y="74"
        textAnchor="middle"
        fill="#E6E2DC"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="9"
        fontWeight="400"
        letterSpacing="0.42em"
      >
        LIVING
      </text>
    </svg>
  );
}

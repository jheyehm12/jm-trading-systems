interface BrandMarkProps {
  className?: string;
  variant?: 'full' | 'symbol';
}

export default function BrandMark({
  className = '',
  variant = 'full',
}: BrandMarkProps) {
  if (variant === 'symbol') {
    return (
      <span
        className={`font-display text-xl font-bold tracking-[-0.06em] text-page-bg sm:text-2xl ${className}`}
      >
        JL
      </span>
    );
  }

  return (
    <span
      className={`font-display text-sm font-semibold tracking-[-0.03em] text-body-strong sm:text-base ${className}`}
    >
      Jimeno Labs
    </span>
  );
}

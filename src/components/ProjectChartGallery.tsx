interface ChartImage {
  src: string;
  caption: string;
  url?: string;
}

interface ProjectChartGalleryProps {
  images: ChartImage[];
  className?: string;
}

export default function ProjectChartGallery({
  images,
  className = '',
}: ProjectChartGalleryProps) {
  return (
    <div className={`space-y-4 ${className}`.trim()}>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={[
            'overflow-hidden rounded-lg border border-theme bg-[var(--chrome-bg)] shadow-surface',
            index === 0 ? 'shadow-surface-lg' : '',
          ].join(' ')}
        >
          <div className="flex items-center gap-2 border-b border-theme bg-[var(--chrome-bar)] px-3 py-2.5 sm:px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 truncate text-[10px] text-slate-500 sm:text-[11px]">
              {image.url ?? 'tradingview.com/chart'}
            </span>
          </div>
          <img
            src={image.src}
            alt={image.caption}
            className="block w-full bg-[#131722]"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <p className="border-t border-theme bg-surface-card px-4 py-2.5 text-[11px] text-body-soft">
            {image.caption}
          </p>
        </div>
      ))}
    </div>
  );
}

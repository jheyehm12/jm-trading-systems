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
            'overflow-hidden rounded-lg border border-white/10 bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.45)]',
            index === 0 ? 'shadow-[0_28px_70px_rgba(0,0,0,0.55)]' : '',
          ].join(' ')}
        >
          <div className="flex items-center gap-2 border-b border-white/8 bg-[#111] px-3 py-2.5 sm:px-4">
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
          <p className="border-t border-white/8 px-4 py-2.5 text-[11px] text-body-soft">
            {image.caption}
          </p>
        </div>
      ))}
    </div>
  );
}

export function PageShell({ children, className = '' }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-7xl px-6 pb-20 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pb-24 lg:pt-12 ${className}`}
    >
      {children}
    </div>
  )
}

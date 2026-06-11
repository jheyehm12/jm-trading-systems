const previewContent = {
  'trading-alert': {
    url: 'myalert.local/decisions',
    render: () => (
      <div className="flex h-full min-h-[220px] bg-[#0c1017] text-[10px] sm:min-h-[280px] sm:text-[11px]">
        <aside className="hidden w-36 shrink-0 border-r border-white/8 bg-[#090d13] p-3 sm:block">
          <p className="font-semibold text-white">MyAlert</p>
          <p className="mt-1 text-[9px] text-slate-500">Decision Platform</p>
          <div className="mt-4 space-y-2 text-slate-400">
            <p className="text-white">Decisions</p>
            <p>Replay</p>
            <p>Analytics</p>
            <p>Alerts</p>
          </div>
        </aside>
        <div className="flex-1 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <p className="font-medium text-white">Decision Engine</p>
            <span className="rounded bg-cyan-400/15 px-2 py-0.5 text-cyan-300">
              AI Review
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ['WAIT', '42'],
              ['TAKE', '19'],
              ['Logged', '61'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded border border-white/8 bg-white/[0.03] p-2"
              >
                <p className="text-slate-500">{label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded border border-white/8 bg-[#080b10] p-2">
            <div className="space-y-1.5 font-mono text-slate-400">
              <p>
                <span className="text-slate-500">09:41</span> XAUUSD alert received
              </p>
              <p>
                <span className="text-slate-500">09:41</span> Context enriched · AI review
              </p>
              <p>
                <span className="text-slate-500">09:42</span> Decision: TAKE · Telegram sent
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  'tradingview-strategy': {
    url: 'tradingview.com/chart',
    render: () => (
      <div className="min-h-[220px] bg-[#131722] p-3 sm:min-h-[280px] sm:p-4">
        <div className="flex items-center justify-between text-[10px] text-slate-400 sm:text-[11px]">
          <p className="text-white">ES1! · 15m · LookBack Strategy</p>
          <p>O 5,421.25 H 5,428.50 L 5,418.00 C 5,426.75</p>
        </div>
        <div className="relative mt-3 h-40 overflow-hidden rounded border border-white/8 bg-[#0f1420] sm:h-52">
          <div className="absolute inset-0 flex items-end gap-1 px-3 pb-6 pt-8">
            {[42, 58, 35, 68, 48, 72, 55, 80, 62, 88, 70, 76, 64, 92, 78].map(
              (h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i % 3 === 0 ? '#ef5350' : '#26a69a',
                    opacity: 0.85,
                  }}
                />
              ),
            )}
          </div>
          <svg
            className="absolute inset-x-3 top-8 h-28"
            fill="none"
            viewBox="0 0 400 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0 90 L40 72 L80 78 L120 50 L160 58 L200 32 L240 40 L280 24 L320 30 L360 18 L400 12"
              stroke="#2962ff"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    ),
  },
  'saas-dashboard': {
    url: 'trade-vault2.vercel.app',
    render: () => (
      <div className="flex h-full min-h-[220px] bg-[#0b0f14] sm:min-h-[300px]">
        <aside className="hidden w-40 shrink-0 border-r border-white/8 bg-[#080b10] p-3 sm:block">
          <p className="text-xs font-semibold text-white">TradeVault</p>
          <div className="mt-4 space-y-2 text-[11px] text-slate-400">
            <p className="text-white">Dashboard</p>
            <p>Trades</p>
            <p>Analytics</p>
          </div>
        </aside>
        <div className="flex-1 p-3 sm:p-4">
          <p className="text-sm font-medium text-white">Performance Overview</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              ['Win Rate', '68%'],
              ['Total P&L', '+$4,280'],
              ['Trades', '142'],
              ['Best R:R', '3.2'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded border border-white/8 bg-white/[0.02] p-2"
              >
                <p className="text-[10px] text-slate-500">{label}</p>
                <p className="mt-1 text-xs font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded border border-white/8 bg-[#070a0f] p-2">
            <p className="text-[10px] text-slate-500">Equity curve</p>
            <svg className="mt-2 h-20 w-full" fill="none" viewBox="0 0 300 80">
              <path
                d="M0 65 L30 58 L60 52 L90 48 L120 40 L150 35 L180 28 L210 22 L240 18 L270 12 L300 8"
                stroke="#94a3b8"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  'ai-workforce': {
    url: 'ai-workforce-assistant-platform.vercel.app',
    render: () => (
      <div className="min-h-[220px] bg-[#0c0f14] p-3 sm:min-h-[280px] sm:p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-white">AI Workforce</p>
          <span className="text-[10px] text-slate-500">Admin view</span>
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {['Sales', 'Operations', 'Admin'].map((agent) => (
            <div
              key={agent}
              className="rounded border border-white/8 bg-white/[0.02] p-3"
            >
              <p className="text-xs font-medium text-white">{agent}</p>
              <p className="mt-2 text-[10px] text-slate-500">12 tasks today</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded border border-white/8 bg-[#080b10] p-3">
          <p className="text-[10px] text-slate-500">Recent activity</p>
          <div className="mt-2 space-y-2 text-[11px] text-slate-300">
            <p>Operations agent drafted follow-up email</p>
            <p>Sales agent summarized lead notes</p>
          </div>
        </div>
      </div>
    ),
  },
  'ai-screenshot': {
    url: 'screenshot-assistant.app',
    render: () => (
      <div className="grid min-h-[220px] gap-3 bg-[#0c0f14] p-3 sm:min-h-[280px] sm:grid-cols-2 sm:p-4">
        <div className="rounded border border-white/8 bg-[#080b10] p-2">
          <p className="text-[10px] text-slate-500">Uploaded chart</p>
          <div className="mt-2 h-28 rounded bg-[#131722]" />
        </div>
        <div className="rounded border border-white/8 bg-[#080b10] p-2">
          <p className="text-[10px] text-slate-500">Extracted notes</p>
          <div className="mt-2 space-y-1 text-[11px] text-slate-300">
            <p>Pair: XAUUSD</p>
            <p>Setup: pullback long</p>
            <p>Risk: 1R below swing low</p>
          </div>
        </div>
      </div>
    ),
  },
  'booking-chat': {
    url: 'resort-booking.demo',
    render: () => (
      <div className="min-h-[220px] bg-[#0c0f14] p-3 sm:min-h-[280px] sm:p-4">
        <p className="text-sm font-medium text-white">Resort Booking Assistant</p>
        <div className="mt-4 space-y-3">
          <div className="max-w-[80%] rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-[11px] text-slate-300">
            Do you have ocean-view rooms available next weekend?
          </div>
          <div className="ml-auto max-w-[85%] rounded-lg border border-white/8 bg-[#151a22] px-3 py-2 text-[11px] text-slate-200">
            Yes — 2 ocean-view suites are open. I can hold one and send booking
            details.
          </div>
        </div>
      </div>
    ),
  },
}

import type { PreviewType } from '../data/projects';

interface ProjectScreenshotProps {
  type?: PreviewType;
  imageSrc?: string;
  className?: string;
  large?: boolean;
}

export default function ProjectScreenshot({
  type = 'saas-dashboard',
  imageSrc,
  className = '',
  large = false,
}: ProjectScreenshotProps) {
  const preview = previewContent[type] ?? previewContent['saas-dashboard']

  return (
    <div
      className={[
        'overflow-hidden rounded-lg border border-white/10 bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.45)]',
        large ? 'shadow-[0_28px_70px_rgba(0,0,0,0.55)]' : '',
        className,
      ].join(' ')}
    >
      <div className="flex items-center gap-2 border-b border-white/8 bg-[#111] px-3 py-2.5 sm:px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate text-[10px] text-slate-500 sm:text-[11px]">
          {preview.url}
        </span>
      </div>
      <div className={large ? 'min-h-[280px] sm:min-h-[340px]' : ''}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full object-cover object-top"
          />
        ) : (
          preview.render()
        )}
      </div>
    </div>
  )
}

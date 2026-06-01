import { toolVisuals } from '../data/toolVisuals'

export function ToolLogo({ name }) {
  const visual = toolVisuals[name]

  if (!visual) {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/12 bg-cyan-300/8 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
        {name.slice(0, 2)}
      </span>
    )
  }

  if (visual.kind === 'image') {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/12 bg-cyan-300/8">
        <img alt="" className="h-4 w-4 object-contain" src={visual.src} />
      </span>
    )
  }

  if (visual.kind === 'icon') {
    const Icon = visual.icon

    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/12 bg-cyan-300/8 text-cyan-100">
        <Icon className="h-4 w-4" />
      </span>
    )
  }

  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/12 bg-cyan-300/8 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
      {visual.label}
    </span>
  )
}

export function StackBadge({ name, label = name }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/12 bg-cyan-400/6 px-3 py-1.5 text-[11px] font-medium text-cyan-100">
      <ToolLogo name={name} />
      {label}
    </span>
  )
}

export function BannerToolBadge({ name }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/12 bg-[#0a1824]/88 px-3 py-2 text-[11px] font-medium text-cyan-50 shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur">
      <span className="scale-[0.85]">
        <ToolLogo name={name} />
      </span>
      {name}
    </span>
  )
}

export function ToolTile({ name }) {
  return (
    <div className="rounded-[1.35rem] border border-cyan-400/10 bg-[#07131d] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.22)]">
      <div className="flex items-center gap-3">
        <ToolLogo name={name} />
        <span className="text-sm font-medium text-white">{name}</span>
      </div>
    </div>
  )
}

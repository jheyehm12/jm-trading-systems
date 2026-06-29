import { ArrowRight, GitBranch, Play } from 'lucide-react';

interface ProjectActionButtonsProps {
  demoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const linkClass =
  'inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] transition-colors';

export default function ProjectActionButtons({
  demoUrl,
  liveUrl,
  githubUrl,
  className = 'mt-6 flex flex-wrap gap-3',
}: ProjectActionButtonsProps) {
  return (
    <div className={className}>
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className={`${linkClass} text-accent-blue hover:opacity-80`}
        >
          Live Demo <ArrowRight size={14} />
        </a>
      ) : null}
      {githubUrl ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className={`${linkClass} text-body-muted hover:text-accent-blue`}
        >
          <GitBranch size={14} />
          GitHub
        </a>
      ) : null}
      {demoUrl ? (
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className={`${linkClass} text-body-muted hover:text-accent-blue`}
        >
          <Play size={14} />
          ▶ Watch Demo
        </a>
      ) : null}
    </div>
  );
}

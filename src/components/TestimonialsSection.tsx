import { MotionConfig, motion } from 'framer-motion';
import { Star } from 'lucide-react';

import { fadeUpTransition, inViewViewport } from './motion';

interface Testimonial {
  quote: string;
  role: string;
  source: string;
  rating: number;
}

interface TestimonialsSectionProps {
  items: Testimonial[];
}

export default function TestimonialsSection({
  items,
}: TestimonialsSectionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="bg-section-dark py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewViewport}
            transition={fadeUpTransition}
          >
            <p className="font-display text-[11px] uppercase tracking-[0.24em] text-accent-blue">
              Client Feedback
            </p>
            <h2 className="mt-4 font-display text-[1.75rem] font-bold text-heading sm:mt-5 sm:text-[2.2rem] lg:text-[2.8rem]">
              Upwork reviews.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {items.map((item, index) => (
              <motion.blockquote
                key={item.role}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewViewport}
                transition={{ ...fadeUpTransition, delay: index * 0.08 }}
                className="border-t border-theme pt-6"
              >
                <div className="flex gap-0.5 text-accent-blue">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-body-muted">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="text-sm text-body-strong">{item.role}</p>
                  <p className="mt-1 text-xs text-body-soft">{item.source}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

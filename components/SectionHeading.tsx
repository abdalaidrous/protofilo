import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <motion.span
        className="tagline"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.25 }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.35 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

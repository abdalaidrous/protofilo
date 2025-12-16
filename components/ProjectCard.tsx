import { motion } from 'framer-motion';
import { ArrowUpRight } from 'phosphor-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="card-underline" aria-hidden />
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem' }}>
        <h3 style={{ margin: 0 }}>{project.title}</h3>
        {project.link && (
          <a className="btn secondary" href={project.link} target="_blank" rel="noreferrer">
            Visit <ArrowUpRight size={16} />
          </a>
        )}
      </div>
      <p style={{ marginTop: '0.4rem' }}>{project.description}</p>
      <div className="tag-list">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

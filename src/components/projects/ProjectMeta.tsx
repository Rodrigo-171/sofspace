import { CATEGORY_LABELS } from "@/types/project";
import type { Project } from "@/types/project";

interface ProjectMetaProps {
  project: Project;
}

const FIELDS: { label: string; value: (project: Project) => string }[] = [
  { label: "Categoria", value: (p) => CATEGORY_LABELS[p.category] },
  { label: "Localização", value: (p) => p.location },
  { label: "Ano", value: (p) => p.year },
  { label: "Área", value: (p) => p.area },
];

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
      {FIELDS.map((field) => (
        <div key={field.label} className="flex flex-col gap-2">
          <dt className="text-xs tracking-[0.18em] text-[var(--color-ink-faint)]">
            {field.label.toUpperCase()}
          </dt>
          <dd className="text-sm text-[var(--color-ink-soft)] sm:text-base">{field.value(project)}</dd>
        </div>
      ))}
    </dl>
  );
}

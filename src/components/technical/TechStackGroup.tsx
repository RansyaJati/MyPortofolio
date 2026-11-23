import type { TechItem } from "@/types/content";

type TechStackGroupProps = {
  label: string;
  items: TechItem[];
  placeholder: string;
};

export function TechStackGroup({
  label,
  items,
  placeholder,
}: TechStackGroupProps) {
  return (
    <div className="border-t border-border pt-5">
      <h4 className="text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </h4>
      {items.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item.name}
              className="rounded-sm border border-border px-2.5 py-1.5 text-sm text-fg"
            >
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {placeholder}
        </p>
      )}
    </div>
  );
}

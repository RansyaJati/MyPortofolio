export function Profile() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.5fr)] lg:gap-16">
      <div>
        <h3 className="text-xs uppercase tracking-[0.24em] text-muted">
          Profile
        </h3>
        <p className="mt-6 max-w-2xl font-heading text-2xl font-medium leading-snug tracking-[-0.02em] text-fg sm:text-3xl">
          [ADD PROFILE SUMMARY]
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          [ADD SHORT BIOGRAPHY — focus, interests, and relevant education if
          applicable.]
        </p>
      </div>

      <dl className="grid gap-6 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
        <div>
          <dt className="text-xs uppercase tracking-[0.2em] text-muted">
            Focus
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-fg">
            [ADD FOCUS AREAS]
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.2em] text-muted">
            Education
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-fg">
            [ADD EDUCATION IF RELEVANT]
          </dd>
        </div>
      </dl>
    </div>
  );
}

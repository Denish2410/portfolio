import type { Metadata } from 'next';

import CaseTable from '@/components/CaseTable';
import { projects, upcoming } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Case files',
  description: 'Personal projects, full stack products and hackathon builds, each with its own case file.',
};

export default function Work() {
  return (
    <div className="wrap">
      <header className="page-head">
        <h1 className="page-title">Case files</h1>
        <p className="lede">
          {projects.length} projects, newest first. Open a file for how it fits together, what I did and the stack.
        </p>
      </header>
      <section style={{ paddingBottom: 'clamp(3rem, 8vw, 6rem)' }} aria-label="All case files">
        <CaseTable />
      </section>
      <section style={{ paddingBottom: 'clamp(3rem, 8vw, 6rem)' }} aria-labelledby="upcoming">
        <div className="section-head">
          <h2 id="upcoming">Working on</h2>
          <p className="muted">Ideas in progress. Case files will follow.</p>
        </div>
        <ul className="record">
          {upcoming.map((u) => (
            <li key={u.name}>
              <strong>{u.name}</strong>
              <span className="muted">{u.note}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

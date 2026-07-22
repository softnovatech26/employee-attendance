import React from 'react';

// Card data — edit title/description here to add, remove, or update cards
const features = [
  {
    title: 'Live Tracking',
    description:
      'Employees attendance runs in real-time with start/stop timer.',
  },
  {
    title: '5 Hour Limit',
    description:
      'Auto monitoring system with time restriction and alerts.',
  },
  {
    title: 'Admin Dashboard',
    description: 'Full analytics, Excel export and employee control panel.',
  },
];

export default function FeatureCards() {
  return (
    <section className="w-full px-6 py-16 sm:px-10">
      <div className="mx-auto grid w-full max-w-8xl grid-cols-1 gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-3 text-xl font-bold text-red-500">
              {feature.title}
            </h3>
            <p className="text-base leading-relaxed text-zinc-400">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";

type Subcategory = {
  name: string;
  image: string;
  details: { label: string; value: string }[];
  locations?: string[];
};

type Category = {
  id: string;
  label: string;
  subcategories: Subcategory[];
};

const DREAMSPACES_DATA: Category[] = [
  {
    id: "3d-hoardings",
    label: "3D Hoardings",
    subcategories: [
      {
        name: "GT Central",
        image: "gtcentral 1.1.png",
        details: [
          { label: "Display type", value: "2D & 3D" },
          { label: "Footfall", value: "60,000+/Day" },
          { label: "Location", value: "GT Central Mall, Malviya Nagar, Jaipur" },
        ],
      },
      {
        name: "Ridhi Sidhi Mall",
        image: "riddhisiddhi1.2.png",
        details: [
          { label: "Display type", value: "2D & 3D" },
          { label: "Footfall", value: "1,20,000+/Day" },
          { label: "Location", value: "Ridhi Sidhi Circle, Surya Nagar, Gopal Pura Mode, Jaipur" },
        ],
      },
    ],
  },
  {
    id: "unipoles",
    label: "Unipoles",
    subcategories: [
      {
        name: "MI Road Stretch",
        image: "miroad2.1.png",
        details: [
          { label: "Length of stretch", value: "~2.8 km" },
          { label: "Display type", value: "2D LED & 3D LED" },
          { label: "Number of screens", value: "5" },
        ],
        locations: [
          "MI Road – Ajmeri Gate",
          "MI Road – New Gate Circle",
          "MI Road – Opp Sarojini Mansion",
          "JLN Marg Corridor",
          "Ram Bagh Circle",
        ],
      },
      {
        name: "JLN Marg Corridor",
        image: "jlmnarg2.2.png",
        details: [
          { label: "Length of stretch", value: "~7.5 km" },
          { label: "Display type", value: "2D LED & 3D LED" },
          { label: "Number of screens", value: "6" },
        ],
        locations: [
          "JLN Marg – Trimurti Crossing",
          "JLN Marg – Moti Dungri Crossing",
          "JLN Marg – Birla Mandir Crossing",
          "JLN Marg – Near Rajasthan University",
          "JLN Marg – OTS Crossing",
          "JLN Marg – Near Hotel Clarks",
          "JLN Marg – SMS Hospital to Maharaja College",
        ],
      },
      {
        name: "Ram Bagh Circle",
        image: "jlmnarg2.2.png",
        details: [],
        locations: [],
      },
    ],
  },
];

const TAGLINE =
  "Prime locations. Maximum visibility. Infinite flexibility. EVA screens command attention where it matters most. From local shops to global brands, every play becomes lasting impact.";

export function DreamspacesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState("3d-hoardings");
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const activeCategory = DREAMSPACES_DATA.find((c) => c.id === activeCategoryId) ?? DREAMSPACES_DATA[0];
  const activeSub = activeCategory.subcategories[activeSubIndex] ?? activeCategory.subcategories[0];

  return (
    <section className="py-16 md:py-24 bg-slate-100 dark:bg-surface-dark" id="dreamspaces">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          {/* Left: content */}
          <div className="flex-1 order-2 lg:order-1 flex flex-col justify-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4 leading-tight">
              Lighting Up Jaipur.
              <br />
              Your Digital Dreamspaces.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg mb-8 max-w-xl">
              {TAGLINE}
            </p>

            {/* Tabs */}
            <div className="flex gap-0 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-200/50 dark:bg-white/5 p-1 w-fit mb-8">
              {DREAMSPACES_DATA.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategoryId(cat.id);
                    setActiveSubIndex(0);
                  }}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    activeCategoryId === cat.id
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Subcategory list + details */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {activeCategory.subcategories.map((sub, i) => (
                  <button
                    key={sub.name}
                    type="button"
                    onClick={() => setActiveSubIndex(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                      activeSubIndex === i
                        ? "bg-primary text-white"
                        : "bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/20"
                    }`}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-4">
                  {activeSub.name}
                </h3>
                {activeSub.details.length > 0 ? (
                  <dl className="space-y-3">
                    {activeSub.details.map((d) => (
                      <div key={d.label} className="flex flex-wrap gap-x-2 text-sm">
                        <dt className="text-slate-500 dark:text-slate-400">{d.label}</dt>
                        <span className="text-slate-500 dark:text-slate-400">:</span>
                        <dd className="text-slate-800 dark:text-white font-medium">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Details coming soon.</p>
                )}
                {activeSub.locations && activeSub.locations.length > 0 && (
                  <ul className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                    {activeSub.locations.map((loc) => (
                      <li key={loc}>• {loc}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Right: image changes by category + subcategory */}
          <div className="flex-1 order-1 lg:order-2 flex flex-col items-center justify-center min-h-[320px] lg:min-h-[420px]">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-200 dark:bg-white/5">
              <img
                key={`${activeCategoryId}-${activeSubIndex}`}
                src={`/images/${encodeURIComponent(activeSub.image)}`}
                alt={activeSub.name}
                className="w-full h-full object-cover object-center transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

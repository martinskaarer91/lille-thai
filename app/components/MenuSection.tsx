"use client";

import { useState } from "react";
import { menu } from "../data/menu";
import Callbtn from "./callbtn";

type Mode = "dineIn" | "takeaway";

export default function MenuSection() {
  const [mode, setMode] = useState<Mode>("dineIn");

  const showItem = (item: any) => mode === "dineIn" || item.takeaway;

  return (
    <section className="bg-brand px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="mb-6 text-4xl font-bold">Meny</h2>

          <div className="inline-flex rounded-xl border border-white/15 bg-white/5 p-1">
            <button
              onClick={() => setMode("dineIn")}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition ${
                mode === "dineIn"
                  ? "bg-white text-brand"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Spis her
            </button>

            <button
              onClick={() => setMode("takeaway")}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition ${
                mode === "takeaway"
                  ? "bg-white text-brand"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Takeaway
            </button>
          </div>
        </div>

        <div className="space-y-16">
          {menu.map((section: any) => (
            <div key={section.category}>
              <h3 className="mb-4 text-3xl font-bold">{section.category}</h3>

              {section.note && (
                <p className="mb-8 text-white/70">{section.note}</p>
              )}

              {section.items && (
                <div className="space-y-6">
                  {section.items.filter(showItem).map((item: any) => (
                    <MenuItem key={item.number} item={item} mode={mode} />
                  ))}
                </div>
              )}

              {section.subcategories && (
                <div className="space-y-12">
                  {section.subcategories.map((subcategory: any) => {
                    const items = subcategory.items.filter(showItem);

                    if (items.length === 0) return null;

                    return (
                      <div key={subcategory.title}>
                        <h4 className="mb-6 text-2xl font-semibold">
                          {subcategory.title}
                        </h4>

                        <div className="space-y-6">
                          {items.map((item: any) => (
                            <MenuItem
                              key={item.number}
                              item={item}
                              mode={mode}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Callbtn/>
    </section>
  );
}

function MenuItem({ item, mode }: any) {
  const price =
    mode === "takeaway" ? item.price.takeaway : item.price.dineIn;

  if (!price) return null;

  return (
    <div className="border-b border-white/10 pb-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h5 className="text-lg font-semibold">
            {item.number}. {item.name}
          </h5>

          {item.desc && (
            <p className="mt-1 leading-relaxed text-white/70">
              {item.desc}
            </p>
          )}
        </div>

        <p className="whitespace-nowrap text-lg font-bold">{price}</p>
      </div>
    </div>
  );
}
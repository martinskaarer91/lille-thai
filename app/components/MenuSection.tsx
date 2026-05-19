"use client";

import { useState } from "react";
import { menu } from "../data/menu";
import Callbtn from "./callbtn";

export default function MenuSection() {
  const [mode, setMode] = useState("dineIn");

  return (
    <section className="bg-brand text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Meny</h2>

          <div className="inline-flex rounded-xl border border-white/15 bg-white/5 p-1">
            <button
              onClick={() => setMode("dineIn")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
                mode === "dineIn"
                  ? " bg-white text-brand"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Spis her
            </button>

            <button
              onClick={() => setMode("takeaway")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
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
          {menu.map((section) => {
            const hasItems =
              section.items &&
              section.items.some(
                (item) => mode === "dineIn" || item.takeaway
              );

            const hasSubItems =
              section.subcategories &&
              section.subcategories.some((subcategory) =>
                subcategory.items.some(
                  (item) => mode === "dineIn" || item.takeaway
                )
              );

            if (!hasItems && !hasSubItems) return null;

            return (
              <div key={section.category}>
                <h3 className="text-3xl font-bold mb-4">{section.category}</h3>

                {section.note && (
                  <p className="text-white/70 mb-8">{section.note}</p>
                )}

                {section.items && (
                  <div className="space-y-6">
                    {section.items
                      .filter((item) => mode === "dineIn" || item.takeaway)
                      .map((item) => (
                        <MenuItem key={item.number} item={item} mode={mode} />
                      ))}
                  </div>
                )}

                {section.subcategories && (
                  <div className="space-y-12">
                    {section.subcategories.map((subcategory) => {
                      const filteredItems = subcategory.items.filter(
                        (item) => mode === "dineIn" || item.takeaway
                      );

                      if (filteredItems.length === 0) return null;

                      return (
                        <div key={subcategory.title}>
                          <h4 className="text-2xl font-semibold mb-6">
                            {subcategory.title}
                          </h4>

                          <div className="space-y-6">
                            {filteredItems.map((item) => (
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
            );
          })}
        </div>
      </div>
      <Callbtn/>
    </section>
    
  );
}

function MenuItem({ item, mode }) {
  const price =
    mode === "takeaway" ? item.price.takeaway : item.price.dineIn;

  return (
    <div className="border-b border-white/10 pb-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h5 className="text-lg font-semibold">
            {item.number}. {item.name}
          </h5>

          {item.desc && (
            <p className="text-white/70 mt-1 leading-relaxed">{item.desc}</p>
          )}
        </div>

        <p className="text-lg font-bold whitespace-nowrap">{price}</p>
      </div>
    </div>
  );
}
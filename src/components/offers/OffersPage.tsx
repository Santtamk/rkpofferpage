"use client";

import { useRef, useState } from "react";
import { offerCategories, type OfferCategory } from "@/data/offers";
import { AmbientLetters } from "./AmbientLetters";
import { CampaignBanner } from "./CampaignBanner";
import { OfferCard } from "./OfferCard";

export function OffersPage() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<OfferCategory | null>(null);
  function selectCategory(category: OfferCategory) {
    setSelected(category);
    dialog.current?.showModal();
  }
  return (
    <main className="relative isolate mx-auto min-h-svh w-full max-w-[1000px] [container-type:inline-size]">
      <AmbientLetters />
      <div className="relative z-10 px-[6%] pt-[7%] pb-[15%] min-[600px]:px-[8%] min-[600px]:pb-[12%] min-[900px]:px-[9.5%] min-[900px]:pt-[9.5%] min-[900px]:pb-[19.66%]">
        <CampaignBanner />
        <section aria-label="अपनी पसंद से जुड़ें" className="grid grid-cols-1 gap-6 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 min-[900px]:gap-[3.56cqw]">
          {offerCategories.map(category => <OfferCard key={category.id} category={category} onSelect={selectCategory} />)}
        </section>
      </div>
      <dialog ref={dialog} className="fixed inset-0 m-auto w-[min(420px,calc(100%-40px))] rounded-2xl border border-[#f2dfcc] bg-[#fffdfb] p-[30px] text-center text-[#591416] backdrop:bg-[#2d140a]/35 backdrop:backdrop-blur-sm" aria-labelledby="category-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <button className="absolute top-2 right-3 size-11 cursor-pointer border-0 bg-transparent text-3xl focus-visible:outline-2 focus-visible:outline-[#bc0005]" aria-label="बंद करें" onClick={() => dialog.current?.close()}>×</button>
        {selected && <img className="mx-auto block" src={selected.artwork} alt="" width={160} height={127} />}
        <h2 className="mt-1 mb-3 text-2xl font-bold" id="category-title">{selected?.label}</h2>
        <p className="my-4 text-base">इस श्रेणी की पुस्तकें जल्द उपलब्ध होंगी।</p>
        <a className="mt-2.5 inline-block rounded-3xl bg-[#bc0005] px-5 pt-3 pb-2 text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bc0005]" href="https://www.rajkamalprakashan.com/collections" target="_blank" rel="noreferrer">सभी संग्रह देखें <span aria-hidden="true">↗</span></a>
      </dialog>
    </main>
  );
}

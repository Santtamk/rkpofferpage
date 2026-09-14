import type { OfferCategory } from "@/data/offers";

type Props = { category: OfferCategory; onSelect: (category: OfferCategory) => void };

export function OfferCard({ category, onSelect }: Props) {
  const cardClass = "group relative flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-[14px] border border-[#f2dfcc] bg-linear-135 from-white/22 to-[#fff7ed]/12 p-0 text-left text-[#591416] no-underline shadow-[inset_0_1px_0_#ffffffd9,0_5px_18px_#6e330d08] backdrop-blur-2xl backdrop-saturate-150 transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#bc0005] motion-reduce:transition-none min-[600px]:rounded-[1.695cqw]";
  const content = <>
    <span aria-hidden="true" className="pointer-events-none absolute -inset-8 z-0 rounded-full bg-[radial-gradient(circle,#ff9c1b99,transparent_70%)] opacity-0 mix-blend-multiply blur-2xl transition-opacity duration-500 group-hover:opacity-60 group-hover:[animation:card-glow-drift_3s_ease-in-out_infinite] motion-reduce:group-hover:[animation:none]" />
    <span className="relative z-10 block aspect-[1.5] w-full bg-linear-135 from-white/22 to-[#fff7ed]/12 backdrop-blur-2xl backdrop-saturate-150 min-[600px]:aspect-[144/117]"><img className="absolute inset-0 block h-full w-full object-contain transition-[filter] duration-300 group-hover:[filter:brightness(1.25)_drop-shadow(0_0_10px_#ffffffb3)]" src={category.artwork} alt="" width={160} height={127} /></span>
    <span className="relative z-10 flex min-h-[58px] items-center justify-between gap-2 border-t border-dashed border-[#f2dfcc] px-[18px] pt-3 pb-2 text-[clamp(17.1px,4.7025vw,22.23px)] leading-[1.45] font-[450] min-[600px]:min-h-[54px] min-[600px]:px-3.5 min-[600px]:text-[18.81px] min-[900px]:min-h-[6.1cqw] min-[900px]:px-[1.5cqw] min-[900px]:pt-[.7cqw] min-[900px]:pb-[.3cqw] min-[900px]:text-[2.608cqw]"><span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">{category.label}</span><svg className="aspect-square size-[30px] shrink-0 grow-0 basis-[30px] min-[600px]:size-[27.6px] min-[600px]:basis-[27.6px] min-[900px]:size-[3.51cqw] min-[900px]:basis-[3.51cqw]" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <circle cx="12.5" cy="12.5" r="9" className="fill-none stroke-[#c60006] transition-[fill,stroke-opacity] duration-200 group-hover:fill-[#c60006] group-hover:stroke-[#c60006]/0" />
      <path d="M12.9198 17L12.1327 16.1415L14.8659 13.127H8V11.873H14.8659L12.1327 8.86334L12.9198 8L17 12.5L12.9198 17Z" className="fill-[#c60006] transition-colors duration-200 group-hover:fill-[#fff7ed]" />
    </svg></span>
  </>;
  return category.href
    ? <a className={cardClass} data-offer-card href={category.href}>{content}</a>
    : <button className={cardClass} data-offer-card type="button" onClick={() => onSelect(category)} aria-haspopup="dialog">{content}</button>;
}

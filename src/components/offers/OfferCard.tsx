import type { OfferCategory } from "@/data/offers";

type Props = { category: OfferCategory; onSelect: (category: OfferCategory) => void };

export function OfferCard({ category, onSelect }: Props) {
  const cardClass = "flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-[14px] border border-[#f2dfcc] bg-linear-135 from-white/40 to-[#fff7ed]/22 p-0 text-left text-[#591416] no-underline shadow-[inset_0_1px_0_#ffffffd9,0_5px_18px_#6e330d08] backdrop-blur-xl backdrop-saturate-125 transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#bc0005] motion-reduce:transition-none min-[600px]:rounded-[1.695cqw]";
  const content = <>
    <span className="relative block aspect-[1.5] w-full min-[600px]:aspect-[144/117]"><img className="absolute inset-y-0 left-1/2 block h-full w-full max-w-none -translate-x-1/2 object-contain min-[600px]:w-[110.35%] min-[600px]:object-fill" src={category.artwork} alt="" width={160} height={127} /></span>
    <span className="flex min-h-[58px] items-center justify-between gap-2 border-t border-dashed border-[#f2dfcc] px-[18px] pt-3 pb-2 text-[clamp(20px,5.5vw,26px)] leading-[1.45] font-[450] whitespace-nowrap min-[600px]:min-h-[54px] min-[600px]:px-3.5 min-[600px]:text-[22px] min-[900px]:min-h-[6.1cqw] min-[900px]:px-[1.5cqw] min-[900px]:pt-[.7cqw] min-[900px]:pb-[.3cqw] min-[900px]:text-[3.05cqw]"><span>{category.label}</span><svg className="size-[26px] shrink-0 text-[#bc0005] min-[600px]:size-6 min-[900px]:size-[3.05cqw]" viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="9" fill="currentColor" /><path d="M5 9h8M9 5l4 4-4 4" fill="none" stroke="#fff7ed" strokeWidth="1.3" /></svg></span>
  </>;
  return category.href
    ? <a className={cardClass} data-offer-card href={category.href}>{content}</a>
    : <button className={cardClass} data-offer-card type="button" onClick={() => onSelect(category)} aria-haspopup="dialog">{content}</button>;
}

import { campaign } from "@/data/offers";

export function CampaignBanner() {
  return (
    <header className="relative z-10 mb-7 min-[600px]:mb-[6.71%] min-[1100px]:mb-[67px] min-[1100px]:w-screen min-[1100px]:ml-[calc(50%-50vw)]">
      <h1 className="sr-only">{campaign.title}</h1>
      <div className="min-[1100px]:mx-auto min-[1100px]:max-w-[1320px] min-[1100px]:px-8">
        <img className="block h-auto w-full rounded-[1.7cqw] border border-[#f2dfcc] min-[1100px]:rounded-2xl" src={campaign.banner} alt={campaign.bannerAlt} width={4416} height={2018} fetchPriority="high" />
      </div>
    </header>
  );
}

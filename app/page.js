import Banner from "@/components/Banner";
import FirstLayout from "@/components/FirstLayout";
import TabSlider from "@/components/TabSlider";
import PageStats from "@/components/PageStats";
import {
  GetRecentUpdateComic,
  GetNewComic,
  GetCompleteComic,
  GetComingSoonComic,
} from "@/lib/comic";

import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TabSliderSkeleton from "@/components/TabSliderSkeleton";
import { Suspense } from "react";
import FirstLayoutSkeleton from "@/components/FirstLayoutSkeleton";

async function LoadSlider() {
  const recentUpdateComic = await GetRecentUpdateComic(1);
  const newComic = await GetNewComic(1);
  const completeComic = await GetCompleteComic(1);
  const comingSoonComic = await GetComingSoonComic(1);

  return (
    <TabSlider
      recentUpdateComic={recentUpdateComic}
      newComic={newComic}
      completeComic={completeComic}
      comingSoonComic={comingSoonComic}
    />
  );
}

export default function HomePage() {
  return (
    <SkeletonTheme baseColor="#eee" highlightColor="#f5f5f5">
      <Banner />
      <Suspense fallback={<FirstLayoutSkeleton />}>
        <FirstLayout />
      </Suspense>
      <Suspense fallback={<TabSliderSkeleton comics={16} />}>
        <LoadSlider />
      </Suspense>
      <PageStats />
    </SkeletonTheme>
  );
}

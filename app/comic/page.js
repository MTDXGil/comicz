import ComicBlockList from "@/components/ComicBlockList";
import Loading from "@/components/Loading";
import {
  GetCompleteComic,
  GetNewComic,
  GetRecentUpdateComic,
  GetComingSoonComic,
} from "@/lib/comic";
import { Suspense } from "react";

async function LoadComicPage() {
  const recentUpdateComic = await GetRecentUpdateComic(1);
  const newComic = await GetNewComic(1);
  const completeComic = await GetCompleteComic(1);
  const comingSoonComic = await GetComingSoonComic(1);

  return (
    <div className="comic-block-container">
      <ComicBlockList
        title="Truyện mới cập nhật"
        comics={recentUpdateComic}
        viewAllSlug={"recent"}
      />
      <ComicBlockList
        title="Truyện mới ra mắt"
        comics={newComic}
        viewAllSlug={"new"}
      />
      <ComicBlockList
        title="Truyện đã hoàn thành"
        comics={completeComic}
        viewAllSlug={"complete"}
      />
      <ComicBlockList
        title="Truyện sắp ra mắt"
        comics={comingSoonComic}
        viewAllSlug={"comingsoon"}
      />
    </div>
  );
}

export default function ComicPage() {
  return (
    <Suspense fallback={<Loading />}>
      <LoadComicPage />
    </Suspense>
  );
}

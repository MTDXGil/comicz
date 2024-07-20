import ComicFullList from "@/components/ComicFullList";
import Loading from "@/components/Loading";
import {
  GetComingSoonComic,
  GetCompleteComic,
  GetNewComic,
  GetRecentUpdateComic,
} from "@/lib/comic";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function LoadViewAllPage({ viewAllSlug }) {
  let title = "Tất cả ";
  let comics;

  switch (viewAllSlug) {
    // Comic Page
    case "recent":
      title += "truyện mới cập nhật";
      comics = await GetRecentUpdateComic(1);
      break;
    case "new":
      title += "truyện mới ra mắt";
      comics = await GetNewComic(1);
      break;
    case "complete":
      title += "truyện đã hoàn thành";
      comics = await GetCompleteComic(1);
      break;
    case "comingsoon":
      title += "truyện sắp ra mắt";
      comics = await GetComingSoonComic(1);
      break;
    default:
      break;
  }

  if (comics) return <ComicFullList title={title} comics={comics} />;
  else return notFound();
}

export default function ViewAllPage({ params }) {
  return (
    <Suspense fallback={<Loading />}>
      <LoadViewAllPage viewAllSlug={params.viewAllSlug} />
    </Suspense>
  );
}

import ComicBlockList from "@/components/ComicBlockList";
import ComicFullList from "@/components/ComicFullList";
import GenreComicSkeleton from "@/components/GenreComicSkeleton";
import Loading from "@/components/Loading";
import { GetGenreComic } from "@/lib/comic";
import { Suspense } from "react";

async function LoadGenrePage() {
  const allGenreComic = await GetGenreComic("all", 1);

  return (
    <ComicFullList
      title="Tất cả thể loại"
      comics={allGenreComic}
      hasGenreFilter
    />
  );
}

export default function GenrePage() {
  return (
    <Suspense fallback={<GenreComicSkeleton />}>
      <LoadGenrePage />
    </Suspense>
  );
}

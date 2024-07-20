import ComicFullList from "@/components/ComicFullList";
import GenreComicSkeleton from "@/components/GenreComicSkeleton";
import { GetGenreComic } from "@/lib/comic";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function LoadGenreSelectPage({ genreSlug }) {
  const genreComics = await GetGenreComic(1, genreSlug);

  if (!genreComics.titlePage) return notFound();

  return (
    <ComicFullList
      title={`Tất cả thể loại ${genreComics.titlePage}`}
      comics={genreComics}
      hasGenreFilter
    />
  );
}

export default function GenreSelectPage({ params }) {
  return (
    <Suspense fallback={<GenreComicSkeleton />}>
      <LoadGenreSelectPage genreSlug={params.genreSlug} />
    </Suspense>
  );
}

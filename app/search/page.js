import ComicFullList from "@/components/ComicFullList";
import Loading from "@/components/Loading";
import { GetSearchComic } from "@/lib/comic";
import { Suspense } from "react";

async function LoadSearchPage({ keyword }) {
  const searchComic = await GetSearchComic(keyword);

  return (
    <ComicFullList
      title={searchComic.titlePage}
      comics={searchComic}
      noLoadMore
    />
  );
}

export default function SearchPage({ searchParams }) {
  return (
    <Suspense fallback={<Loading />}>
      <LoadSearchPage keyword={searchParams.keyword} />
    </Suspense>
  );
}

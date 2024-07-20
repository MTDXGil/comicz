import ComicDetail from "@/components/ComicDetail";
import ComicDetailSkeleton from "@/components/ComicDetailSkeleton";
import { Suspense } from "react";

export default function ComicDetailPage({ params }) {
  return (
    <Suspense fallback={<ComicDetailSkeleton />}>
      <ComicDetail comicSlug={params.comicSlug} />
    </Suspense>
  );
}

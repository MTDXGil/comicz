"use client";
import ComicFullList from "@/components/ComicFullList";
import Loading from "@/components/Loading";
import { GetComicInformation } from "@/lib/comic";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";

function LoadMyListPage() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const favoriteComics = useSelector((state) => state.user.favoriteComics);

  const [comics, setComics] = useState({ items: [] });

  useEffect(() => {
    async function revalidatePage() {
      if (isLogin) {
        setComics({
          items: await Promise.all(
            favoriteComics.map(async (favSlug) => {
              const comicInformation = await GetComicInformation(favSlug);
              return comicInformation.item;
            })
          ),
        });
      }
    }
    revalidatePage();
  }, [isLogin, favoriteComics]);

  return <ComicFullList title="Danh sách của tôi" comics={comics} noLoadMore />;
}

export default function MyListPage() {
  return (
    <Suspense fallback={<Loading />}>
      <LoadMyListPage />
    </Suspense>
  );
}

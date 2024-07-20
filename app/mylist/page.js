"use client";
import ComicFullList from "@/components/ComicFullList";
import Loading from "@/components/Loading";
import { checkAuthenticated, getUser } from "@/lib/auth";
import { GetComicInformation } from "@/lib/comic";
import { Suspense, useEffect, useState } from "react";

async function LoadMyListPage() {
  const [comics, setComics] = useState({ items: [] });

  useEffect(() => {
    async function revalidatePage() {
      const isAuthenticated = await checkAuthenticated();

      if (isAuthenticated) {
        const user = JSON.parse(await getUser());

        setComics({
          items: await Promise.all(
            user.favorites.map(async (favSlug) => {
              const comicInformation = await GetComicInformation(favSlug);
              return comicInformation.item;
            })
          ),
        });
      }
    }
    revalidatePage();
  }, []);

  return <ComicFullList title="Danh sách của tôi" comics={comics} noLoadMore />;
}

export default function MyListPage() {
  return (
    <Suspense fallback={<Loading />}>
      <LoadMyListPage />
    </Suspense>
  );
}

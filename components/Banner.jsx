"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { GetComicInformation } from "@/lib/comic";
import Skeleton from "react-loading-skeleton";
import bannerInformation from "@/app/bannerInformation.json";
import Link from "next/link";

export default function Banner() {
  const [comicTitle, setComicTitle] = useState("");
  const [comicDescription, setComicDescription] = useState("");
  const [comicSlug, setComicSlug] = useState("");

  useEffect(() => {
    const init = async () => {
      const M = await import("materialize-css");
      const elems = document.querySelector(".carousel");
      M.Carousel.init(elems, {
        duration: 200,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true,
        onCycleTo: async (el) => {
          const comicSlug = el.dataset.comicslug;
          const comicInformation = bannerInformation.find(
            (comic) => comic.comicSlug === comicSlug
          );
          setComicTitle(comicInformation.title);
          setComicDescription(comicInformation.description);
          setComicSlug(comicInformation.comicSlug);
        },
      });
    };
    init();
  }, []);

  return (
    <div className="banner">
      <div className="banner-information">
        <h1>{comicTitle || <Skeleton width={"70%"} />}</h1>
        <p>{comicDescription || <Skeleton count={4} />}</p>
        {comicTitle ? (
          <Link href={`/comic/${comicSlug}`} className="btn play-btn">
            Đọc truyện
          </Link>
        ) : (
          <Skeleton
            width={190}
            height={40}
            borderRadius={20}
            style={{ margin: "20px 0px" }}
          />
        )}
      </div>
      <div className="carousel">
        {bannerInformation.map((comic) => (
          <div
            key={comic.comicSlug}
            className="carousel-item"
            data-comicslug={comic.comicSlug}
          >
            <Image src={comic.thumbnail} alt={comic.title} fill />
          </div>
        ))}
      </div>
    </div>
  );
}

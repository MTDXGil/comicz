"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GetComicThumbnail } from "@/lib/comic";
import { capitalizeWords } from "@/app/util";

export default function ComicItem({ comic }) {
  return (
    <li className="comic-item">
      <Link href={`/comic/${comic.slug}`}>
        <Image
          src={GetComicThumbnail(comic.thumb_url)}
          alt={comic.name}
          fill={true}
          sizes="1x"
        />
      </Link>
      <Link href={`/comic/${comic.slug}`}>
        <h3>{capitalizeWords(comic.name)}</h3>
      </Link>
    </li>
  );
}

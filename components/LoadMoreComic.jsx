"use client";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import {
  GetComingSoonComic,
  GetCompleteComic,
  GetGenreComic,
  GetNewComic,
  GetRecentUpdateComic,
} from "@/lib/comic";
import ComicItem from "./ComicItem";
import { PulseLoader } from "react-spinners";

export default function LoadMoreComic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "100px" });
  const params = useParams();
  let GetComicFunction;
  const [comics, setComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const genreSlug = params.genreSlug;
  let [isFetching, setIsFetching] = useState(false);

  switch (params.viewAllSlug) {
    // Comic Page
    case "recent":
      GetComicFunction = GetRecentUpdateComic;
      break;
    case "new":
      GetComicFunction = GetNewComic;
      break;
    case "complete":
      GetComicFunction = GetCompleteComic;
      break;
    case "comingsoon":
      GetComicFunction = GetComingSoonComic;
      break;
    default:
      GetComicFunction = GetGenreComic;
      break;
  }

  useEffect(() => {
    async function GetMoreComic() {
      if (isInView && !isFetching) {
        setIsFetching(true);
        let newComicList;
        if (GetComicFunction.name === "GetGenreComic")
          newComicList = await GetComicFunction(
            genreSlug || "all",
            currentPage + 1
          );
        else newComicList = await GetComicFunction(currentPage + 1);
        setComics((prevValue) => [...prevValue, ...newComicList.items]);
        setCurrentPage((prevValue) => prevValue + 1);
        setTimeout(() => setIsFetching(false), 1000);
      }
    }
    GetMoreComic();
  }, [isInView, GetComicFunction, currentPage, genreSlug, isFetching]);

  return (
    <>
      {comics.map((comic) => (
        <ComicItem key={comic._id} comic={comic} />
      ))}
      <h1 className="fallback-h1" ref={ref}>
        <PulseLoader />
      </h1>
    </>
  );
}

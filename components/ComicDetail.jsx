import { capitalizeWords } from "@/app/util";
import SelectChapter from "@/components/SelectChapter";
import {
  GetComicInformation,
  GetComicThumbnail,
  GetGenreComic,
} from "@/lib/comic";
import Image from "next/image";
import Link from "next/link";
import FavoriteBtn from "./FavoriteBtn";
import ComicItem from "./ComicItem";
import Comment from "./Comment";

export default async function ComicDetail({ comicSlug }) {
  const comicInformation = await GetComicInformation(comicSlug);
  const comicCategory = comicInformation.item.category;
  const randomCategory =
    comicCategory[Math.floor(Math.random() * comicCategory.length)];
  const randomPage = Math.floor(Math.random() * 100);
  const recommendComic = await GetGenreComic(randomCategory.slug, randomPage);

  let totalChapter = 0;
  if (comicInformation.item.chapters[0]) {
    totalChapter = comicInformation.item.chapters[0].server_data.length;
  }

  let comicStatus = comicInformation.item.status;
  if (comicStatus === "ongoing") {
    comicStatus = "Đang Cập Nhật";
  } else if (comicStatus === "coming_soon") {
    comicStatus = "Sắp Ra Mắt";
  } else {
    comicStatus = "Đã Hoàn Thành";
  }

  return (
    <div className="comic-detail-wrapper">
      <div className="comic-detail">
        <div className="comic-detail-img-wrapper">
          <Image
            src={GetComicThumbnail(comicInformation.item.thumb_url)}
            alt={comicInformation.item.name}
            fill={true}
          />
        </div>
        <div className="detail-wrapper">
          <h1>{capitalizeWords(comicInformation.item.name)}</h1>
          <div className="small-detail-wrapper">
            <span>Tình trạng: {comicStatus}</span>
            <span>Số chapter: {totalChapter}</span>
            <span>
              Thể loại: {comicCategory.map((genre) => genre.name).join(", ")}
            </span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: comicInformation.item.content }}
          />
          <Link href={`${comicSlug}/1`} className="btn play-btn">
            Đọc truyện
          </Link>
          <FavoriteBtn comicSlug={comicSlug} />
        </div>
      </div>
      <SelectChapter comicSlug={comicSlug} totalChapter={totalChapter} />
      <Comment comicSlug={comicSlug} />
      <div className="recommend-comic">
        <h2>Có thể bạn sẽ thích</h2>
        <ul className="comic-block-list">
          {recommendComic.items.slice(0, 7).map((comic) => (
            <ComicItem key={comic._id} comic={comic} />
          ))}
        </ul>
      </div>
    </div>
  );
}

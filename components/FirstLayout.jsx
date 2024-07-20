import ComicItem from "@/components/ComicItem";
import SquareComicItem from "@/components/SquareComicItem";
import { GetNewComic } from "@/lib/comic";

export default async function FirstLayout() {
  const randomPage = Math.floor(Math.random() * 100);
  const randomPage2 = Math.floor(Math.random() * 928);
  const recommendComic = await GetNewComic(randomPage);
  const randomComic = await GetNewComic(randomPage2);

  return (
    <div className="first-layout">
      <div className="recommend-spotlight">
        <h2>Đề Xuất Cho Bạn</h2>
        <hr />
        <ul className="comic-list">
          {recommendComic.items.slice(0, 8).map((comic) => (
            <ComicItem key={comic._id} comic={comic} />
          ))}
        </ul>
      </div>
      <div className="random-now">
        <h2>5 Truyện Ngẫu Nhiên</h2>
        <hr />
        <ul className="random-comic-list">
          {randomComic.items.slice(0, 5).map((comic, index) => (
            <SquareComicItem key={comic._id} comic={comic} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

import Skeleton from "react-loading-skeleton";
import ComicItemSkeleton from "./ComicItemSkeleton";

export default function GenreComicSkeleton() {
  return (
    <div className="comic-full-list">
      <Skeleton width={300} height={36} />
      <div className="genre-list">
        {Array(54)
          .fill(0)
          .map((item, index) => (
            <Skeleton
              key={index}
              className="btn"
              width={100 + Math.floor(Math.random() * 30)}
              borderRadius={20}
            />
          ))}
      </div>
      <ul className="comic-block-list">
        {Array(16)
          .fill(0)
          .map((item, index) => (
            <li key={index} className="comic-item">
              <ComicItemSkeleton />
            </li>
          ))}
      </ul>
    </div>
  );
}

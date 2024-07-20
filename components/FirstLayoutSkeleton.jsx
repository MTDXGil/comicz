import Skeleton from "react-loading-skeleton";
import ComicItemSkeleton from "./ComicItemSkeleton";
import SquareComicItemSekelton from "./SquareComicItemSkeleton";

export default function FirstLayoutSkeleton() {
  return (
    <div className="first-layout">
      <div className="recommend-spotlight">
        <Skeleton width={260} height={30} />
        <Skeleton
          width={"97%"}
          height={5}
          style={{
            display: "block",
            margin: "20px 0px -70px",
          }}
        />
        <ul className="comic-list">
          {Array(8)
            .fill(0)
            .map((comic, index) => (
              <li key={index} className="comic-item">
                <ComicItemSkeleton />
              </li>
            ))}
        </ul>
      </div>
      <div className="random-now">
        <Skeleton width={170} height={30} />
        <Skeleton
          width={"97%"}
          height={5}
          style={{
            display: "block",
            margin: "20px 0px -70px",
          }}
        />
        <ul className="random-comic-list">
          {Array(5)
            .fill(0)
            .map((comic, index) => (
              <SquareComicItemSekelton key={index} />
            ))}
        </ul>
      </div>
    </div>
  );
}

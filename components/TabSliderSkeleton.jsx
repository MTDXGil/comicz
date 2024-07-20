import Skeleton from "react-loading-skeleton";
import ComicItemSkeleton from "./ComicItemSkeleton";

export default function TabSliderSkeleton({ comics }) {
  return (
    <div className="tabslider-skeleton-panel">
      <div className="tabslider-skeleton-tablist">
        <Skeleton width={130} height={35} />
        <Skeleton width={87} height={35} />
        <Skeleton width={93} height={35} />
        <Skeleton width={108} height={35} />
      </div>
      <div className="comic-list-skeleton">
        {Array(comics)
          .fill(0)
          .map((comicSkeleton, index) => (
            <li key={index} className="comic-item-skeleton">
              <ComicItemSkeleton />
            </li>
          ))}
      </div>
    </div>
  );
}

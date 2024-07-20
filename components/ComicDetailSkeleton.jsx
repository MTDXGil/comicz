import Skeleton from "react-loading-skeleton";
import ScrollToTop from "@/components/ScrollToTop";

export default function ComicDetailSkeleton() {
  return (
    <div className="comic-detail-wrapper">
      <ScrollToTop />
      <div className="comic-detail">
        <div className="comic-detail-img-wrapper">
          <Skeleton width={230} height={320} borderRadius={10} />
        </div>
        <div className="detail-wrapper">
          <Skeleton width={500} height={40} />
          <div className="small-detail-wrapper">
            <Skeleton width={200} />
            <Skeleton width={120} />
            <Skeleton width={400} />
          </div>
          <Skeleton count={3} />
          <div className="play-and-favorite-skeleton">
            <Skeleton width={150} height={40} borderRadius={20} />
            <Skeleton width={47} height={41} borderRadius={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

import Skeleton from "react-loading-skeleton";

export default function ComicItemSkeleton() {
  return (
    <>
      <div>
        <Skeleton width={200} height={270} borderRadius={10} />
      </div>
      <div>
        <Skeleton width={200} style={{ marginTop: "10px" }} />
      </div>
      <div className="comic-popularity-skeleton">
        <span>
          <Skeleton width={60} />
        </span>
        <span>
          <Skeleton width={60} />
        </span>
      </div>
    </>
  );
}

import Skeleton from "react-loading-skeleton";

export default function ComicItemSkeleton() {
  return (
    <>
      <div>
        <Skeleton className="comic-item-skeleton" borderRadius={10} />
      </div>
      <div>
        <Skeleton width={"100%"} style={{ marginTop: "10px" }} />
      </div>
    </>
  );
}

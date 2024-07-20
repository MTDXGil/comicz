import Skeleton from "react-loading-skeleton";

export default function ChapterSekeleton() {
  return (
    <div className="chapter-container">
      <Skeleton width={550} height={40} />
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Skeleton
          width={340}
          height={36}
          borderRadius={20}
          style={{ marginTop: "5px" }}
        />
      </div>
      <div className="chapter-image-list">
        <Skeleton width={688} height={974} />
      </div>
    </div>
  );
}

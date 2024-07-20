import Skeleton from "react-loading-skeleton";

export default function SquareComicItemSekelton() {
  return (
    <li className="comic-item-square">
      <Skeleton width={20} height={25} />
      <Skeleton
        width={120}
        height={120}
        borderRadius={10}
        style={{ marginLeft: "20px" }}
      />
      <div className="comic-information">
        <Skeleton width={200} height={25} />
      </div>
    </li>
  );
}

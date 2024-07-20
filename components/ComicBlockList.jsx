import Link from "next/link";
import ComicItem from "./ComicItem";

export default function ComicBlockList({ title, comics, viewAllSlug }) {
  return (
    <div>
      <div className="comic-block-wrapper">
        <h2>{title}</h2>
        <Link href={`/all/${viewAllSlug}`}>Xem tất cả</Link>
      </div>
      <ul className="comic-block-list">
        {comics.items.slice(0, 8).map((comic) => (
          <ComicItem key={comic._id} comic={comic} />
        ))}
      </ul>
    </div>
  );
}

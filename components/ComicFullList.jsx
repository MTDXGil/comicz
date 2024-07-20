import ComicItem from "./ComicItem";
import GenreBtnList from "./GenreBtnList";
import LoadMoreComic from "./LoadMoreComic";

export default function ComicFullList({
  title,
  comics,
  hasGenreFilter,
  noLoadMore,
}) {
  return (
    <div className="comic-full-list">
      <div>
        <h2>{title}</h2>
      </div>
      {hasGenreFilter && <GenreBtnList />}
      <ul className="comic-block-list">
        {comics.items.map((comic) => (
          <ComicItem key={comic._id} comic={comic} />
        ))}
        {!noLoadMore && <LoadMoreComic />}
      </ul>
    </div>
  );
}

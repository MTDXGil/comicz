import Link from "next/link";
import { GetChapterImage as GetGenreList } from "@/lib/comic";

export default async function GenreBtnList() {
  let genresBtnList = [];

  const genres = await GetGenreList("https://otruyenapi.com/v1/api/the-loai");
  genresBtnList = genres.items.map((genre) => (
    <Link key={genre._id} href={`/genre/${genre.slug}`} className="btn">
      {genre.name}
    </Link>
  ));

  return <div className="genre-list">{genresBtnList}</div>;
}

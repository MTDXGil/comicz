import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { GetComicThumbnail } from "@/lib/comic";
import { capitalizeWords } from "@/app/util";

export default function SquareComicItem({ comic, index }) {
  return (
    <li className="comic-item-square">
      <h3>{index + 1}</h3>
      <Link href={`/comic/${comic.slug}`} className="image-wrapper">
        <Image
          src={GetComicThumbnail(comic.thumb_url)}
          alt={comic.name}
          fill={true}
        />
      </Link>
      <div className="comic-information">
        <Link href={`/comic/${comic.slug}`}>
          <h3>{capitalizeWords(comic.name)}</h3>
        </Link>
      </div>
    </li>
  );
}

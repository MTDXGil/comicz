import Image from "next/image";
import defaultUser from "@/assets/defaultuser.png";
import { getComments } from "@/lib/auth";
import CommentInput from "./CommentInput";
import { Suspense } from "react";

async function LoadComment({ comicSlug }) {
  const comments = await getComments(comicSlug);

  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <li key={comment._id} className="comment-item">
          <div className="comment-image-wrapper">
            <Image src={defaultUser} alt="User Image" fill={true} />
          </div>
          <div className="comment-info">
            <h4>{comment.username}</h4>
            <p>{comment.comment}</p>
            <p className="comment-time">
              {new Date(comment.timestamp).toLocaleString()}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default async function Comment({ comicSlug }) {
  return (
    <>
      <CommentInput comicSlug={comicSlug} />
      <Suspense>
        <LoadComment comicSlug={comicSlug} />
      </Suspense>
    </>
  );
}

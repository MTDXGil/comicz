"use client";

import { getUser } from "@/lib/auth";
import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function CommentInput({ comicSlug }) {
  const notify = (type, text) => toast[type](text);
  const router = useRouter();

  const commentText = useRef();
  async function handleAddComment() {
    const user = await getUser();
    if (!user) {
      return notify("error", "Vui lòng đăng nhập trước!");
    }

    const response = await axios.post("/api/addcomment", {
      username: JSON.parse(user).username,
      commentText: commentText.current.value,
      comicSlug,
    });
    router.refresh();
  }

  return (
    <div className="comment-container">
      <textarea
        name="comment"
        id="comment-input"
        rows="2"
        placeholder="Viết bình luận..."
        ref={commentText}
      ></textarea>
      <button className="btn comment-btn" onClick={handleAddComment}>
        Submit
      </button>
    </div>
  );
}

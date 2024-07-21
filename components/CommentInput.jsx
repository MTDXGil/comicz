"use client";

import { getUser } from "@/lib/auth";
import axios from "axios";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function CommentInput({ comicSlug }) {
  const notify = (type, text) => toast[type](text);
  const isLogin = useSelector((state) => state.user.isLogin);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const commentText = useRef();
  async function handleAddComment() {
    const commentTextValue = commentText.current.value;
    if (commentTextValue !== "") {
      if (!isLogin) {
        return notify("error", "Vui lòng đăng nhập trước!");
      }

      setIsSubmitting(true);
      const user = await getUser();
      const response = await axios.post("/api/addcomment", {
        username: JSON.parse(user).username,
        commentText: commentTextValue,
        comicSlug,
      });
      commentText.current.value = "";
      router.refresh();
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    } else {
      notify("error", "Không thể để trống!");
    }
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
      <button
        className="btn comment-btn"
        onClick={handleAddComment}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}

"use client";
import { checkAuthenticated, getUser } from "@/lib/auth";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function FavoriteBtn({ comicSlug }) {
  const [isAdded, setIsAdded] = useState(false);
  const notify = (type, text) => toast[type](text);

  useEffect(() => {
    const savedState = localStorage.getItem(`favorite_${comicSlug}`);
    if (savedState) setIsAdded(true);
  }, [comicSlug]);

  async function handleClick() {
    const isAuthenticated = await checkAuthenticated();

    if (isAuthenticated) {
      const user = JSON.parse(await getUser());
      await axios.post("/api/addfavorite", {
        isAuthenticated,
        comicSlug,
      });
      if (!user.favorites.includes(comicSlug)) {
        setIsAdded(true);
        localStorage.setItem(`favorite_${comicSlug}`, "true");
        notify("success", "Đã thêm vào danh sách của bạn!");
      } else {
        setIsAdded(false);
        localStorage.removeItem(`favorite_${comicSlug}`);
        notify("success", "Đã xóa khỏi danh sách của bạn!");
      }
    } else {
      notify("error", "Vui lòng đăng nhập trước!");
    }
  }

  return (
    <button className="btn favorite-btn" onClick={handleClick}>
      <FontAwesomeIcon icon={isAdded ? faStarSolid : faStar} />
    </button>
  );
}

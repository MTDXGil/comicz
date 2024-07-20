"use client";
import { getUser } from "@/lib/auth";
import { userActions } from "@/store/store";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function FavoriteBtn({ comicSlug }) {
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();

  const [isAdded, setIsAdded] = useState(false);
  const notify = (type, text) => toast[type](text);

  useEffect(() => {
    const savedState = localStorage.getItem(`favorite_${comicSlug}`);
    if (savedState) setIsAdded(true);
  }, [comicSlug]);

  async function handleClick() {
    if (isLogin) {
      const user = JSON.parse(await getUser());
      await axios.post("/api/addfavorite", {
        userId: user._id,
        comicSlug,
      });
      if (!user.favorites.includes(comicSlug)) {
        setIsAdded(true);
        dispatch(userActions.addFavoriteComics({ comicSlug }));
        notify("success", "Đã thêm vào danh sách của bạn!");
      } else {
        setIsAdded(false);
        dispatch(userActions.removeFavoriteComics({ comicSlug }));
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

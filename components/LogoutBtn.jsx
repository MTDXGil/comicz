"use client";

import { deleteToken } from "@/lib/auth";
import { toast } from "react-toastify";

export default function LogoutBtn() {
  function clearFavorites() {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("favorite_")) {
        localStorage.removeItem(key);
      }
    });
  }

  const notify = (type, text) => toast[type](text);

  async function handleClick() {
    await deleteToken();
    clearFavorites();
    notify("success", "Đăng xuất thành công!");
  }

  return (
    <button className="btn register-btn" onClick={handleClick}>
      Logout
    </button>
  );
}

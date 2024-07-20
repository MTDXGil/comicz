"use client";

import { deleteToken } from "@/lib/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userActions } from "@/store/store";

export default function LogoutBtn() {
  const dispatch = useDispatch();

  const notify = (type, text) => toast[type](text);

  async function handleClick() {
    dispatch(userActions.logout());
    await deleteToken();
    dispatch(userActions.clearFavoriteComics());
    notify("success", "Đăng xuất thành công!");
  }

  return (
    <button className="btn register-btn" onClick={handleClick}>
      Logout
    </button>
  );
}

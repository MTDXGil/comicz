"use client";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "@/lib/auth";
import { userActions } from "@/store/store";
import { toast } from "react-toastify";

export default function DropdownHeader() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const notify = (type, text) => toast[type](text);

  async function handleClick() {
    dispatch(userActions.logout());
    await deleteToken();
    dispatch(userActions.clearFavoriteComics());
    notify("success", "Đăng xuất thành công!");
  }

  return (
    <>
      <button className="dropdown-menu-button">
        <FontAwesomeIcon icon={faBars} onClick={() => setIsMenuOpen(true)} />
      </button>
      <div className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}>
        <FontAwesomeIcon icon={faX} onClick={() => setIsMenuOpen(false)} />
        <ul className="dropdown-navbar">
          <li className="dropdown-item">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Trang chủ
            </Link>
          </li>
          <li className="dropdown-item">
            <Link href="/comic" onClick={() => setIsMenuOpen(false)}>
              Truyện
            </Link>
          </li>
          <li className="dropdown-item">
            <Link href="/genre" onClick={() => setIsMenuOpen(false)}>
              Thể loại
            </Link>
          </li>
          <li className="dropdown-item">
            <Link href="/mylist" onClick={() => setIsMenuOpen(false)}>
              Danh sách của tôi
            </Link>
          </li>
          <div className="dropdown-auth">
            {!isLogin && (
              <>
                <li className="dropdown-item">
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    Register
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                </li>
              </>
            )}
            {isLogin && (
              <li className="dropdown-item">
                <Link href="#" onClick={handleClick}>
                  Logout
                </Link>
              </li>
            )}
          </div>
        </ul>
      </div>
    </>
  );
}

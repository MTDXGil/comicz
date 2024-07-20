"use client";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function DropdownHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button className="dropdown-menu-button">
        <FontAwesomeIcon icon={faBars} onClick={() => setIsMenuOpen(true)} />
      </button>
      <div className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}>
        <FontAwesomeIcon icon={faX} onClick={() => setIsMenuOpen(false)} />
        <ul className="dropdown-navbar">
          <li className="dropdown-item">
            <Link href="/">Trang chủ</Link>
          </li>
          <li className="dropdown-item">
            <Link href="/comic">Truyện</Link>
          </li>
          <li className="dropdown-item">
            <Link href="/genre">Thể loại</Link>
          </li>
          <li className="dropdown-item">
            <Link href="/mylist">Danh sách của tôi</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

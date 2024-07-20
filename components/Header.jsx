import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import SearchBtn from "./SearchBtn";
import { checkAuthenticated } from "@/lib/auth";
import LogoutBtn from "./LogoutBtn";
import AuthBtn from "./AuthBtn";
import DropdownHeader from "./DropdownHeader";

export default async function Header() {
  const isAuthenticated = await checkAuthenticated();

  return (
    <header>
      <DropdownHeader />
      <Link href="/">
        <Image src={Logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar">
        <li className="navbar-item">
          <Link href="/">Trang chủ</Link>
        </li>
        <li className="navbar-item">
          <Link href="/comic">Truyện</Link>
        </li>
        <li className="navbar-item">
          <Link href="/genre">Thể loại</Link>
        </li>
        <li className="navbar-item">
          <Link href="/mylist">Danh sách của tôi</Link>
        </li>
      </ul>
      <div className="navbar-action">
        <SearchBtn />
        {!isAuthenticated && <AuthBtn />}
        {isAuthenticated && <LogoutBtn />}
      </div>
    </header>
  );
}

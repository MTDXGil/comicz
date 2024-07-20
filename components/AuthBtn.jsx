"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";

export default function AuthBtn() {
  const isLogin = useSelector((state) => state.user.isLogin);

  return !isLogin ? (
    <>
      <Link href="/register" className="btn register-btn">
        Register
      </Link>
      <Link href="/login" className="btn login-btn">
        Login
      </Link>
    </>
  ) : (
    <LogoutBtn />
  );
}

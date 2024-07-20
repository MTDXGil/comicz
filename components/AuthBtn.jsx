"use client ";
import Link from "next/link";

export default function AuthBtn() {
  return (
    <>
      <Link href="/register" className="btn register-btn">
        Register
      </Link>
      <Link href="/login" className="btn login-btn">
        Login
      </Link>
    </>
  );
}

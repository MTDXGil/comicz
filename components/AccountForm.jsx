"use client";
import Link from "next/link";
import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { getUser } from "@/lib/auth";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@/store/store";

export default function AccountForm({ hasConfirmPassword }) {
  const dispatch = useDispatch();
  const notify = (type, text) => toast[type](text);

  const username = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const url = `/api/${hasConfirmPassword ? "register" : "login"}`;

    try {
      const response = await axios.post(url, {
        username: username.current.value,
        password: password.current.value,
        confirmPassword: hasConfirmPassword
          ? confirmPassword.current.value
          : null,
      });
      router.back();
      const user = JSON.parse(await getUser());
      user.favorites.forEach((favSlug) =>
        dispatch(userActions.addFavoriteComics({ comicSlug: favSlug }))
      );
      dispatch(userActions.login());
      notify(
        "success",
        hasConfirmPassword
          ? "Tạo tài khoản thành công!"
          : "Đăng nhập thành công!"
      );
    } catch (error) {
      if (error.response && error.response.data.errorMessageList) {
        error.response.data.errorMessageList.map((message) =>
          notify("error", message)
        );
      } else {
        notify("error", "Sai mật khẩu!");
      }
    }
  }

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h1>{hasConfirmPassword ? "Register" : "Login"}</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            ref={username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={password}
          />
          {hasConfirmPassword && (
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm Password"
              ref={confirmPassword}
            />
          )}
          <button className="btn submit-btn">Submit</button>
          <p>OR</p>
          <p>
            Already have account?{" "}
            <Link href={hasConfirmPassword ? "/login" : "/register"} replace>
              {hasConfirmPassword ? "Login now" : "Register now"}.
            </Link>
            .
          </p>
          <p style={{ marginTop: "15px" }}>
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot. Learn more.
          </p>
        </form>
      </div>
    </div>
  );
}

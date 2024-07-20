"use client";
import { usePathname, useRouter } from "next/navigation";

export default function ComicFilter() {
  const router = useRouter();
  const pathname = usePathname();

  function AddStatusParams(status) {
    if (status) router.push(pathname + `?status=${status}`);
    else router.push(pathname);
  }

  return (
    <>
      <button className="btn" onClick={() => AddStatusParams()}>
        All
      </button>
      <button className="btn" onClick={() => AddStatusParams("ongoing")}>
        Đang cập nhật
      </button>
      <button className="btn" onClick={() => AddStatusParams("completed")}>
        Đã hoàn thành
      </button>
    </>
  );
}

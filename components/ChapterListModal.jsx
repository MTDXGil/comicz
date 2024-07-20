"use client";

import Modal from "@/components/Modal";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChapterListModal({ chapterList, toggleModal }) {
  const input = useRef();
  const router = useRouter();

  return (
    <Modal>
      <FontAwesomeIcon icon={faX} onClick={toggleModal} />
      <div className="chapter-menu-input">
        <input type="number" placeholder="Enter chapter number." ref={input} />
        <button
          className="btn"
          onClick={() => {
            router.push(input.current.value);
            toggleModal();
          }}
        >
          Go To
        </button>
      </div>
      <ul className="chapter-menu-list">
        {chapterList.map((chapter) => (
          <li key={chapter.chapter_api_data} className="btn chapter-menu-item">
            <Link href={chapter.chapter_name} onClick={toggleModal}>
              Chapter {chapter.chapter_name}
            </Link>
          </li>
        ))}
      </ul>
    </Modal>
  );
}

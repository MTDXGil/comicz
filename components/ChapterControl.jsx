"use client";

import ChapterListModal from "@/components/ChapterListModal";
import {
  faAngleLeft,
  faAngleRight,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ChapterControl({ chapter, chapterList }) {
  const [openModal, setOpenModal] = useState(false);
  const currentIndex = chapterList.findIndex(
    (chapterBlock) => chapterBlock.chapter_name === chapter
  );

  function toggleModal() {
    setOpenModal((prevValue) => !prevValue);
  }

  return (
    <div className="chapter-control">
      <Link
        href={`${
          currentIndex > 0
            ? chapterList[currentIndex - 1].chapter_name
            : chapterList[currentIndex].chapter_name
        }`}
        className="btn prev-chapter-btn"
      >
        <FontAwesomeIcon icon={faAngleLeft} /> Prev
      </Link>
      <button
        className="btn chapter-menu-btn"
        onClick={() => setOpenModal(true)}
      >
        <FontAwesomeIcon icon={faListUl} /> Chapter List
      </button>
      <AnimatePresence>
        {openModal && (
          <ChapterListModal
            chapterList={chapterList}
            toggleModal={toggleModal}
          />
        )}
      </AnimatePresence>
      <Link
        href={`${
          currentIndex >= chapterList.length - 1
            ? chapterList[currentIndex].chapter_name
            : chapterList[currentIndex + 1].chapter_name
        }`}
        className="btn next-chapter-btn"
      >
        Next <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </div>
  );
}

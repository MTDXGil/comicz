"use client";

import ChapterListModal from "@/components/ChapterListModal";
import {
  faAngleLeft,
  faAngleRight,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function ChapterControl({ chapter, chapterList }) {
  const [openModal, setOpenModal] = useState(false);

  function toggleModal() {
    setOpenModal((prevValue) => !prevValue);
  }

  return (
    <div className="chapter-control">
      <Link
        href={`${chapter > 1 ? chapter - 1 : chapter}`}
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
      {openModal && (
        <ChapterListModal chapterList={chapterList} toggleModal={toggleModal} />
      )}
      <Link href={`${chapter + 1}`} className="btn next-chapter-btn">
        Next <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

export default function SelectChapter({ comicSlug, totalChapter }) {
  const [listChapter, setListChapter] = useState([]);
  const blockSize = 50;
  const blocks = [];

  async function handleChapterBlockClick(start, end) {
    setListChapter([]);
    for (let i = start; i <= end; i++) {
      setListChapter((prevListChapter) => {
        return [
          ...prevListChapter,
          <li key={i} className="chapter-item">
            <Link href={`${comicSlug}/${i}`} className="btn">
              Chapter {i}
            </Link>
          </li>,
        ];
      });
    }
  }

  for (let i = 1; i < totalChapter; i += blockSize) {
    const start = i;
    const end = Math.min(i + blockSize - 1, totalChapter);
    blocks.push(
      <li key={i} className="chapter-block-item">
        <button
          className="btn"
          onClick={() => handleChapterBlockClick(start, end)}
        >
          {start}-{end}
        </button>
      </li>
    );
  }

  return (
    <div className="select-chapter">
      <h2>Chapters</h2>
      <hr />
      <ul className="chapter-block">{blocks}</ul>
      {totalChapter > 0 ? (
        <hr />
      ) : (
        <h4>This comic doesn&apos;t have chapters yet</h4>
      )}
      <ul className="chapter-list">{listChapter}</ul>
    </div>
  );
}

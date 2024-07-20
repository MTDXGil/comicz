"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchBtn() {
  const [openSearch, setOpenSearch] = useState(false);
  const input = useRef();
  const router = useRouter();

  function toggleOpenSearch() {
    setOpenSearch((prevValue) => !prevValue);
  }

  useEffect(() => {
    if (openSearch && input.current) {
      input.current.focus();
    }
  }, [openSearch]);

  function handleSearch(e) {
    if (e.key === "Enter") {
      router.push(`/search?keyword=${input.current.value}`);
    }
  }

  return (
    <div className="search-btn-wrapper">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`search-btn ${openSearch ? "active" : ""}`}
        onClick={toggleOpenSearch}
      />
      <input
        type="text"
        name="keyword"
        className={`search-input ${openSearch ? "active" : ""}`}
        placeholder="Truyện, thể loại..."
        ref={input}
        onBlur={toggleOpenSearch}
        onKeyDown={handleSearch}
        autoFocus
      ></input>
    </div>
  );
}

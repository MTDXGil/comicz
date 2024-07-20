import axios from "axios";
import { notFound } from "next/navigation";

const baseURL = "https://otruyenapi.com/v1/api";
const thumbnailBaseURL = "https://img.otruyenapi.com/uploads/comics/";

export function GetComicThumbnail(imageName) {
  return `${thumbnailBaseURL}/${imageName}`;
}

export async function GetRecentUpdateComic(page) {
  const response = await axios.get(
    baseURL + `/danh-sach/truyen-moi?page=${page}`
  );

  return response.data.data;
}

export async function GetComingSoonComic(page) {
  const response = await axios.get(
    baseURL + `/danh-sach/sap-ra-mat?page=${page}`
  );

  return response.data.data;
}

export async function GetNewComic(page) {
  const response = await axios.get(
    baseURL + `/danh-sach/truyen-moi?page=${page + 1}`
  );

  return response.data.data;
}

export async function GetGenreComic(genreSlug, page) {
  if (genreSlug === "all") {
    const genreResponse = await axios.get(baseURL + "/the-loai");
    const genreList = genreResponse.data.data.items;
    const randomGenre = genreList[Math.floor(Math.random() * genreList.length)];

    const response = await axios.get(
      baseURL + `/the-loai/${randomGenre.slug}?page=${page}`
    );
    return response.data.data;
  } else {
    const response = await axios.get(
      baseURL + `/the-loai/${genreSlug}?page=${page}`
    );

    return response.data.data;
  }
}

export async function GetComicInformation(comicSlug) {
  try {
    const response = await axios.get(baseURL + `/truyen-tranh/${comicSlug}`);

    return response.data.data;
  } catch (error) {
    notFound();
  }
}

export async function GetChapterImage(url) {
  const response = await axios.get(url);

  return response.data.data;
}

export async function GetCompleteComic(page) {
  const response = await axios.get(
    baseURL + `/danh-sach/hoan-thanh?page=${page}`
  );

  return response.data.data;
}

export async function GetSearchComic(keyword) {
  const response = await axios.get(baseURL + `/tim-kiem?keyword=${keyword}`);

  return response.data.data;
}

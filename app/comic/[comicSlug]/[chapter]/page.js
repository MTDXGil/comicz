import ChapterControl from "@/components/ChapterControl";
import ChapterSekeleton from "@/components/ChapterSkeleton";
import Comment from "@/components/Comment";
import { GetChapterImage, GetComicInformation } from "@/lib/comic";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function LoadChapter({ comicSlug, chapter }) {
  const comicInformation = await GetComicInformation(comicSlug);
  const chapterList = comicInformation.item.chapters[0].server_data;
  let chapterInformation = chapterList.find(
    (chapterInf) => chapterInf.chapter_name === chapter
  );
  let chapterImageList;
  if (chapterInformation) {
    chapterImageList = await GetChapterImage(
      chapterInformation.chapter_api_data
    );
  } else {
    return notFound();
  }

  return (
    <>
      <div className="chapter-container">
        <h1>{`${comicInformation.item.name} - Chapter ${chapterInformation.chapter_name}`}</h1>
        <ChapterControl chapter={chapter} chapterList={chapterList} />
        <div className="chapter-image-list">
          {chapterImageList.item.chapter_image.map((image) => (
            <div key={image.image_page} className="chapter-image-item">
              <Image
                src={`${chapterImageList.domain_cdn}/${chapterImageList.item.chapter_path}/${image.image_file}`}
                alt={image.image_page}
                width={1000}
                height={974}
              />
            </div>
          ))}
        </div>
        <ChapterControl chapter={chapter} chapterList={chapterList} />
      </div>
      <div style={{ margin: "0px 75px" }}>
        <Comment comicSlug={comicSlug} />
      </div>
    </>
  );
}

export default function Chapter({ params }) {
  const comicSlug = params.comicSlug;
  const chapter = params.chapter;

  return (
    <Suspense fallback={<ChapterSekeleton />}>
      <LoadChapter comicSlug={comicSlug} chapter={chapter} />
    </Suspense>
  );
}

import { getTopStories } from "@/services/hn";
import Link from "next/link";
// Components
import Pagination from "./_components/Pagination";

const STORIES_PER_PAGE = 10;

type Props = {
  searchParams?: { page: string };
}

export default async function Home({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;
  const paginatedStories = await getTopStories((currentPage - 1) * STORIES_PER_PAGE, STORIES_PER_PAGE);
  const totalPages = Math.ceil(paginatedStories.totalStories / STORIES_PER_PAGE);

  return (
    <main>
      {paginatedStories.topstories.map((story, index) => {
        const url = story.url ? new URL(story.url) : null;

        return (
          <div className="leading-none mb-4" key={story.id}>
            <div className="leading-none mb-4" key={story.id}>
              <a
                title={story.title}
                href={story.url || `/${story.id}`}
                target={url?.host ? "_blank" : ""}
                className="pb-1 whitespace-nowrap text-ellipsis overflow-hidden block font-bold visited:text-slate-500">
                {index + 1 + ((currentPage - 1) * STORIES_PER_PAGE)}. {story.title}
              </a>
              <div className="text-xs text-slate-700">
                {url?.host ? `${url?.host} - ` : ''}
                <Link href={`/${story.id}`}>
                  {story.score} poäng - {story.descendants || 'Inga'} kommentarer - {Math.floor(Date.now() / 1000 - story.time)}
                  sekunder sedan
                </Link>
              </div>
            </div>
          </div>
        )
      })}
      <Pagination totalPages={totalPages} />
    </main>
  );
}

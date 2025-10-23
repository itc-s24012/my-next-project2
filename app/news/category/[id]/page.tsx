import { notFound } from "next/navigation";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import Category from "@/app/_components/Category";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
    params: {
      id: string; // 型定義: `id` は文字列型
    };
  };
  

export default async function Page({ params }: Props) {
    const category = await getCategoryDetail(params.id).catch(notFound);
    const { contents: news, totalCount } = await getNewsList({
      limit:NEWS_LIST_LIMIT,
      filters: `category[equals]${category.id}`,
    })
    return (
        <>
          <p>
            <Category category={category} /> の一覧
          </p>
          <NewsList news={news} />
          <Pagination
          totalCount={totalCount} 
          basePath={`/news/category/${category.id}`} 
          />
        </>
    );
}

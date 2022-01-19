import { useAppSelector } from "../../hooks/redux-use";
import styleMain from "../../main.module.sass";
import { IArticle } from "../../models/INews";
import { stateAllNewsReverse } from "../../store/reselectors/news-selector";
import style from "./news.module.sass";
import { SingleArticle } from "./SingleArticle";

export const NewsPage = () => {
  const { allNews } = {
    allNews: useAppSelector(stateAllNewsReverse),
  };
  return (
    <div className={styleMain.news}>
      <h1 className={style.titleMain}>News</h1>
      <div className={style.news__grid}>
        <div className={style.newsContainer}>
          {allNews.map((article: IArticle) => (
            <SingleArticle
              key={article.id}
              full={article}
              tags={article.tags}
              colors={article.colors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

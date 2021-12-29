import { useAppSelector } from "../../hooks/redux-use";
import styleMain from "../../main.module.sass";
import { IArticle } from "../../models/INews";
import { getEvenNews, getOddNews } from "../../store/reselectors/news-selector";
import style from "./news.module.sass";
import { SingleArticle } from "./SingleArticle";

export const NewsPage = () => {
  const { oddNews, evenNews } = {
    oddNews: useAppSelector(getOddNews),
    evenNews: useAppSelector(getEvenNews),
  };
  return (
    <div className={styleMain.news}>
      <h1 className={style.titleMain}>News</h1>
      <div className={styleMain.news__grid}>
        <div className={styleMain.newsContainer_left}>
          {oddNews.map((article: IArticle) => (
            <SingleArticle
              full={article}
              tags={article.tags}
              colors={article.colors}
              dive={article.content_dive}
            />
          ))}
        </div>
        <div className={styleMain.newsContainer_right}>
          {evenNews.map((article: IArticle) => (
            <SingleArticle
              full={article}
              tags={article.tags}
              colors={article.colors}
              dive={article.content_dive}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

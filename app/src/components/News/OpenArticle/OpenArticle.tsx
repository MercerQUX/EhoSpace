import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { Tags } from "../../../asset/common/Tags";
import { decrementIDArticle } from "../../../helpers/decrementNewsHelper";
import { useAppSelector } from "../../../hooks/redux-use";
import styleMain from "../../../main.module.sass";
import { stateAllNews } from "../../../store/reselectors/news-selector";
import style from "../news.module.sass";

export const OpenArticle = () => {
  const selectArticle: number = Number(useParams().newsID);
  const fullArticle = useAppSelector(stateAllNews)[selectArticle - 1];

  return (
    <div className={styleMain.news}>
      <h1 className={style.titleMain}>{fullArticle.title}</h1>
      <div className={style.direction}>
        <NavLink to="/news">
          <span>Go Back</span>
        </NavLink>
        <NavLink to={`/news/${decrementIDArticle(selectArticle)}`}>
          <span>Past Article</span>
        </NavLink>
      </div>
      <div className={style.openContent}>
        <h2>{fullArticle.title_article}</h2>
        <span className={style.metaArticle}>
          <span className={style.author}>
            {fullArticle.content_dive.author}
          </span>
          <time>{fullArticle.timestamp}</time>
        </span>
        <pre
          className={style.content_container}
          dangerouslySetInnerHTML={{ __html: fullArticle.content_dive.full_content_article }}
        >
        </pre>
        <div className={style.openTags}>
          <Tags tags={fullArticle.tags} />
        </div>
      </div>
    </div>
  );
};

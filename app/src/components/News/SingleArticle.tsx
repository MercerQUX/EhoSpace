import { NavLink } from "react-router-dom";
import { Tags } from "../../asset/common/Tags";
import { IArticle, IColors, IDiveContent, ITags } from "../../models/INews";
import style from "./news.module.sass";

interface defaultProps {
  full: IArticle;
  tags: Array<ITags>;
  colors: IColors;
}

export const SingleArticle: React.FC<defaultProps> = ({
  full,
  tags,
  colors,
}) => {
  return (
    <div className={style.wrapperArticle}>
      <NavLink
        to={`/news/${full.id}`}
        className={style.headerArticle}
        style={{
          color: colors.color_title,
          background: colors.color_background,
        }}
      >
        <span className={style.timeArticle}>{full.timestamp}</span>
        <span className={style.titleArticle}>{full.title}</span>
      </NavLink>
      <article className={style.Article}>
        <h3 style={{ color: "black" }} className={style.namedArticle}>
          {full.title_article}
        </h3>
        <p className={style.contentArticle}>{full.cutted_content_article}</p>
      </article>
      <div className={style.tagsArticle}>
        <Tags tags={tags} />
      </div>
    </div>
  );
};

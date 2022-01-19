import { ITags } from "../../models/INews";
import style from "../asset.module.sass";

interface defaultProps {
  tags: ITags[];
}

export const Tags = (props: defaultProps) => {
  return (
    <>
      {props.tags.map((tag) => {
        return (
          <span
            key={tag.id}
            className={style.tags}
            style={{
              color: tag.color_text,
              background: tag.color_background,
              outlineColor: tag.color_outline,
            }}
          >
            {tag.body}
          </span>
        );
      })}
    </>
  );
};

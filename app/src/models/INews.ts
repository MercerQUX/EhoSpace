export interface IArticle {
  id: number;
  title: string;
  timestamp: string;
  title_article: string;
  cutted_content_article: string;
  tags: Array<ITags>;
  colors: IColors;
  content_dive: IDiveContent;
}
export interface ITags {
  id: number;
  body: string;
  color_text: string;
  color_background: string;
  color_outline: string;
}
export interface IColors {
  color_title: string;
  color_background: string;
}
export interface IDiveContent {
  author: string;
  full_content_article: string;
}

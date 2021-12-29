export const decrementIDsArticle = (nowID: number) => {
  // Will fetch from server
  const allIDsNews = [1, 2];
  if (allIDsNews.some((id) => id === nowID)) {
    return nowID - 1 === 0 ? nowID : --nowID;
  } else {
    return "";
  }
};

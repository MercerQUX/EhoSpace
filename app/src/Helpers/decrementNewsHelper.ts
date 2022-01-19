export const decrementIDArticle = (nowID: number) => {
  // Will fetch from server
  const allIDsNews: number[] = [];
  if (nowID) for (let i = 1; i <= nowID; ) allIDsNews.push(i++);

  if (allIDsNews.some((id) => id === nowID)) {
    return nowID - 1 === 0 ? nowID : --nowID;
  } else {
    return "";
  }
};

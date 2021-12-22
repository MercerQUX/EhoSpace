export const scrollingBy = (to: number) => {
  if (window.pageYOffset > 0) {
    window.scrollBy({ top: to, behavior: "smooth" });
  }
};

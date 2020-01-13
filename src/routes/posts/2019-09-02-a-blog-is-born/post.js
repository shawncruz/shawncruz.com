export default {
  title: `A Blog is Born`,
  spoiler: "Better 3 years late than never.",
  getContent: () => import("./document.mdx")
};

export default {
  title: `A Blog is Born`,
  tags: ["ramblings"],
  spoiler: "Better 3 years late than never.",
  getContent: () => import("./document.mdx")
};

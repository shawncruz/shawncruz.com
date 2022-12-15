export default {
  title: `A Blog is Born`,
  spoiler: "Look mom, I'm [renting a domain name] on the Internet!",
  getContent: () => import("./document.mdx")
};

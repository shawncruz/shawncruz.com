import * as Navi from "navi";

export default Navi.route({
  title: "Long Bets",
  getView: () => import("./document.mdx")
});
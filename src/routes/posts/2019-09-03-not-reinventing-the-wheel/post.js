export default {
  title: `Not Reinventing the Wheel`,
  tags: ["tutorial", "how-to"],
  spoiler:
    "Leveraging known solutions to common problems is generally better than reinventing the wheel.",
  getContent: () => import("./document.mdx")
};

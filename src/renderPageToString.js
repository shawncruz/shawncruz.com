import renderReactPageToString from "react-navi/create-react-app";

/**
 * navi-scripts will call this function for each of your site's pages
 * to produce its statically rendered HTML.
 */
async function renderPageToString(props) {
  return renderReactPageToString(props);
}

export default renderPageToString;

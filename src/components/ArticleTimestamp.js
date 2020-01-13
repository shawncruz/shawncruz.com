import React from "react";
import { formatDate } from "../utils/formats";

function ArticleTimestamp({ meta }) {
  return (
    <small>
      <time dateTime={meta.date.toUTCString()}>{formatDate(meta.date)}</time>
    </small>
  );
}

export default ArticleTimestamp;

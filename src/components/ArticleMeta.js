import { join } from "path";
import React from "react";
import { Link } from "react-navi";
import { formatDate } from "../utils/formats";

function ArticleMeta({ blogRoot, meta }) {
  return (
    <small>
      <time dateTime={meta.date.toUTCString()}>{formatDate(meta.date)}</time>
    </small>
  );
}

export default ArticleMeta;

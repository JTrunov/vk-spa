import { useEffect, useState } from "react";
import { StoriesData } from "../../types/types";
import { getComment } from "../../services/api";
import DOMPurify from "dompurify";
import Comments from "./Comments";
import "./Comment.css";

type Props = { commentId?: number };

const Comment = (props: Props) => {
  const [commentInfo, setCommentInfo] = useState<StoriesData>();

  useEffect(() => {
    getComment(Number(props.commentId)).then((data): void => {
      if (data) {
        setCommentInfo(data);
      }
    });
  }, [props.commentId]);

  const cleanText = DOMPurify.sanitize(commentInfo?.text, {
    USE_PROFILES: { html: true },
  });

  return (
    <div className="comment">
      <div dangerouslySetInnerHTML={{ __html: cleanText }}></div>
      <p>{`by ${commentInfo?.by}`}</p>
      {commentInfo?.kids && <Comments comments={commentInfo.kids} />}
    </div>
  );
};

export default Comment;

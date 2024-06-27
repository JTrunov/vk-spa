import Comment from "./Comment";
import "./Comments.css";

type Props = { comments?: number[] };

const Comments = (props: Props) => {
  return (
    <div className="comments">
      {props.comments?.map((comment) => (
        <Comment commentId={comment} />
      ))}
    </div>
  );
};

export default Comments;

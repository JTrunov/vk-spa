import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getStory } from "../../services/api";
import { StoriesData } from "../../types/types";
import Comments from "../Comments/Comments";

const StoryExtended = () => {
  const { id } = useParams();
  const [storyInfo, setStoryInfo] = useState<StoriesData>();

  useEffect(() => {
    getStory(Number(id)).then((data): void => {
      if (data) {
        setStoryInfo(data);
      }
    });
  }, [id]);
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>{storyInfo?.title}</h1>
      <Comments comments={storyInfo?.kids} />
    </div>
  );
};

export default StoryExtended;

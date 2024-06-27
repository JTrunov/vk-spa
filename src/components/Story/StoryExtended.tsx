import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStory } from "../../services/api";
import { StoriesData } from "../../types/types";

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
      <h1>{storyInfo?.title}</h1>
      <p>{storyInfo?.text}</p>
    </div>
  );
};

export default StoryExtended;

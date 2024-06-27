import { useEffect, useState } from "react";
import { getStory } from "../../services/api";
import { StoriesData } from "../../types/types";
import { Link } from "react-router-dom";

type Props = { storyId: number };

const StoryMini = (props: Props) => {
  const [storyInfo, setStoryInfo] = useState<StoriesData>();

  useEffect(() => {
    getStory(props.storyId).then((data): void => {
      if (data) {
        setStoryInfo(data);
      }
    });
  }, [props.storyId]);
  return (
    <div>
      <a href={storyInfo?.url}> {storyInfo?.title}</a>
      <p>
        {`by ${storyInfo?.by} | score:${storyInfo?.score}|`}{" "}
        <Link
          to={`/story/${storyInfo?.id}`}
        >{`comments: ${storyInfo?.descendants}`}</Link>
      </p>
    </div>
  );
};

export default StoryMini;

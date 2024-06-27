import { useEffect, useState } from "react";
import StoryMini from "../Story/StoryMini";
import { getStories } from "../../services/api";

function Feed() {
  const [stories, setStories] = useState<number[]>([]);
  const [storySort, setStorysort] = useState<"new" | "best" | "top">("new");
  const [update, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    getStories(storySort).then((ids): void => {
      if (ids) {
        setStories(ids);
      }
    });

    const timer = setTimeout(() => {
      getStories(storySort).then((ids): void => {
        if (ids) {
          setStories(ids);
        }
      });
      console.log("updated!");
    }, 5000);

    if (update) {
      setUpdate(false);
      console.log("updated by button");
      return clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [storySort, update]);

  return (
    <>
      <div>
        <button onClick={() => setStorysort("best")}>Best</button>
        <button onClick={() => setStorysort("new")}>New</button>
        <button onClick={() => setStorysort("top")}>Top</button>
      </div>
      <div>
        <button onClick={() => setUpdate(true)}>Update</button>
      </div>
      <div>
        <h1>All of our news:</h1>
        {stories.slice(0, 30).map((story, i) => {
          return <StoryMini key={i} storyId={story} />;
        })}
      </div>
    </>
  );
}

export default Feed;

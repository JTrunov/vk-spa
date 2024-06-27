import { StoriesData } from "../types/types";

export const getStories = async (typeOfStories: "best" | "new" | "top") => {
  try {
    const stories = await fetch(
      `https://hacker-news.firebaseio.com/v0/${typeOfStories}stories.json?print=pretty`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json() as Promise<number[]>;
    });
    return stories;
  } catch (err) {
    console.error(err);
  }
};

export const getStory = async (storyId: number) => {
  try {
    const story = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json() as Promise<StoriesData>;
    });
    return story;
  } catch (err) {
    console.error(err);
  }
};

export const getComment = async (commentId: number) => {
  try {
    const story = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json() as Promise<StoriesData>;
    });
    return story;
  } catch (err) {
    console.error(err);
  }
};

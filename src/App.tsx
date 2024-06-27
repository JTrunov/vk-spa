import { Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import StoryExtended from "./components/Story/StoryExtended";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/story/:id" element={<StoryExtended />} />
      </Routes>
    </>
  );
}

export default App;

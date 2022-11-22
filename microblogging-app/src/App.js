import "./App.css";
import TweetCreator from "./Components/TweetCreator";
import TweetList from "./Components/TweetList";
import localForage from "localforage";
import { useEffect, useState } from "react";

function App() {
  const [tweetArr, setTweetArr] = useState([]);

  const getTweetsFromStorage = async () => {
    try {
      const tweetStorage = await localForage.getItem("tweetStorage");
      setTweetArr(tweetStorage);
    } catch (err) {
      console.log("No data saved");
    }
  };

  useEffect(() => {
    getTweetsFromStorage();
  }, []);

  const postTweet = (tweet) => {
    const tweetDate = new Date();
    const userName = "Martin";
    setTweetArr([...tweetArr, { tweetDate, tweet, userName }]);
  };

  useEffect(() => {
    localForage.setItem("tweetStorage", tweetArr);
  }, [tweetArr]);

  return (
    <div className="App">
      <header className="App-header">
        <TweetCreator postTweet={postTweet} />
        <TweetList tweetArr={tweetArr} />
      </header>
    </div>
  );
}

export default App;

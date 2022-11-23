import "./App.css";
import TweetCreator from "./Components/TweetCreator";
import TweetList from "./Components/TweetList";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [tweetArr, setTweetArr] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const getTweetsFromStorage = async () => {
    try {
      const response = await fetch(
        "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet"
      );
      const tweetStorage = await response.json();
      const storedTweetArray = tweetStorage.tweets;
      setTweetArr(storedTweetArray);
      console.log(storedTweetArray);
    } catch (err) {
      alert("Server is offline.");
    }
  };

  useEffect(() => {
    getTweetsFromStorage();
  }, []);

  // const postTweet = (content) => {
  // const dateObject = new Date();
  // const date = dateObject.toISOString();
  // const userName = "Martin";
  // setTweetArr([...tweetArr, { content, userName, date }]);
  // };

  const postTweetToServer = async (tweetObject) => {
    try {
      setShowSpinner(true);
      const response = await fetch(
        "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(tweetObject),
        }
      );
      const json = await response.json();
      setTweetArr([...tweetArr, json]);
      setShowSpinner(false);
      console.log(json);
    } catch (err) {
      alert("Post was unsuccessful.");
    }
  };

  // useEffect(() => {
  // setShowSpinner(true);
  //   tweetArr.map((tweet) => {
  //     return postTweetToServer(tweet);
  //   });
  // }, [tweetArr]);

  const spinnerRenderer = () => {
    if (showSpinner === true) {
      return <Spinner animation="border" size="lg" />;
    } else if (showSpinner === false) {
      return;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <TweetCreator postTweetToServer={postTweetToServer} />
        {spinnerRenderer()}
        <TweetList tweetArr={tweetArr} />
      </header>
    </div>
  );
}

export default App;

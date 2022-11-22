import { useState, useEffect } from "react";
import "./TweetCreator.css";

function TweetCreator({ postTweet }) {
  const [buttonState, setButtonState] = useState(false);
  const [tweet, setTweet] = useState("");

  const tweetLimit = 140;

  useEffect(() => {
    if (tweet == "") {
      setButtonState(true);
    } else if (tweet.length == tweetLimit) {
      setButtonState(true);
    } else if (tweet.length < tweetLimit) {
      setButtonState(false);
    }
  }, [tweet]);

  const buttonStateHandler = (e) => {
    setTweet(e.target.value);
  };

  return (
    <div className="tweet-input-container">
      <textarea
        maxLength={tweetLimit}
        className="tweet-input-area"
        value={tweet}
        onChange={buttonStateHandler}
      ></textarea>
      <button
        onClick={() => {
          postTweet(tweet);
          setTweet("");
        }}
        className="tweet-submit-button"
        disabled={buttonState}
      >
        Tweet
      </button>
    </div>
  );
}

export default TweetCreator;

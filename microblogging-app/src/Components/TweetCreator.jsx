import { useState, useEffect } from "react";
import "./TweetCreator.css";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function TweetCreator({ postTweetToServer }) {
  const [buttonState, setButtonState] = useState(false);
  const [tweet, setTweet] = useState("");
  const [alertShow, setAlertShow] = useState(false);

  const tweetLimit = 140;

  useEffect(() => {
    if (tweet.trim().length === false) {
      setButtonState(true);
      setAlertShow(false);
    } else if (tweet.length === tweetLimit) {
      setButtonState(true);
      setAlertShow(true);
    } else if (tweet.length < tweetLimit) {
      setButtonState(false);
      setAlertShow(false);
    }
  }, [tweet]);

  const buttonStateHandler = (e) => {
    setTweet(e.target.value);
  };

  const createTweet = (content) => {
    const dateObject = new Date();
    const date = dateObject.toISOString();
    const userName = "Martin";
    const tweetObject = { content: content, userName: userName, date: date };
    postTweetToServer(tweetObject);
  };

  return (
    <div className="tweet-input-container">
      <textarea
        maxLength={tweetLimit}
        className="tweet-input-area"
        value={tweet}
        onChange={buttonStateHandler}
      ></textarea>
      <Alert show={alertShow} className="max-chars-alert" variant="danger">
        The tweet cant contain more than <strong>&nbsp;140&nbsp;</strong>
        chars.
      </Alert>
      <Button
        onClick={() => {
          createTweet(tweet);
          setTweet("");
        }}
        variant="primary"
        className="tweet-submit-button"
        disabled={buttonState}
      >
        Tweet
      </Button>
    </div>
  );
}

export default TweetCreator;

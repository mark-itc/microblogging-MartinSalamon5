import "./TweetBox.css";

function TweetBox(props) {
  const { tweet } = props;
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const tweetDate = tweet.tweetDate.toLocaleDateString(undefined, options);
  const text = tweet.tweet;
  const userName = tweet.userName;

  return (
    <div className="tweet-box">
      <div className="tweet-box-header">
        <div>{userName}</div> <div>{tweetDate}</div>
      </div>
      <div className="tweet-box-text">{text}</div>
    </div>
  );
}

export default TweetBox;

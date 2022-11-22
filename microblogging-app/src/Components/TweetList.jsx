import TweetBox from "../lib/TweetBox";
import "./TweetList.css";

function TweetList(props) {
  const { tweetArr } = props;

  tweetArr.sort((a, b) => {
    return b.tweetDate - a.tweetDate;
  });

  return (
    <div className="tweet-list">
      {tweetArr.map((tweet, key) => {
        return <TweetBox tweet={tweet} key={key} />;
      })}
    </div>
  );
}

export default TweetList;

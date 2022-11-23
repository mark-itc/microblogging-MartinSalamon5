import TweetBox from "../lib/TweetBox";
import "./TweetList.css";

function TweetList(props) {
  const { tweetArr } = props;

  tweetArr.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
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

//web constants
const userTweetsURL = async (user) => {
  `https://twitter.com/search?q=from%3A${user}&src=typed_query&f=live`
};
const tweetStreamDiv = 'div.css-1dbjc4n.r-yfoy6g.r-18bvks7.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c';
//to be selected FROM tweetStreamDiv
const tweetDiv = 'div.css-1dbjc4n.r-1iusvr4.r-46vdb2.r-1777fci.r-5f2r5o.r-bcqeeo.r-1mi0q7o';

export {userTweetsURL, tweetDiv}

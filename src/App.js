import React, { useState,useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "aa4e7ea408129380fa4bf9d64b3f3f182e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setnewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "showNewHeadlines") {
          setnewsArticles(articles);
        }
      },
    });
  }, [] );

  return (  
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;

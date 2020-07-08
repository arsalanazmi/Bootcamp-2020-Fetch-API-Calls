import React, { useState, useEffect } from "react";
import "./App.css";
import { RepoList } from "./component/RepoList";

function App() {
  const API_URl = "https://api.github.com/users/arsalanazmi/repos";

  const [repos, setRepos] = useState([]);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setFetching(true);
      const response = await fetch(API_URl);
      const data = await response.json();
      setRepos(data);
      setFetching(false);
    };
    loadData();
  }, []);

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>FETCH API CALLS</h1>
      <h2>My GITHUB Repositories:</h2>
      {isFetching ? (
        <h2>Repositories Loading...</h2>
      ) : (
        <ol>
          {repos.map((repo, index) => {
            return <RepoList key={index} repoData={repo} />;
          })}
        </ol>
      )}
    </div>
  );
}

export default App;
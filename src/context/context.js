import React, { useState, useEffect, createContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GitHubContext = createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const searchGithubUser = async (user) => {
    toggleError(false, "");
    setIsLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data);
      getFollowers(user);
      getRepos(user);
    } else {
      toggleError(true, "There is no user with that username");
    }
    checkReguests();
    setIsLoading(false);
  };

  const getFollowers = async (user) => {
    const response = await axios(`${rootUrl}/users/${user}/followers`).catch(
      (err) => console.log(err)
    );
    if (response) {
      setGithubFollowers(response.data);
    }
  };

  const getRepos = async (user) => {
    const response = await axios(
      `${rootUrl}/users/${user}/repos?per_page=100`
    ).catch((err) => console.log(err));
    if (response) {
      setGithubRepos(response.data);
    }
  };

  const checkReguests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining }
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "Sorry, you have exeeded your hourly rate limit");
        }
      })
      .catch((error) => console.log(error));
  };

  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  useEffect(checkReguests, []);

  return (
    <GitHubContext.Provider
      value={{
        githubUser,
        githubRepos,
        githubFollowers,
        requests,
        error,
        searchGithubUser,
        isLoading
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export { GithubProvider, GitHubContext };

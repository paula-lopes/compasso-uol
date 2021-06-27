import React, { useState } from "react";
import useRequestData from "hooks/useRequestData";
import api from "constants/api";
import GithubApiContext from "constants/api";

const GithubApiGlobal = (props) => {
  const [user, setUser] = useState({});
  const [starreds, setStarreds] = useState([]);
  const [repos, setRepos] = useState([]);
  

  const username = "paula-lopes";
  const user = useRequestData({}, `${api.baseUrl}/users/${username}`);
  const repos = useRequestData({}, ` ${api.baseUrl}/users/${username}/repos`);
  const starreds = useRequestData(
    {},
    `${api.baseUrl}/users/${username}/starred`
  );
  setUser(user.data);
  setRepos(repos.data);
  setStarreds(starreds.data);

  const data = {
    user,
    starreds,
    repos,
  };

  return (
    <GithubApiContext.Provider value={data}>
      {props.children}
    </GithubApiContext.Provider>
  );
};

export default PokemonsGlobal;

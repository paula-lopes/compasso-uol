import InputSearch from "components/InputSearch";
import { useState } from "react";
import useRequestData from "hooks/useRequestData";
import { baseUrl } from "constants/api";
import { UserContent } from "./styles";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  const result = useRequestData({}, `${baseUrl}/users/${username}`);

  console.log(result);

  const getItemUser = () => {
    return (
      <>
        <p>{user.data && user.data.name}</p>
        <img src={user.data && user.data.avatar_url} />
        <p>{user.data && user.data.company} </p>
        <p>{user.data && user.data.followers} </p>
        <p>{user.data && user.data.following} </p>
      </>
    );
  };

  return (
    <>
      <InputSearch setUsername={setUsername} />
      <UserContent>{getItemUser()}</UserContent>
    </>
  );
};

export default HomePage;

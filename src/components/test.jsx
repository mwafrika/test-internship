// 1. Context API
// 2. Redux
// 3. MobX

// 1. Context API
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const AppTest = () => {
  const [username, setUsername] = useState({
    username: "owais",
    otherUsername: "calvin",
  });

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div className="h-screen text-xl w-full font-bold italic bg-gradient-to-r to-[#E87BF8] from-[#8456EC] flex justify-center flex-col items-center text-white gap-y-5">
        <Welcome />
        <User />
        <OtherUser />
      </div>
    </UserContext.Provider>
  );
};

const User = () => {
  const {
    username: { username },
    setUsername,
  } = useContext(UserContext);
  return (
    <div>
      Username: {username}
      <UsernameEditor username={username} updateUsername={setUsername} />
    </div>
  );
};

const OtherUser = () => {
  const {
    username: { otherUsername },
    setUsername,
  } = useContext(UserContext);
  return (
    <div>
      Other name: {otherUsername}
      <UsernameEditor username={otherUsername} updateUsername={setUsername} />
    </div>
  );
};

const UsernameEditor = ({ username, updateUsername }) => {
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => updateUsername({ username: e.target.value })}
        className="w-[321px] h-[50px] text-[16px] text-[#4F4F4F] leading-[18px] font-light not-italic mt-3 bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-[10px] p-[16px]
        outline-none focus:ring-2 focus:ring-[#8456EC] focus:ring-opacity-50
        "
      />
    </div>
  );
};

const Welcome = () => <h1 className="text-5xl mb-7">Welcome to the page</h1>;

export default AppTest;

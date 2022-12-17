import { createContext, useContext, useState } from "react";
import Test from "./components/test";
const UserContext = createContext();

const AppTest = () => {
  const [username, setUsername] = useState({
    username: "owais",
    otherUsername: "calvin",
  });

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div className="h-screen text-xl w-full font-bold italic bg-gradient-to-r to-[#E87BF8] from-[#8456EC] flex justify-center flex-col items-center text-white gap-y-5">
        <Test />
      </div>
    </UserContext.Provider>
  );
};

export default AppTest;

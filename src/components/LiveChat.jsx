import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addmessage } from "./Redux/chatLive";
import { generateRandomMessage, generateRandomName } from "./utils/helper";

const LiveChat = () => {
  const [livemessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      // console.log("API Poling")
      dispatch(
        addmessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div>
        <div className="text-center font-medium  mx-2  rounded-xl bg-gray-300 animate-pulse border border-black">
          Live Chat
        </div>
        <div className=" mx-2 my-2 w-full h-[420px] bg bg-gray-200 rounded-xl shadow-sm overflow-y-scroll flex flex-col-reverse ">
          {store.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
        <form

          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addmessage({
                name: "Ritik",
                message: livemessage,
              })
            );
            setLiveMessage("");
          }}
          className="mx-4 p-2 rounded-xl bg-gray-100 border border-black "
        >
          <input
            className=" mx-6 px-6 rounded-xl "
            value={livemessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            type="text"
            placeholder="say somthing"
          />
          <button className="bg-gray-300 px-6 mx-4 rounded-xl">send</button>
        </form>
      </div>

     
    </>
  );
};

export default LiveChat;

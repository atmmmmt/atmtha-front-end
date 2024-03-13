import React, { useEffect } from "react";
import ChatCards from "../components/Chats/ChatCards";
import { useDispatch, useSelector } from "react-redux";
import {
  GetMessage,
  // DeleteMessage,
} from "../redux/apiCalls/subscribersApiCall";
// import { getIdCookie } from "../utils/cockies";
export default function Messages() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.users.message);
  // const token = getIdCookie().token;
  useEffect(() => {
    dispatch(GetMessage());
  }, [dispatch]);
  console.log(message);
  const ClickDleteMessage = async (ID) => {
    console.log(`deleteMessage`);
    // dispatch(DeleteMessage(ID));
  };
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="cardsLessons grid grid-cols-3 gap-[40px_60px] mt-[43px]">
        <ChatCards ondelete={() => ClickDleteMessage()} />
        <ChatCards />
        <ChatCards />
        <ChatCards />
        <ChatCards />
      </div>
    </div>
  );
}

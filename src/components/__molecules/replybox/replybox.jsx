import MyProfile from "../../../assets/myprofile.png";
import { useState } from "react";

function ReplyBox(props) {
  const [text, setText] = useState("");

  return (
    <>
      <div className="bg-white p-4 flex gap-5">
        <img
          src={MyProfile}
          className="w-[32px] h-[32px] rounded-full"
          alt=""
        />
        <form action="" className="flex w-full gap-2">
          <textarea
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-[80%] h-[100px] border-[#5357B6] border-2 rounded-[8px] text-left align-top pl-5 pt-2.5 caret-[#5357B6] outline-none"
          />
          <button
            type="button"
            onClick={() => props.replysubmit && props.replysubmit(text)}
            className="w-[104px] h-[48px] bg-[#5357B6] text-[16px] rounded-[8px] text-white hover:opacity-50 cursor-pointer"
          >
            Reply
          </button>
        </form>
      </div>
    </>
  );
}

export default ReplyBox;

import BackArrow from "../../../assets/back.png";
import { useState } from "react";

function WhiteBox(props) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.text);
  const [displayText, setDisplayText] = useState(props.text);

  return (
    <>
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-[380px] w-full mx-4 shadow-xl">
            <p className="text-[#334253] text-[20px] font-bold mb-3">
              Delete comment
            </p>
            <p className="text-[#67727E] text-[15px] mb-6 leading-relaxed">
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 py-3 bg-[#67727E] text-white font-bold rounded-lg hover:opacity-70 uppercase text-[14px]"
              >
                No, Cancel
              </button>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  props.deleteclick();
                }}
                className="flex-1 py-3 bg-[#ED6368] text-white font-bold rounded-lg hover:opacity-70 uppercase text-[14px]"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[700px] bg-white w-full p-4 pb-10 flex gap-5 justify-start items-start rounded-lg relative md:h-auto gg:h-[300px]">
        <div className="w-[40px] h-[100px] flex gap-1 flex-col justify-center items-center bg-[#F5F6FA] rounded-[10px] gg:absolute gg:top-55 gg:left-[15%] gg:-rotate-90">
          <p
            onClick={props.plusclick}
            className="text-[#C5C6EF] text-[16px] font-bold cursor-pointer hover:text-[#5357B6] gg:rotate-90"
          >
            +
          </p>
          <p className="text-[#5357B6] text-[16px] font-bold gg:rotate-90">
            {props.number}
          </p>
          <p
            onClick={props.minusclick}
            className="text-[#C5C6EF] text-[16px] font-bold cursor-pointer hover:text-[#5357B6] gg:rotate-90"
          >
            -
          </p>
        </div>
        <div className="w-full flex flex-col gap-1.5 justify-start items-start">
          <div className="flex gap-2 justify-start items-center">
            <img
              src={props.profile}
              alt=""
              className="rounded-full w-[32px] h-[32px]"
            />
            <p className="text-[#334253] text-[16px] font-bold">{props.name}</p>
            <p className="text-[#67727E] text-[16px] font-normal">
              {props.date}
            </p>
          </div>

          {isEditing ? (
            <div className="w-full flex flex-col gap-2 mt-1">
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full h-[100px] border-[#5357B6] border-2 rounded-[8px] pl-3 pt-2 text-[#67727E] text-[15px] outline-none caret-[#5357B6] resize-none"
              />
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setDisplayText(editText);
                    setIsEditing(false);
                    props.editsubmit && props.editsubmit(editText);
                  }}
                  className="bg-[#5357B6] text-white text-[14px] font-bold px-5 py-2 rounded-lg hover:opacity-70"
                >
                  Update
                </button>
              </div>
            </div>
          ) : (
            <p className="text-[#67727E] text-[16px] font-[400] w-full  break-all">
              {displayText}
            </p>
          )}

          {props.isOwn ? (
            <div className="flex gap-4 absolute bottom-[5px] right-[5%]  md:bottom-[5px] md:left-[10%] gg:left-[50%]">
              <div
                onClick={() => setShowDeleteModal(true)}
                className="flex justify-center items-center gap-1.5 cursor-pointer  "
              >
                <p className="text-[#ED6368] text-[16px] font-bold">Delete</p>
              </div>
              <div
                onClick={() => {
                  setIsEditing(true);
                  setEditText(displayText);
                }}
                className="flex justify-center items-center gap-1.5 cursor-pointer"
              >
                <p className="text-[#5357B6] text-[16px] font-bold">Edit</p>
              </div>
            </div>
          ) : (
            <div
              onClick={props.replyclick}
              className="flex justify-center items-center gap-1.5 absolute top-8 right-[5%] cursor-pointer md:top-5 gg:top-[85%]"
            >
              <img src={BackArrow} alt="backarrow" />
              <p className="text-[#5357B6] text-[16px] font-bold">Reply</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WhiteBox;

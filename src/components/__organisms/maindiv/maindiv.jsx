import WhiteBox from "../../__molecules/whitebox/whitebox";
import ProfileWoman from "../../../assets/profilewoman.png";
import ProfileMan from "../../../assets/profileman.png";
import MyProfile from "../../../assets/profile.jpg";
import { useState, useEffect } from "react";
import ReplyBox from "../../__molecules/replybox/replybox";

function MainDiv() {
  const [num, setNum] = useState(12);
  const [num1, setNum1] = useState(6);
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);

  const [showReply, setShowReply] = useState(null);

  const [replies1, setReplies1] = useState(() => {
    const saved = localStorage.getItem("replies1");
    return saved ? JSON.parse(saved) : [];
  });

  const [replies2, setReplies2] = useState(() => {
    const saved = localStorage.getItem("replies2");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("replies1", JSON.stringify(replies1));
  }, [replies1]);

  useEffect(() => {
    localStorage.setItem("replies2", JSON.stringify(replies2));
  }, [replies2]);

  function addReply1(text) {
    const newReplies = replies1.slice();
    newReplies.push({ text: text, date: Date.now() });
    setReplies1(newReplies);
    setShowReply(null);
  }

  function addReply2(text) {
    const newReplies = replies2.slice();
    newReplies.push({ text: text, date: Date.now() });
    setReplies2(newReplies);
    setShowReply(null);
  }

  return (
    <>
      <div className="flex gap-6 flex-col">
        <WhiteBox
          profile={ProfileWoman}
          number={num}
          plusclick={() => {
            if (value == 0) {
              setNum(num + 1);
              setValue(1);
            }
          }}
          minusclick={() => {
            if (value > 0) {
              setNum(num - 1);
              setValue(0);
            }
          }}
          replyclick={() => setShowReply(showReply === 1 ? null : 1)}
          date="1 month ago"
          name="amyrobson"
          text="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
        />

        {showReply === 1 && (
          <ReplyBox replysubmit={(text) => addReply1("@amyrobson " + text)} />
        )}

        <div className="flex flex-col gap-6 ml-16 pl-6 border-l-2 border-[#F5F6FA]">
          {replies1.map((reply, i) => (
            <WhiteBox
              key={i}
              profile={MyProfile}
              number={0}
              date={new Date(reply.date).toLocaleDateString()}
              name="Gkostava03"
              text={reply.text}
              isOwn={true}
              deleteclick={() => {
                const newReplies = replies1.slice();
                newReplies.splice(i, 1);
                setReplies1(newReplies);
              }}
              editsubmit={(newText) => {
                const updated = replies1.slice();
                updated[i] = { text: newText, date: updated[i].date };
                setReplies1(updated);
              }}
            />
          ))}
        </div>

        <WhiteBox
          profile={ProfileMan}
          number={num1}
          plusclick={() => {
            if (value1 == 0) {
              setNum1(num1 + 1);
              setValue1(1);
            }
          }}
          minusclick={() => {
            if (value1 > 0) {
              setNum1(num1 - 1);
              setValue1(0);
            }
          }}
          date="2 weeks ago"
          name="maxblagun"
          text="Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
          replyclick={() => setShowReply(showReply === 2 ? null : 2)}
        />

        {showReply === 2 && (
          <ReplyBox replysubmit={(text) => addReply2("@maxblagun " + text)} />
        )}

        <div className="flex flex-col gap-6 ml-16 pl-6 border-l-2 border-[#F5F6FA]">
          {replies2.map((reply, i) => (
            <WhiteBox
              key={i}
              profile={MyProfile}
              number={0}
              date={new Date(reply.date).toLocaleDateString()}
              name="Gkostava03"
              text={reply.text}
              isOwn={true}
              deleteclick={() => {
                const newReplies = replies2.slice();
                newReplies.splice(i, 1);
                setReplies2(newReplies);
              }}
              editsubmit={(newText) => {
                const updated = replies2.slice();
                updated[i] = { text: newText, date: updated[i].date };
                setReplies2(updated);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainDiv;

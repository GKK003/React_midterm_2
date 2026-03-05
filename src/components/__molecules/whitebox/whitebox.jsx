import BackArrow from "../../../assets/back.png";

function WhiteBox(props) {
  return (
    <div className="max-w-[700px] bg-white h-[167px] w-full p-4 flex gap-5 justify-start items-center rounded-lg relative md:h-[250px] gg:h-[300px]">
      <div className="w-[40px] h-[100px] flex gap-1 flex-col justify-center items-center bg-[#F5F6FA] rounded-[10px] gg:absolute gg:top-55 gg:left-[15%] gg:-rotate-90">
        <p className="text-[#C5C6EF] text-[16px] font-bold gg:rotate-90">+</p>
        <p className="text-[#5357B6] text-[16px] font-bold gg:rotate-90">
          {props.number}
        </p>
        <p className="text-[#C5C6EF] text-[16px] font-bold gg:rotate-90">-</p>
      </div>

      <div className="w-full flex flex-col gap-1.5 justify-start items-start">
        <div className="flex gap-2 justify-start items-center">
          <img
            src={props.profile}
            alt=""
            className="rounded-full w-[32px] h-[32px]"
          />
          <p className="text-[#334253] text-[16px] font-bold">{props.name}</p>
          <p className="text-[#67727E] text-[16px] font-normal">{props.date}</p>
        </div>

        <p className="text-[#67727E] text-[16px] font-[400] w-full">
          {props.text}
        </p>

        <div className="flex justify-center items-center gap-1.5 absolute top-8 right-[5%] md:top-5 gg:top-[85%]">
          <img src={BackArrow} alt="backarrow" />
          <p className="text-[#5357B6] text-[16px] font-bold">Reply</p>
        </div>
      </div>
    </div>
  );
}

export default WhiteBox;

import WhiteBox from "../../__molecules/whitebox/whitebox";
import ProfileWoman from "../../../assets/profilewoman.png";
import ProfileMan from "../../../assets/profileman.png";

function MainDiv() {
  return (
    <>
      <div className="flex gap-6 flex-col">
        <WhiteBox
          profile={ProfileWoman}
          number="12"
          date="1 month ago"
          name="amyrobson"
          text="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well."
        />
        <WhiteBox
          profile={ProfileMan}
          number="6"
          date="2 weeks ago"
          name="maxblagun"
          text="Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
        />
      </div>
    </>
  );
}

export default MainDiv;

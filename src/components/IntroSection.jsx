import curveBg from "../assets/curve-bg@2x.png";

const IntroSection = () => {
  return (
    <div class="relative text-white py-36 px-24 -mt-6 z-10 flex flex-col justify-center items-start font-thick">
      <div class="text-4.5xl font-bold">
        Thank God! You Scroll Down than Swiping Right,
      </div>
      <div class="text-2.5xl">
        Just like you do always! (Psst...have you deleted those apps?)
      </div>
      <div class="text-2xl mt-16">
        Jokes apart and cut to the chase, We didn’t expect you to
        <br /> be this brave to get married this soon, but here we are! <br />{" "}
        Bravo! Now you give our parents one more reason to <br /> coax us into
        getting married. But Kudos to your Courage!
        <br /> And Khathija, thank you for marrying this absolutely
        <br />
        amazing friend of ours, now we can finally get rid of him! <br /> Macha,
        we have TWO cars still waiting nearby your <br />
        location in case you change your mind! You've got this <br />
        one last chance to escape. If not.....
      </div>
      <img
        class="absolute top-0 left-0 -z-10 h-full"
        src={curveBg}
        alt=""
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default IntroSection;

import curveBg from "../assets/curve-bg@2x.png";

const IntroSection = () => {
  return (
    <div class="relative text-white px-4 py-32 lg:py-36 lg:px-24 lg:-mt-6 z-10 flex flex-col justify-center items-start font-thick">
      <div class="text-2.5xl lg:text-4.5xl font-thick">
        Thank God! You Scroll Down than Swiping Right,
      </div>
      <div class="lg:ml-3 mt-4">
        <div class="text-xl lg:text-2.5xl">
          Just like you do always! (Psst...have you deleted those apps?)
        </div>
        <div class="text-lg lg:text-2xl mt-8 lg:mt-16 lg:leading-10">
          Jokes apart and cut to the chase, We didn’t expect you to
          <br class="lg:block hidden" /> be this brave to get married this soon,
          but here we are! <br class="lg:block hidden" />
          Bravo! Now you give our parents one more reason to{" "}
          <br class="lg:block hidden" /> coax us into getting married. But Kudos
          to your Courage!
          <br class="lg:block hidden" /> And Khathija, thank you for marrying
          this absolutely
          <br class="lg:block hidden" />
          amazing friend of ours, now we can finally get rid of him!{" "}
          <br class="lg:block hidden" />
          Macha, we have TWO cars still waiting nearby your{" "}
          <br class="lg:block hidden" />
          location in case you change your mind! You've got this{" "}
          <br class="lg:block hidden" />
          one last chance to escape. If not.....
        </div>
      </div>
      <img
        class="absolute top-0 left-0 -z-10 h-full object-cover lg:object-fill"
        src={curveBg}
        alt=""
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default IntroSection;

import concludeBgImg from "../assets/conclude-bg.png";

const ConcludeSection = () => {
  return (
    <div class="mx-4 lg:mx-24">
      <div class="relative rounded-3xl p-5 lg:p-10 bg-usefulGradient text-white text-base lg:text-4xl font-thick text-center">
        The whole context is Pun Intended & It’s not an
        <br class="hidden lg:block" /> attempt to disappoint (or) hurt the
        feelings of anyone!
        <div class="absolute top-0 left-0 w-full h-full -z-1">
          <img src={concludeBgImg} alt="" height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default ConcludeSection;

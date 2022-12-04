import footerCurve from "../assets/footer-curve@3x.png";

const FooterSection = () => {
  return (
    <div class="relative w-full flex justify-between items-center mt-20">
      <div class="flex justify-between px-24 text-xl font-thick my-16 text-black h-full">
        <div class="mr-40 max-w-[33%]">
          Congratulations for traveling from start to the end of this page!
          We’ll add 10,000 steps to your fitness tracker! You should be so
          active & super fit these days! IYKYK 🙂
        </div>
        <div class="pt-[8%] max-w-[40%]">
          Made with❤️ by the Groom’s Gang - Mithun, Anusha, Hassan & Ishu!
        </div>
      </div>
      <div class="absolute w-full h-full -z-10">
        <img src={footerCurve} alt="" height="100%" width="100%" />
      </div>
    </div>
  );
};

export default FooterSection;

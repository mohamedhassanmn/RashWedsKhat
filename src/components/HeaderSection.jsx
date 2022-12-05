import RazhImage1x from "../assets/razhWedKhat-logo@1x.png";
import RazhImage2x from "@/assets/razhWedKhat-logo@2x.png";
import RazhImage3x from "@/assets/razhWedKhat-logo@3x.png";
import { extraDecorativeText } from "@/utils/cssUtils";

const HeaderSection = () => {
  return (
    <div class="h-auto lg:h-[610px] flex flex-col md:flex-row justify-end items-start md:px-10 max-w-7xl m-auto">
      <div class="w-full lg:w-auto lg:mr-6 lg:mt-64 order-last lg:order-first text-center lg:text-left">
        <div class="text-2.5xl lg:text-3.5xl font-thick pt-4 md:pt-0">
          Congrats! You
          <span class="">
            <span class={extraDecorativeText}> Two </span>
          </span>
          Have <br />
          Officially Become<span class={extraDecorativeText}> One:</span>
        </div>
        <div class="mt-2.5 text-xl lg:text-2.5xl font-thick">
          One Bed, One TV, One Bathroom!
        </div>
        <div class="text-base lg:text-xl mt-10 lg:mt-20 font-thick">
          And, We Have ONE Small Gift
          <br class="block lg:hidden" /> To Your Union!
        </div>
      </div>
      <div class="w-full lg:w-[617px]">
        <img
          src={RazhImage1x}
          srcset={`${RazhImage1x} 1x, ${RazhImage2x} 2x, ${RazhImage3x} 3x`}
          alt="hero-pic"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default HeaderSection;

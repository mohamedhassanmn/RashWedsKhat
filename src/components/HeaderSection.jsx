import RazhImage1x from "../assets/razhWedKhat-logo@1x.png";
import RazhImage2x from "../assets/razhWedKhat-logo@2x.png";
import RazhImage3x from "../assets/razhWedKhat-logo@3x.png";
import { extraDecorativeText } from "../utils/cssUtils";

const HeaderSection = () => {
  return (
    <div class="h-auto md:h-[610px] flex flex-col md:flex-row justify-between items-center px-24 md:pl-24">
      <div class="order-last md:order-first flex justify-center flex-col">
        <div class="text-3.5xl font-thick pt-4 md:pt-0 text-left">
          Congrats! You
          <span class="">
            <span class={extraDecorativeText}> Two </span>
          </span>
          have <br />
          Officially become<span class={extraDecorativeText}> One:</span>
        </div>
        <div class="mt-2.5 text-2xl md:text-2.5xl font-thick">
          One bed, One tV, One bathroom!
        </div>
        <div class="text-lg md:text-xl mt-5 md:mt-43.5 font-thick">
          And, we have ONE small gift to your union!
        </div>
      </div>
      <div class="h-full w-full md:w-[617px]">
        <img
          src={RazhImage1x}
          srcset={`/${RazhImage1x} 1x, ${RazhImage2x} 2x, ${RazhImage3x} 3x`}
          alt="hero-pic"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default HeaderSection;

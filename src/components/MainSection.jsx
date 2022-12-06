import { Show, For, createSignal } from "solid-js";

import ModalConformation from "@/components/ModalConformation";

import { extraDecorativeText } from "@/utils/cssUtils";
import { resorts } from "@/utils/dataFile";

const MainSection = () => {
  const [conformBooking, setConformBooking] = createSignal(false);
  const [selectedResort, setSelectedResort] = createSignal({});
  const handleResortClick = (resort) => {
    setSelectedResort(resort);
    setConformBooking(true);
  };
  return (
    <div class="">
      <Show when={conformBooking()}>
        <ModalConformation
          setConformBooking={setConformBooking}
          selectedResort={selectedResort()}
        />
      </Show>
      <div class="px-4 py-8 lg:py-20 lg:px-24 max-w-7xl m-auto">
        <div class={`text-2xl lg:text-4.5xl font-thick ${extraDecorativeText}`}>
          Do it on the Couch, Sofa or on the <br class="hidden lg:block" />{" "}
          Dining Table
        </div>
        <div class="py-4 font-thick text-lg lg:text-xl">
          Book your ONE Day Stay from Anywhere & it's a gift from us
        </div>
        <div class="flex w-full flex-wrap mt-10 justify-center">
          <For each={resorts}>
            {(resort, i) => {
              const handleClick = () => handleResortClick(resort);
              return (
                <div
                  onClick={handleClick}
                  class={`relative h-[220px] lg:h-[440px] rounded-3xl bg-cover bg-center text-white w-full lg:w-[40%] mb-6 cursor-pointer ${
                    i % 2 == 0 ? "lg:ml-6" : "lg:mr-6"
                  }`}
                  style={{ "background-image": `url(${resort.url})` }}
                >
                  <div class="absolute top-0 left-0 text-lg bg-black/40 h-full w-full pl-5 lg:pl-10 rounded-3xl flex flex-col justify-end pb-4">
                    <div class="font-thick">{resort.resortName}</div>
                    <div class="mt mb-4">{resort.description}</div>
                    <div class="text-white bg-ctaGradient rounded-full px-5 py-2.5 w-fit text-sm lg:text-base font-thick">
                      Book Now
                    </div>
                  </div>
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </div>
  );
};

export default MainSection;

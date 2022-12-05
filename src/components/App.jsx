import { createSignal, Show } from "solid-js";
import ConcludeSection from "@/components/ConcludeSection";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import IntroSection from "@/components/IntroSection";
import MainSection from "@/components/MainSection";
import ModalConformation from "@/components/ModalConformation";

const App = () => {
  const [conformBooking, setConformBooking] = createSignal(false);
  return (
    <div class="bg-customerBg overflow-hidden relative">
      <Show when={conformBooking()}>
        <ModalConformation setConformBooking={setConformBooking} />
      </Show>
      <HeaderSection />
      <IntroSection />
      <MainSection setConformBooking={setConformBooking} />
      <ConcludeSection />
      <FooterSection />
    </div>
  );
};

export default App;

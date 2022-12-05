import ConcludeSection from "@/components/ConcludeSection";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import IntroSection from "@/components/IntroSection";
import MainSection from "@/components/MainSection";
import ModalConformation from "@/components/ModalConformation";

const App = () => {
  return (
    <div class="bg-customerBg overflow-hidden relative">
      {/* <ModalConformation /> */}
      <HeaderSection />
      <IntroSection />
      <MainSection />
      <ConcludeSection />
      <FooterSection />
    </div>
  );
};

export default App;

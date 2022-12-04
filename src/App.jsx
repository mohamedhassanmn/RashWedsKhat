// @refresh reload

import ConcludeSection from "./components/ConcludeSection";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/headerSection";
import IntroSection from "./components/IntroSection";
import MainSection from "./components/MainSection";
import ModalConformation from "./components/ModalConformation";

const App = () => {
  return (
    <div class="md:px-28 bg-customerBg overflow-hidden relative">
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

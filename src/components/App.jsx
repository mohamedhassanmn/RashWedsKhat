// @refresh reload

import ConcludeSection from "./ConcludeSection";
import FooterSection from "./FooterSection";
import HeaderSection from "./headerSection";
import IntroSection from "./IntroSection";
import MainSection from "./MainSection";
import ModalConformation from "./ModalConformation";

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

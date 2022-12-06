import { onMount } from "solid-js";
import ConcludeSection from "@/components/ConcludeSection";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import IntroSection from "@/components/IntroSection";
import MainSection from "@/components/MainSection";

const App = () => {
  onMount(() => {
    window.dataLayer = window?.dataLayer || [];
  });

  return (
    <div class="bg-customerBg overflow-hidden relative">
      <HeaderSection />
      <IntroSection />
      <MainSection />
      <ConcludeSection />
      <FooterSection />
    </div>
  );
};

export default App;

import { For } from "solid-js";
import { extraDecorativeText } from "../utils/cssUtils";

const MainSection = ({ setConformBooking }) => {
  const resorts = [
    {
      resortName: "Anora Beach Resort, Chennai ",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/61i5hxyix1wn9a4po8d6i6iqk3c5_1589606842_anora2.png",
      description: "This place is awesome",
    },
    {
      resortName: "Mamalla Beach Resort, Chennai",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/ddlbxzttv9kifr9can2cqr70k5ce_mamalla-beach-resort.jpg",
      description: "",
    },
    {
      resortName: "Green Coconut Resort, Chennai",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/5yh9hczwmigdnlrqae6hmxs7817i_1592568649_60383875.jpg",
      description: "",
    },
    {
      resortName: "Hudson Resort, Chennai",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/hscw2s0pc929mqr13ujqfxr1u48v_1589864101_hudson-hotels-resorts_%284%29.jpg",
      description: "",
    },
    {
      resortName: "Cours Chabrol, Pondicherry",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/kb5qoynddx7q22m2a39x7cn56a2e_40414207.jpg",
      description: "",
    },
    {
      resortName: "Mermaid Island Beach Resort, Pondicherry",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/zikfcb0dwyn9hxxp4tqbgyzq5aou_mermaid.jpg",
      description: "",
    },
    {
      resortName: "Le Royal Park, Pondicherry",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/8gdijpahz2bdgbj44o7k5affrdeu_77597101.jpg",
      description: "",
    },
    {
      resortName: "Sunway Manor, Pondicherry",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/v3pcwy1g1tx9482uym5cendf0exb_new.jpg",
      description: "",
    },
    {
      resortName: "Once Upon The River, Kochi",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/ivw1u4yhdcma8j30slkpp0u7gkea_once5.png",
      description: "",
    },
    {
      resortName: "Rivulet Resort, Munnar",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/cidc2877h4h7jpuz0ze4207icux9_333.jpg",
      description: "",
    },
    {
      resortName: "The Fog Munnar Resorts & Spa",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/zyeu5t3kd3obbhtrw5glr7hhsnhh_img-45.jpg",
      description: "",
    },
    {
      resortName: "Kondai Lip Backwater Heritage Resort, Alleppey",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/o53nj3gf652lvqnh3pps9n1j4ygj_1593260094_31104764.jpg",
      description: "",
    },
    {
      resortName: "Abad Brookside Resort, Wayanad",
      url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/jyoio5gyet53ljakym04vtfkrqiz_340438189.jpg",
      description: "",
    },
  ];
  return (
    <div class="px-4 py-8 lg:py-20 lg:px-24 max-w-7xl m-auto">
      <div class={`text-2xl lg:text-4.5xl font-thick ${extraDecorativeText}`}>
        Do it on the Couch, Sofa or on the <br class="hidden lg:block" /> Dining
        Table
      </div>
      <div class="py-4 font-thick text-lg lg:text-xl">
        Book your ONE Day Stay from Anywhere & it's a gift from us
      </div>
      <div class="flex w-full flex-wrap mt-10 justify-center">
        <For each={resorts}>
          {(resort, i) => (
            <div
              onClick={() => {
                setConformBooking(true);
              }}
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
          )}
        </For>
      </div>
    </div>
  );
};

export default MainSection;

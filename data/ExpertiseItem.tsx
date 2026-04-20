export interface ExpertiseItem {
  number: string;
  title: string;
  short_description: string;
  description: string;
  video: string;
  tagline: string;
  button: string;
  btn_bg_color: string;
  card_bg_color: string;
  color: string;
  icon_bg: string;
  icon_text: string;
}

export const expertiseData: ExpertiseItem[] = [
  {
    number: "01",
    title: "Social strategy",
    short_description: "Slimme strategie. Sterke start.",
    description:
      "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    video: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
    tagline: "Expertise",
    btn_bg_color: "#fa5424",
    card_bg_color: "#FFFFFF",
    color: "#FFFFFF",
    icon_bg: "#FFFFFF",
    icon_text: "#161616",
    button: "Meer over social strategie",
  },
  {
    number: "02",
    title: "Content Creation",
    short_description: "Content die opvalt en raakt.",
    description:
      " We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    video: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
    btn_bg_color: "#FFFFFF",
    card_bg_color: "#fcb8fa",
    color: "#161616",
    icon_bg: "#161616",
    icon_text: "#FFFFFF",
    tagline: "Creative Production",
    button: "Meer over Content Creation",
  },
  {
    number: "03",
    title: "Activation",
    short_description: "Zichtbaar waar en wanneer het telt.",
    description:
      "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen.",
    video: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
    btn_bg_color: "#FFFFFF",
    card_bg_color: "#33C791",
    color: "#161616",
    icon_bg: "#161616",
    icon_text: "#FFFFFF",
    tagline: "Multi-channel Distribution",
    button: "Meer over activation",
  },
  {
    number: "04",
    title: "Data",
    short_description: "Inzichten die impact maken.",
    description:
      "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    video: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
    btn_bg_color: "#FFFFFF",
    card_bg_color: "#0D8DFF",
    color: "#161616",
    icon_bg: "#161616",
    icon_text: "#FFFFFF",
    tagline: "Analytics & Optimization",
    button: "Meer over data",
  },
];

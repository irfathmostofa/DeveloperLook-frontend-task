export interface portfolio {
  id: number;
  title: string;
  brand: string;
  imageUrl: string;
  videoUrl: string;
  link: string;
  color: string;
}

export const PortfolioData: portfolio[] = [
  {
    id: 1,
    title: "Van nul naar vol, binnen 3 weken",
    brand: "Bullit",
    imageUrl:
      "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69c3d06cc7a0b07e150a671d_Bullit%20branded%20placeholder_2.1.1.avif",
    videoUrl: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4",
    link: "/work/bullit",
    color: "from-[#fa5424]",
  },
  {
    id: 2,
    title: "Zacht in smaak, sterk in beeld",
    brand: "Roasta",
    imageUrl:
      "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716a54a3bf63bf25c2ae92_roasta-placeholder.avif",
    videoUrl: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4",
    link: "/work/roasta",
    color: "from-[#0d8dff]",
  },
  {
    id: 3,
    title: "Content die écht smaakt (en raakt)",
    brand: "Loco",
    imageUrl:
      "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716b4e8982337b1d3d1bd7_loco-loco-placeholder.avif",
    videoUrl: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
    link: "/work/loco-loco",
    color: "from-[#33c791]",
  },
];

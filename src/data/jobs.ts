import type { ServiceCategory } from "./services";

export type Job = {
  id: string;
  category: ServiceCategory;
  title: string;
  alt: string;
  image: string;
};

export const JOBS: Job[] = [
  {
    id: "cleaning-leaves",
    category: "cleaning",
    title: "Leaves and debris packed in a neglected gutter",
    alt: "Close-up of dry leaves and debris filling a residential gutter",
    image: "/images/jobs/cleaning/leavesingutter.jpg",
  },
  {
    id: "installation-tile",
    category: "installation",
    title: "Seamless gutter on a tile-roof home",
    alt: "Newly installed seamless gutter running along a Spanish tile roof",
    image: "/images/jobs/installation/gutter.jpg",
  },
  {
    id: "repair-soffit",
    category: "repair",
    title: "Re-secured gutter and soffit on a brick home",
    alt: "Gutter and ventilated soffit detail on the corner of a brick home",
    image: "/images/jobs/repair/undergutter.jpg",
  },
  {
    id: "pressure-washing-canopy",
    category: "pressure-washing",
    title: "After-hours pressure wash at a local gas station",
    alt: "Gutter-It crew member pressure washing a gas station canopy at night, steam rising",
    image: "/images/jobs/pressure-washing/pressurewashing.jpg",
  },
];

/* eslint-disable max-len */

export type Program = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  target: string | undefined;
};

export const workshops: Program[] = [
  {
    id: 1,
    title: ` İnşaat`,
    description: `İstanbul Özdebir İnşaat & Çilingir Referanslarımız`,
    image: "/images/referanslar/",
    url: "https://emsainsaat/",
    target: "_blank",
  },
].sort(() => new Date().getTime() - new Date().getTime());

export const events: Program[] = [];

export const exhibitions: Program[] = [];

export const programs: Program[] = [
  ...workshops,
  ...events,
  ...exhibitions,
].sort(() => new Date().getTime() - new Date().getTime());

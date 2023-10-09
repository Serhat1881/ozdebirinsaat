import type { IconProps } from "@/components/miscellaneous/Icon";

type Social = {
  name: string;
  platform: IconProps["iconName"];
  href: string;
};

export const socials: Social[] = [
  {
    name: "ozdebirinsaat",
    platform: "instagram",
    href: "https://www.instagram.com/ozdebirinsaat/",
  },
];

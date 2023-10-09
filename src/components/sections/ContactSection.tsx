import { Stack } from "@mui/material";
import React from "react";

import InformationWithIcon from "../cards/InformationWithIcon";

const ContactSection: React.FC = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      justifyContent="center"
    >
      <InformationWithIcon
        iconName="phone"
        phoneName="Fuat Erdağ"
        text="0542 278 21 34"
        link="tel:+905422782134"
      />

      <InformationWithIcon
        iconName="phone"
        phoneName="Zeki Erdağ"
        text="0000 000 00 00"
        link="tel:+900000000000"
      />

      <InformationWithIcon
        iconName="whatsapp"
        text="Fuat Erdağ"
        link="https://wa.me/905422782134"
        target="_blank"
      />

      <InformationWithIcon iconName="location" text="İstanbul" />

      <InformationWithIcon
        iconName="message"
        text="ozdebirinsaat@gmail.com"
        link="mailto:ozdebirinsaat@gmail.com"
        target="_blank"
      />
    </Stack>
  );
};

export default ContactSection;

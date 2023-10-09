import { Stack } from "@mui/material";
import React, { useState } from "react";

import Icon from "./Icon";

type ShareProps = {
  url: string;
  title: string;
};

const Share: React.FC<ShareProps> = () => {
  const [hoveredItem, setHoveredItem] = useState("");

  const handleIconClick = (platform: string) => {
    switch (platform) {
      case "phone":
        window.open("tel:+905364953074");
        break;
      case "whatsapp":
        window.open("https://wa.me/905364953074");
        break;
      case "message":
        window.open("mailto:ozdebirinsaat@gmail.com");
        break;
      case "location":
        window.open("/iletisim");
        break;
      default:
        break;
    }
  };

  return (
    <Stack direction="row" paddingTop={2} paddingBottom={4} spacing={1}>
      <Icon
        onClick={() => handleIconClick("phone")}
        iconName="phone"
        color={hoveredItem === "phone" ? "black" : "shareIconColor"}
        sx={{
          width: 40,
          height: 40,
          border: "1px solid",
          borderColor: "shareIconColor",
          padding: 1,
          cursor: "pointer",
        }}
        onMouseEnter={() => setHoveredItem("phone")}
        onMouseLeave={() => setHoveredItem("")}
      />

      <Icon
        onClick={() => handleIconClick("whatsapp")}
        iconName="whatsapp"
        color={hoveredItem === "whatsapp" ? "black" : "shareIconColor"}
        sx={{
          width: 40,
          height: 40,
          border: "1px solid",
          borderColor: "shareIconColor",
          padding: 1,
          cursor: "pointer",
        }}
        onMouseEnter={() => setHoveredItem("whatsapp")}
        onMouseLeave={() => setHoveredItem("")}
      />

      <Icon
        onClick={() => handleIconClick("message")}
        iconName="message"
        color={hoveredItem === "message" ? "black" : "shareIconColor"}
        sx={{
          width: 40,
          height: 40,
          border: "1px solid",
          borderColor: "shareIconColor",
          padding: 1,
          cursor: "pointer",
        }}
        onMouseEnter={() => setHoveredItem("message")}
        onMouseLeave={() => setHoveredItem("")}
      />

      <Icon
        onClick={() => handleIconClick("location")}
        iconName="location"
        color={hoveredItem === "location" ? "black" : "shareIconColor"}
        sx={{
          width: 40,
          height: 40,
          border: "1px solid",
          borderColor: "shareIconColor",
          padding: 1,
          cursor: "pointer",
        }}
        onMouseEnter={() => setHoveredItem("location")}
        onMouseLeave={() => setHoveredItem("")}
      />
    </Stack>
  );
};

export default Share;

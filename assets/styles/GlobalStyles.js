import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
body{
  ${tw`text-icons bg-bar `};
}

.dark{
 --main: #5eb5f8;
--text: #fefdff;

  --bar: #363644;
  --hover: #ff8e9a;
  --inactive: #676976;
  
  --panel: #373a46;
  --elements: #3c3c4d;
  --searchbar: #3c3c4d;
  --searchbarText: #8c8d96;
  --dev: #f5427b;
  --icons:#ffffff;
}
.light {
  --bar: #e2e1e8;
  --panel: #edebf8;
  --inactive: #999eaf;
  --elements: #DDDBE7;
  --icons:#000000
  --searchbar: #3c3c4d;
  --searchbarText: #8c8d96;
}
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;

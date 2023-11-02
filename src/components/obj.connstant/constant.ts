import { ColorName } from "./constant.modal";

export const Color: ColorName = {
  Black: "#000000",
  White: "FFFFFF",
  Green: "#c9dc61",
  Blue: "#11b1c9",
  gray: "#808080",
  Turquoise: "#66beab",
};

export enum FontFamily {
  Primary = "Riick",
}

export const HeaderHeight = {
  Mobile: "64px",
  Desktop: "80px",
};

export const Border = {
  Color: Color.Black,
  Width: {
    Small: "2px",
    Medium: "4px",
  },
  Radius: {
    Small: "5px",
    Medium: "10px",
    Large: "20px",
  },
};

export const Padding = {
  Medium: "15px",
  Large: "0 120px 0 120px",
};

export const FontSize = {
  Small: "14px",
  Medium: "24px",
  Large: "34px",
  XLarge: "100px",
};

export const HeightSeparator = {
  Small: "20px",
  Medium: "30px",
  Large: "40px",
};

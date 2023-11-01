import styled from "styled-components";
import { Border, Color, FontFamily, FontSize, Padding } from "../obj.connstant/constant";

export const BannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.gray};
  padding: ${Padding.Medium};
  border-radius: ${Border.Radius.Medium};
  text-align: center;
  width: 600px;
  box-shadow: 0 4px 30px rgb(1 1 1);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const SpanStyled = styled.span`
  font-size: ${FontSize.Medium};
  font-family: ${FontFamily.Primary};
`;

export const Wrapperinfo = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 297px;
  border: ${Border.Width.Small} solid ${Color.Black};
  border-radius: ${Border.Radius.Small};
  margin: 10px;
`;

export const ImageStyled = styled.img`
  border-radius:${Border.Radius.Small};
  border: ${Border.Width.Small} solid;
`;

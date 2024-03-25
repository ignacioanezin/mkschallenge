// Dashboard.styles.ts

import styled from "styled-components";

export const DashboardPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  overflow-y: auto;
  background-color: ${(props) => props.theme.colors.neutral.bg};
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  gap: 20px;
  box-sizing: border-box;
  margin-top: -240px;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const TopPattern = styled.div`
  width: 100%;
  min-height: 270px;
  background-color: ${(props) => props.theme.colors.neutral.topBgPattern};
  align-items: center;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 20px; 
  justify-content: space-between;
  height: fit-content;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row ;
  }
`;

interface FlexContainerProps {
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  flexDirection?: string;
  widthMobile?: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  gap: ${(props) => props.gap || "0"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  width: ${(props) => props.widthMobile || "100%"};
`;

interface GridContainerProps {
  gapMobile?: string;
  gapTablet?: string;
  gapDesktop?: string;
  paddingMobile?: string;
  paddingTablet?: string;
  paddingDesktop?: string;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: 1fr;
  gap: ${(props) => props.gapMobile || "0"};
  padding: ${(props) => props.paddingMobile || "0"};

  @media (min-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${(props) => props.gapTablet || "0"};
    padding: ${(props) => props.paddingTablet || "0"};
  }

  @media (min-width: 1024px) {
    
    grid-template-columns: repeat(auto-fit, minmax(254px, 1fr));
    gap: ${(props) => props.gapDesktop || "0"};
    padding: ${(props) => props.paddingDesktop || "0"};
  }

  @media (min-width: 1444px) {
    
    grid-template-columns: repeat( 4, 1fr);
    gap: ${(props) => props.gapDesktop || "30"};
    padding: ${(props) => props.paddingDesktop || "0"};
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
`;

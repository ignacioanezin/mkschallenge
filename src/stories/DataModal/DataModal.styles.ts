import styled from 'styled-components';

interface ModalBackgroundProps {
  isOpen: boolean;
}

export const ModalBackground = styled.div<ModalBackgroundProps>`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1000; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: relative;
background-color: ${(props) => props.theme.colors.neutral.cardBg};
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 90%;
 height: 90%; 
  overflow: auto;

  @media only screen and (min-width: 768px) {
    width: 90%;
 height: 70%; 
  }

  @media only screen and (min-width: 1024px) {
    width: 1000px;
 height: 610px; 
  }
`;

export const CloseIconContainer = styled.div`
position: absolute;
top: 25px;
right: 25px;
cursor: pointer;

color: ${(props) => props.theme.colors.neutral.textPrimary};
`;



export const TopContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
gap: 20px;
height: 50%;
width: 100%;
box-sizing: border-box;
padding: 30px 0px 25px 40px;
background-color: ${(props) => props.theme.colors.neutral.topBgPattern};

@media only screen and (min-width: 768px) {
padding: 30px 0px 35px 40px;

  height: 35%;
  }

  @media only screen and (min-width: 1024px) {
    padding: 50px 0px 35px 60px;
gap: 20px;
height: 235px;
  }
`;

export const BottomContainer = styled.div`
display: flex;
flex-direction: column;
height: 50%;
gap: 15px;
padding: 20px 30px 20px 15px;
width: 100%;
box-sizing: border-box;

@media only screen and (min-width: 768px) {
  height: 60%;
gap: 25px;
padding: 25px 40px 25px 20px;

  }

  @media only screen and (min-width: 1024px) {
    padding: 30px 60px 35px 30px;
height: 365px;
gap: 35px;

  }
`;

export const TitleAndSocialContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const DataContainer = styled.div`
 display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;

  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;

    gap: 40px;
  }
`;  

interface FlexContainerProps {
  columnGap: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
display: flex;
gap: ${(props) => props.columnGap};
justify-content: flex-start;
align-items: center;
width: min-content;
`;


export const Icon = styled.img`
width: 20px;
height: 20px;
`;


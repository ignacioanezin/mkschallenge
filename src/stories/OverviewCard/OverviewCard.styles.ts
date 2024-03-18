import styled from 'styled-components';

export const Container = styled.div`
  width: 254px;
height: 125px;
background-color: ${(props) => props.theme.colors.neutral.cardBg};
border-radius: 4px;
font-family: ${(props) => props.theme.typography.fontFamily};
cursor: pointer;
transition: background-color 0.3s ease-in-out;
&:hover {
    background-color: ${(props) => props.theme.colors.neutral.cardBgHover};
}
`;

export const TopContainer = styled.div`
display: flex;
width: fill-available;
height: fit-content;
padding: 30px 30px 0 30px;
justify-content: space-between;
align-items: center;
`;

export const BottomContainer = styled.div`
display: flex;
width: fill-available;
height: fit-content;
padding: 25px 30px 0 30px;
justify-content: space-between;
align-items: baseline;
`;

export const Icon = styled.img`
width: 20px;
height: 20px;
`;

export const Statistic = styled.p`
color: ${(props) => props.theme.colors.neutral.textSecondary};
font-weight: ${(props) => props.theme.typography.fontWeightBold};
font-size: 14px;
margin: 0;
`;

export const Counter = styled.p`
color: ${(props) => props.theme.colors.neutral.textPrimary};
font-weight: ${(props) => props.theme.typography.fontWeightBold};
font-size: 30px;
margin: 0;
`;

interface PorcentageProps {
    color: string;
  }

export const Porcentage = styled.p<PorcentageProps>`
color: ${(props) => props.color === 'green' ? props.theme.colors.primary.limeGreen : props.theme.colors.primary.brightRed};
font-weight: ${(props) => props.theme.typography.fontWeightBold};
font-size: 11px;
margin: 0;

`;

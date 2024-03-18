import styled from 'styled-components';

interface ContainerProps {
    borderTopColor: string;
  }

export const Container = styled.div<ContainerProps>`
  width: 254px;
height: 216px;
border-top: 5px solid ${(props) => props.borderTopColor};
background-color: ${(props) => props.theme.colors.neutral.cardBg};
border-radius: 4px;
align-items: center;
display: flex;
flex-direction: column;
font-family: ${(props) => props.theme.typography.fontFamily};
cursor: pointer;
transition: background-color 0.3s ease-in-out;
&:hover {
    background-color: ${(props) => props.theme.colors.neutral.cardBgHover};
}
`;

export const SocialUserContainer = styled.div`
display: flex;
column-gap: 8px;
margin-top: 25px;
justify-content: center;
align-items: center;
`;

export const Icon = styled.img`
width: 20px;
height: 20px;
`;

export const Username = styled.div`
color: ${(props) => props.theme.colors.neutral.textSecondary};
font-weight: ${(props) => props.theme.typography.fontWeightBold};
font-size: 14px;
`;

export const Counter = styled.div`
color: ${(props) => props.theme.colors.neutral.textPrimary};
font-weight: ${(props) => props.theme.typography.fontWeightBold};
font-size: 52px;
margin-top: 20px;
`;

export const FollowersText = styled.div`
color: ${(props) => props.theme.colors.neutral.textSecondary};
font-weight: ${(props) => props.theme.typography.fontWeightRegular};
text-transform: uppercase;
letter-spacing: .15rem;
`;

interface TodayCounterProps {
    color: string;
  }

export const TodayCounter = styled.p<TodayCounterProps>`
color: ${(props) => props.color === 'green' ? props.theme.colors.primary.limeGreen : props.theme.colors.primary.brightRed};
font-weight: ${(props) => props.theme.typography.fontWeightBold};
font-size: 14px;
margin-top: 30px;
`;

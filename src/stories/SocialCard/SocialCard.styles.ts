import styled from 'styled-components';


export const Container = styled.div`
  width: 254px;
height: 216px;
background-color: ${(props) => props.theme.colors.neutral.cardBg};
border-radius: 4px;
align-items: center;
display: flex;
flex-direction: column;
cursor: pointer;
transition: background-color 0.3s ease-in-out;
&:hover {
    background-color: ${(props) => props.theme.colors.neutral.cardBgHover};
}
`;
interface BorderTopProps {
  borderTopColor: string | string[];
  borderGradient?: boolean;
}

export const BorderTop = styled.div<BorderTopProps>`
width: 100%;
height: 5px;
border-radius: 4px 4px 0px 0px;
background: ${(props) => props.borderGradient ? `linear-gradient(to right, ${props.borderTopColor})` : props.borderTopColor};
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


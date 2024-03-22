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


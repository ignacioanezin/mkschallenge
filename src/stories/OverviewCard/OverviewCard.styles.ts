import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
justify-content: space-between;
  width: 254px;
height: 125px;
box-sizing: border-box;
padding: 25px 25px 20px 25px;
background-color: ${(props) => props.theme.colors.neutral.cardBg};
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s ease-in-out;
&:hover {
    background-color: ${(props) => props.theme.colors.neutral.cardBgHover};
}
`;


export const FlexSpaceBetween = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: fill-available;
`;

export const Icon = styled.img`
width: 20px;
height: 20px;
`;



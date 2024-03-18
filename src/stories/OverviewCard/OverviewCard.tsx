import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Container, TopContainer, BottomContainer, Icon, Statistic, Counter, Porcentage } from './OverviewCard.styles.ts'; // Assuming you have styled components for these elements
import { getColor } from '../../helpers/getColor.ts';

interface OverviewCardProps {
  onClick?: () => void;
  socialIconUrl: string;
  statistic: string;
  counter: number;
  porcentage: string;
  theme: DefaultTheme;
}


export const OverviewCard: React.FC<OverviewCardProps> = ({
    onClick,
    socialIconUrl,
    statistic,
    counter,
    porcentage,
    theme,
}) => {

    const porcentageColor = getColor(porcentage);

    return (
        <ThemeProvider theme={theme}>
            <Container onClick={onClick} >
                <TopContainer>
                    <Statistic>{statistic}</Statistic>
                    <Icon src={socialIconUrl} alt="Social Icon" />
                </TopContainer>
                <BottomContainer>
                    <Counter>{counter}</Counter>
                    <Porcentage color={porcentageColor}>{porcentage}</Porcentage>
                </BottomContainer>
            </Container>
        </ThemeProvider>
    );
};


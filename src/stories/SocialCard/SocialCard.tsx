import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Container, SocialUserContainer, Icon, Username, Counter, FollowersText, TodayCounter } from './SocialCard.styles.ts'; // Assuming you have styled components for these elements

interface SocialCardProps {
  onClick?: () => void; // onClick prop with a callback function
  socialIconUrl: string;
  username: string;
  counter: number;
  followersText: string;
  todayCounter: string;
  theme: DefaultTheme;
  borderTopColor: string;
}

/**
 * SocialCard component displays a social card with user information and statistics.
 */
export const SocialCard: React.FC<SocialCardProps> = ({
    onClick,
    socialIconUrl,
    username,
    counter,
    followersText,
    todayCounter,
    theme,
    borderTopColor,
}) => {

    /**
     * Gets the color based on the first character of the todayCounter string.
     * @param todayCounter - The todayCounter string.
     * @returns The color string ('green' or 'red').
     */
    const getColor = (todayCounter: string): string => {
        const symbol = todayCounter.charAt(0);
        return symbol === '▲' ? 'green' : 'red';
    };

    return (
        <ThemeProvider theme={theme}>
            <Container borderTopColor={borderTopColor} onClick={onClick} >
                <SocialUserContainer>
                    <Icon src={socialIconUrl} alt="Social Icon" />
                    <Username>{username}</Username>
                </SocialUserContainer>
                <Counter>{counter}</Counter>
                <FollowersText>{followersText}</FollowersText>
                <TodayCounter color={getColor(todayCounter)}>{todayCounter} Today</TodayCounter>
            </Container>
        </ThemeProvider>
    );
};


import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Container, SocialUserContainer, Icon, Username, Counter, FollowersText, TodayCounter } from './SocialCard.styles.ts'; // Assuming you have styled components for these elements
import { getColor } from '../../helpers/getColor.ts';

interface SocialCardProps {
  onClick?: () => void;
  socialIconUrl: string;
  username: string;
  counter: number;
  followersText: string;
  todayCounter: string;
  theme: DefaultTheme;
  borderTopColor: string;
}

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

    const todayCounterColor = getColor(todayCounter);

    return (
        <ThemeProvider theme={theme}>
            <Container borderTopColor={borderTopColor} onClick={onClick} >
                <SocialUserContainer>
                    <Icon src={socialIconUrl} alt="Social Icon" />
                    <Username>{username}</Username>
                </SocialUserContainer>
                <Counter>{counter}</Counter>
                <FollowersText>{followersText}</FollowersText>
                <TodayCounter color={todayCounterColor}>{todayCounter} Today</TodayCounter>
            </Container>
        </ThemeProvider>
    );
};


import React from "react";
import { Container, SocialUserContainer, Icon } from "./SocialCard.styles.ts"; // Assuming you have styled components for these elements
import { getColor } from "../../helpers/getColor.ts";
import Typography from "../Typography/Typography.tsx";

interface SocialCardProps {
  onClick?: () => void;
  socialIconUrl: string;
  username: string;
  counter: number;
  followersText: string;
  todayCounter: string;
  borderTopColor: string;
}

export const SocialCard: React.FC<SocialCardProps> = ({
  onClick,
  socialIconUrl,
  username,
  counter,
  followersText,
  todayCounter,
  borderTopColor,
}) => {
  const todayCounterColor = getColor(todayCounter);

  return (
    <Container borderTopColor={borderTopColor} onClick={onClick}>
      <SocialUserContainer>
        <Icon src={socialIconUrl} alt="Social Icon" />
        <Typography size="small" weight="bold" variant="secondary">
          {username}
        </Typography>
      </SocialUserContainer>
      <Typography
        size="giant"
        weight="bold"
        variant="primary"
        style={{ marginTop: "20px" }}
      >
        {counter}
      </Typography>
      <Typography
        size="small"
        weight="regular"
        variant="secondary"
        letterSpacing
      >
        {followersText}
      </Typography>
      <Typography
        size="small"
        weight="bold"
        variant={todayCounterColor}
        style={{ marginTop: "30px" }}
      >
        {todayCounter} Today
      </Typography>
    </Container>
  );
};

import React from "react";
import { Container, SocialUserContainer, Icon } from "./SocialCard.styles.ts"; // Assuming you have styled components for these elements
import { isPositive } from "../../helpers/isPositive.ts";
import Typography from "../Typography/Typography.tsx";

interface SocialCardProps {
  onClick?: () => void;
  socialIconUrl: string;
  username: string;
  counter: number;
  followersText: string;
  todayCounter: number;
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
  const todayCounterValue = isPositive(todayCounter);

  return (
    <Container borderTopColor={borderTopColor} onClick={onClick}>
      <SocialUserContainer>
        <Icon src={socialIconUrl} alt="Social Icon" />
        <Typography size="s" weight="bold" variant="secondary">
          {username}
        </Typography>
      </SocialUserContainer>
      <Typography
        size="xxxl"
        weight="bold"
        variant="primary"
        style={{ marginTop: "20px" }}
      >
        {counter}
      </Typography>
      <Typography
        size="s"
        weight="regular"
        variant="secondary"
        letterSpacing
      >
        {followersText}
      </Typography>
      <Typography
        size="s"
        weight="bold"
        style={{ marginTop: "30px" }}
        positive={todayCounterValue}
      >
        {todayCounter} Today
      </Typography>
    </Container>
  );
};

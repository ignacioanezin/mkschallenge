import React from "react";
import { Container, SocialUserContainer, Icon, BorderTop } from "./SocialCard.styles.ts"; // Assuming you have styled components for these elements
import { analizeNumber } from "../../helpers/analizeNumber.ts";
import Typography from "../Typography/Typography.tsx";

export interface SocialCardProps {
  onClick?: () => void;
  socialIconUrl: string;
  username: string;
  counter: number | string;
  followersText: string;
  todayCounter: number;
  borderTopColor: string | string[];
  borderGradient?: boolean;
  modalContentKey: string;
}

export const SocialCard: React.FC<SocialCardProps> = ({
  onClick,
  socialIconUrl,
  username,
  counter,
  followersText,
  todayCounter,
  borderTopColor,
  borderGradient
}) => {


  const { originalWasPositive, absoluteValue } = analizeNumber(todayCounter);

  return (
    <Container onClick={onClick}>
      <BorderTop borderTopColor={borderTopColor} borderGradient={borderGradient}/>
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
        positive={originalWasPositive}
      >
        {absoluteValue} Today
      </Typography>
    </Container>
  );
};

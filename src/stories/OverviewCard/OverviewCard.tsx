import React from "react";
import {
  Container,
  TopContainer,
  BottomContainer,
  Icon,
} from "./OverviewCard.styles.ts"; // Assuming you have styled components for these elements
import { getColor } from "../../helpers/getColor.ts";
import Typography from "../Typography/Typography.tsx";

interface OverviewCardProps {
  onClick?: () => void;
  socialIconUrl: string;
  statistic: string;
  counter: number;
  porcentage: string;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({
  onClick,
  socialIconUrl,
  statistic,
  counter,
  porcentage,
}) => {
  const porcentageColor = getColor(porcentage);

  return (
    <Container onClick={onClick}>
      <TopContainer>
        <Typography size="small" weight="bold" variant="secondary">
          {statistic}
        </Typography>
        <Icon src={socialIconUrl} alt="Social Icon" />
      </TopContainer>
      <BottomContainer>
        <Typography size="huge" weight="bold" variant="primary">
          {counter}
        </Typography>
        <Typography size="extraSmall" weight="bold" variant={porcentageColor}>
          {porcentage}
        </Typography>
      </BottomContainer>
    </Container>
  );
};

import React from "react";
import {
  Container,
  FlexSpaceBetween,
  Icon,
} from "./OverviewCard.styles.ts"; 
import { isPositive } from "../../helpers/isPositive.ts";
import Typography from "../Typography/Typography.tsx";

interface OverviewCardProps {
  onClick?: () => void;
  socialIconUrl: string;
  statistic: string;
  counter: number;
  porcentage: number;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({
  onClick,
  socialIconUrl,
  statistic,
  counter,
  porcentage,
}) => {
  const porcentageValue = isPositive(porcentage);

  return (
    <Container onClick={onClick}>
      <FlexSpaceBetween>
        <Typography size="s" weight="bold" variant="secondary">
          {statistic}
        </Typography>
        <Icon src={socialIconUrl} alt="Social Icon" />
      </FlexSpaceBetween>
      <FlexSpaceBetween>
        <Typography size="xl" weight="bold" variant="primary">
          {counter}
        </Typography>
        <Typography size="xs" weight="bold" positive={porcentageValue} porcentage>
          {porcentage}
        </Typography>
      </FlexSpaceBetween>
    </Container>
  );
};

import React from "react";
import {
  Container,
  FlexSpaceBetween,
  Icon,
} from "./OverviewCard.styles.ts"; 
import { analizeNumber } from "../../helpers/analizeNumber.ts";
import Typography from "../Typography/Typography.tsx";

export interface OverviewCardProps {
  onClick?: () => void;
  socialIconUrl: string;
  statistic: string;
  counter: number | string;
  percentage: number;
  modalContentKey: string;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({
  onClick,
  socialIconUrl,
  statistic,
  counter,
  percentage,
}) => {
  const { originalWasPositive, absoluteValue } = analizeNumber(percentage);

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
        <Typography size="xs" weight="bold" positive={originalWasPositive} percentage>
          {absoluteValue}
        </Typography>
      </FlexSpaceBetween>
    </Container>
  );
};

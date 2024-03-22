import React from "react";
import {
  ModalBackground,
  ModalContainer,
  CloseIconContainer,
  TopContainer,
  BottomContainer,
  TitleAndSocialContainer,
  DataContainer,
  FlexContainer,
  Icon,
} from "./DataModal.styles.ts"; 
import Typography from "../Typography/Typography.tsx";
import { isPositive } from "../../helpers/isPositive.ts";
import { Chart, FollowerDataPoint } from "../Chart/Chart.tsx";
import {CloseIcon} from "./CloseIcon.tsx";

interface DataModalProps {
  modalTitle: string;
  socialIconUrl: string;
  username: string;
  totalCounter: number;
  totalFollowersText: string;
  tenDaysCounter: number;
  tenDaysFollowersText: string;
  todayCounter: number;
  todayFollowersText: string;
  dates: string;
  isOpen: boolean;
  onClose: () => void;
  data: FollowerDataPoint[];
}

export const DataModal: React.FC<DataModalProps> = ({
  modalTitle,
  socialIconUrl,
  username,
  totalCounter,
  totalFollowersText,
  tenDaysCounter,
  tenDaysFollowersText,
  todayCounter,
  todayFollowersText,
  data,
  dates,
  onClose,
  isOpen,
}) => {


  const todayCounterValue = isPositive(todayCounter);
  const tenDaysCounterValue = isPositive(tenDaysCounter);

  return (
    <ModalBackground isOpen={isOpen}>
      <ModalContainer>
      <CloseIconContainer onClick={onClose}>
        <CloseIcon />
      </CloseIconContainer>
        <TopContainer>
          <TitleAndSocialContainer>
            <Typography variant="primary" size="xl" weight="bold" tag="p">
              {modalTitle}
            </Typography>
            <FlexContainer columnGap="10px">
              <Icon src={socialIconUrl} alt="Social media icon" />
              <Typography variant="secondary" size="s" weight="bold" tag="p">
                {username}
              </Typography>
            </FlexContainer>
          </TitleAndSocialContainer>
          <DataContainer>
            <FlexContainer columnGap="20px">
              <Typography variant="primary" size="xxl" weight="bold" tag="p">
                {totalCounter}
              </Typography>
              <Typography
                variant="secondary"
                size="s"
                weight="regular"
                tag="p"
                style={{ maxWidth: "80px" }}
              >
                {totalFollowersText}
              </Typography>
            </FlexContainer>
            <FlexContainer columnGap="15px">
              <Typography
                positive={tenDaysCounterValue}
                size="xxl"
                weight="bold"
                tag="p"
              >
                {tenDaysCounter}
              </Typography>
              <Typography
                variant="secondary"
                size="s"
                weight="regular"
                tag="p"
                style={{ maxWidth: "125px", minWidth: "110px" }}
              >
                {tenDaysFollowersText}
              </Typography>
            </FlexContainer>
            <FlexContainer columnGap="15px">
              <Typography
                positive={todayCounterValue}
                size="xxl"
                weight="bold"
                tag="p"
              >
                {todayCounter}
              </Typography>
              <Typography
                variant="secondary"
                size="s"
                weight="regular"
                tag="p"
                style={{ maxWidth: "110px", minWidth: "110px" }}
              >
                {todayFollowersText}
              </Typography>
            </FlexContainer>
          </DataContainer>
        </TopContainer>
        <BottomContainer>
          <Typography variant="secondary" size="m" weight="regular" tag="p" style={{paddingLeft: "30px"}}>
            {dates}
          </Typography>
          <Chart data={data} />
        </BottomContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

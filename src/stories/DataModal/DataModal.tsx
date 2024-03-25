import React, { useEffect, useRef } from "react";
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
import { analizeNumber } from "../../helpers/analizeNumber.ts";
import { Chart, FollowerDataPoint } from "../Chart/Chart.tsx";
import {CloseIcon} from "./CloseIcon.tsx";

export interface DataModalProps {
  modalTitle: string;
  socialIconUrl: string;
  username: string;
  totalCounter: number | string;
  totalFollowersText: string;
  tenDaysCounter: number;
  tenDaysFollowersText: string;
  todayCounter: number;
  todayFollowersText: string;
  dates: string;
  isOpen: boolean;
  onClose?: () => void;
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
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose && onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const { originalWasPositive: todayCounterWasPositive, absoluteValue: todayCounterAbsoluteValue } = analizeNumber(todayCounter);
  const { originalWasPositive: tenDaysCounterWasPositive, absoluteValue: tenDaysCounterAbsoluteValue } = analizeNumber(tenDaysCounter);

  return (
    <ModalBackground isOpen={isOpen}>
      <ModalContainer ref={modalRef}>
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
              <Typography variant="secondary" size="s" weight="bold" tag="p" style={{minWidth: "80px"}}>
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
                positive={tenDaysCounterWasPositive}
                size="xxl"
                weight="bold"
                tag="p"
              >
                {tenDaysCounterAbsoluteValue}
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
                positive={todayCounterWasPositive}
                size="xxl"
                weight="bold"
                tag="p"
              >
                {todayCounterAbsoluteValue}
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

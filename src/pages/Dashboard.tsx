import React, { useState } from "react";
import {
  DashboardPage,
  DashboardContainer,
  GridContainer,
  TopPattern,
  TopContainer,
  FlexContainer,
} from "./Dashboard.styles.ts"; // Assuming you have styled components for these elements
import Typography from "../stories/Typography/Typography.tsx";
import { ThemeProvider } from "styled-components";
import lightTheme from "../theme/lightTheme.ts";
import darkTheme from "../theme/darkTheme.ts";
import Toggle from "../stories/Toggle/Toggle.tsx";
import { SocialCard, SocialCardProps } from "../stories/SocialCard/SocialCard.tsx";
import { socialCardContent } from "../content/socialCardContent.ts";
import { OverviewCard, OverviewCardProps } from "../stories/OverviewCard/OverviewCard.tsx";
import { overviewCardContent } from "../content/overviewCardContent.ts";
import { DataModal, DataModalProps } from "../stories/DataModal/DataModal.tsx";
import { dataModalContent } from "../content/dataModalContent.ts";
import { dashboardContent } from "../content/dashboardContent.ts";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [selectedDataModalContent, setSelectedDataModalContent] = useState<DataModalProps | null>(null);
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  const handleSocialCardClick = (socialCardData: SocialCardProps) => {
    setSelectedDataModalContent(dataModalContent[socialCardData.modalContentKey]);
    setIsDataModalOpen(true);
  };

  const handleOverviewCardClick = (overviewCardData: OverviewCardProps) => {
    setSelectedDataModalContent(dataModalContent[overviewCardData.modalContentKey]);
    setIsDataModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedDataModalContent(null);
    setIsDataModalOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <DashboardPage>
        <TopPattern/>
        <DashboardContainer>
          <TopContainer>
            <FlexContainer
              flexDirection="column"
              gap="5px"
              alignItems="flex-start"
            >
              <Typography size="xl" weight="bold" variant="primary">
                {dashboardContent.dashboardTitle}
              </Typography>
              <Typography size="m" weight="bold" variant="secondary">
                {dashboardContent.totalFollowers}
              </Typography>
            </FlexContainer>
            <FlexContainer gap="10px" justifyContent="end">
              <Typography size="m" weight="bold" variant="secondary">
                {dashboardContent.darkMode}
              </Typography>
              <Toggle onChange={toggleTheme} />
            </FlexContainer>
          </TopContainer>
          <GridContainer paddingDesktop="45px 0 40px 0" paddingTablet="40px 0 30px 0" paddingMobile="30px 0 30px 0" gapDesktop="30px" gapTablet="20px" gapMobile="20px">
            {socialCardContent.map((data, index) => (
              <SocialCard
                key={index}
                onClick={() => handleSocialCardClick(data)}
                socialIconUrl={data.socialIconUrl}
                username={data.username}
                counter={data.counter}
                followersText={data.followersText}
                todayCounter={data.todayCounter}
                borderTopColor={data.borderTopColor}
                borderGradient={data.borderGradient}
                modalContentKey={data.modalContentKey}
              />
            ))}
          </GridContainer>
          <Typography size="l" weight="bold" variant="secondary">
            {dashboardContent.overviewTitle}
          </Typography>
          <GridContainer paddingDesktop="25px 0 25px 0" paddingTablet="25px 0 25px 0" paddingMobile="20px 0 25px 0" gapDesktop="30px" gapTablet="30px" gapMobile="20px">
            {overviewCardContent.map((data, index) => (
              <OverviewCard
                key={index}
                onClick={() => handleOverviewCardClick(data)}
                socialIconUrl={data.socialIconUrl}
                statistic={data.statistic}
                counter={data.counter}
                percentage={data.percentage}
                modalContentKey={data.modalContentKey}
              />
            ))}
          </GridContainer>
        </DashboardContainer>
        {isDataModalOpen && selectedDataModalContent && (
          <DataModal
            onClose={handleCloseModal}
            {...selectedDataModalContent}
            isOpen={isDataModalOpen}
          />
        )}
      </DashboardPage>
    </ThemeProvider>
  );
};

import { OverviewCardProps } from "../stories/OverviewCard/OverviewCard";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";

export const overviewCardContent: OverviewCardProps[] = [
    {
        modalContentKey: "facebook",
      socialIconUrl: FacebookIcon,
      statistic: 'Page Views',
      counter: 87,
      percentage: 3,
    },
    {
        modalContentKey: "facebook",
      socialIconUrl: FacebookIcon,
      statistic: 'Likes',
      counter: 52,
      percentage: -2,
    },
    {
        modalContentKey: "instagram",
      socialIconUrl: InstagramIcon,
      statistic: 'Likes',
      counter: 5462,
      percentage: 2257,
    },
    {
        modalContentKey: "instagram",
      socialIconUrl: InstagramIcon,
      statistic: 'Profile Views',
      counter: '52k',
      percentage: 1375,
    },
    {
        modalContentKey: "twitter",
      socialIconUrl: TwitterIcon,
      statistic: 'Retweets',
      counter: 117,
      percentage: 303,
    },
    {
        modalContentKey: "twitter",
      socialIconUrl: TwitterIcon,
      statistic: 'Likes',
      counter: 507,
      percentage: 553,
    },
    {
        modalContentKey: "youtube",
      socialIconUrl: YoutubeIcon,
      statistic: 'Likes',
      counter: 107,
      percentage: -19,
    },
    {
        modalContentKey: "youtube",
      socialIconUrl: YoutubeIcon,
      statistic: 'Total Views',
      counter: 1407,
      percentage: -12,
    },
  ];
  
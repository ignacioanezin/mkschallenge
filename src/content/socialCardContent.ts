import { SocialCardProps } from '../stories/SocialCard/SocialCard';
import lightTheme from '../theme/lightTheme';
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";


export const socialCardContent: SocialCardProps[] = [
    {
        modalContentKey: "facebook",
      socialIconUrl: FacebookIcon,
      username: '@nathanf',
      counter: 1987,
      followersText: 'FOLLOWERS',
      todayCounter: 12,
      borderTopColor: lightTheme.colors.primary.facebook,
    },
    {
        modalContentKey: "twitter",
      socialIconUrl: TwitterIcon,
      username: '@nathanf',
      counter: 1044,
      followersText: 'FOLLOWERS',
      todayCounter: 99,
      borderTopColor: lightTheme.colors.primary.twitter,
    },
    {
        modalContentKey: "instagram",
      socialIconUrl: InstagramIcon,
      username: '@realnathanf',
      counter: '11k', 
      followersText: 'FOLLOWERS',
      todayCounter: 1099,
      borderTopColor: [lightTheme.colors.primary.instagramStart, lightTheme.colors.primary.instagramEnd],
        borderGradient: true,
    },
    {
        modalContentKey: "youtube",
      socialIconUrl: YoutubeIcon,
      username: 'Nathan F.',
      counter: 8239,
      followersText: 'SUBSCRIBERS',
      todayCounter: -144,
      borderTopColor: lightTheme.colors.primary.youtube,
    },
  ];
  
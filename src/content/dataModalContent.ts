import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";
import { DataModalProps } from '../stories/DataModal/DataModal';

export const dataModalContent: { [key: string]: DataModalProps } = {
  facebook: {
    modalTitle: "Facebook followers",
    socialIconUrl: FacebookIcon,
    username: '@nathanf',
    totalCounter: 1987,
    totalFollowersText: 'Total followers',
    tenDaysCounter: 81,
    tenDaysFollowersText: 'New followers in the last 10 days',
    todayCounter: 12,
    todayFollowersText: 'New followers TODAY',
    dates: 'May 4 - May 13',
    isOpen: false,
    data: [
        {day: 4, followers: 3},
        {day: 5, followers: 2},
        {day: 6, followers: 6},
        {day: 7, followers: 8},
        {day: 8, followers: 9},
        {day: 9, followers: 10},
        {day: 10, followers: 9},
        {day: 11, followers: 10},
        {day: 12, followers: 12},
        {day: 13, followers: 12},
    ],
  },
  twitter: {
    modalTitle: "Twitter followers",
    socialIconUrl: TwitterIcon,
    username: '@nathanf',
    totalCounter: 1044,
    totalFollowersText: 'Total Followers',
    tenDaysCounter: 347,
    tenDaysFollowersText: 'New followers in the last 10 days',
    todayCounter: 99,
    todayFollowersText: 'New followers TODAY',
    dates: 'May 4 - May 13',
    isOpen: false,
    data: [
        {day: 4, followers: 12},
        {day: 5, followers: 18},
        {day: 6, followers: 24},
        {day: 7, followers: 15},
        {day: 8, followers: 21},
        {day: 9, followers: 27},
        {day: 10, followers: 33},
        {day: 11, followers: 19},
        {day: 12, followers: 49},
        {day: 13, followers: 99}, 
    ],
    

  },
  instagram: {
    modalTitle: "Instagram followers",
    socialIconUrl: InstagramIcon,
    username: '@realnathanf',
    totalCounter: '11k',
    totalFollowersText: 'Total Followers',
    tenDaysCounter: 9746,
    tenDaysFollowersText: 'Followers in the last 10 days',
    todayCounter: 1099,
    todayFollowersText: 'New followers TODAY',
    dates: 'May 4 - May 13',
    isOpen: false,
    data: [
        { day: 4, followers: 310 },
        { day: 5, followers: 419 },
        { day: 6, followers: 754 },
        { day: 7, followers: 530 },
        { day: 8, followers: 641 },
        { day: 9, followers: 876 },
        { day: 10, followers: 974 },
        { day: 11, followers: 201 },
        { day: 12, followers: 92 },
        { day: 13, followers: 1099 }
      ]
    
  },
  youtube: {
    modalTitle: "Youtube Overview",
    socialIconUrl: YoutubeIcon,
    username: 'Nathan F.',
    totalCounter: 8239,
    totalFollowersText: 'Total Subscribers',
    tenDaysCounter: -645,
    tenDaysFollowersText: 'Subscribers in the last 10 days',
    todayCounter: -144,
    todayFollowersText: 'Subscribers today',
    dates: 'May 4 - May 13',
    isOpen: false,
    data: [
        {day: 4, followers: -20},
        {day: 5, followers: -45},
        {day: 6, followers: -60},
        {day: 7, followers: -65},
        {day: 8, followers: -55},
        {day: 9, followers: -70},
        {day: 10, followers: -66},
        {day: 11, followers: -50},
        {day: 12, followers: -75},
        {day: 13, followers: -144},
    ],
    
  },
};

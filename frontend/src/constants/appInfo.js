const creatorPhoto = (file) => `/assets/creators/${file}`;

export const APK_URL = '/crmizo.apk';
export const APK_FILENAME = 'crmizo.apk';

export const APP_INFO = {
  version: '1.0.0',
  androidMin: '6.0+',
  size: '~45 MB',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'support@crmizo.com',
};

export const FEATURES = [
  {
    icon: 'live',
    iconClass: 'icon-red',
    title: 'Live Streaming',
    description: 'Broadcast to thousands in real-time with crystal-clear quality and instant audience engagement.',
  },
  {
    icon: 'people',
    iconClass: 'icon-white',
    title: 'Connect with New People',
    description: 'Discover creators, make friends, and build your community through interactive social features.',
  },
  {
    icon: 'star',
    iconClass: 'icon-crimson',
    title: 'Earn Diamonds Through Engagement',
    description: 'Get rewarded for going live, interacting, and growing your audience with valuable diamond points.',
  },
  {
    icon: 'phone',
    iconClass: 'icon-red',
    title: 'Easy-to-Use Interface',
    description: 'Intuitive design makes going live and connecting effortless — even for first-time streamers.',
  },
  {
    icon: 'shield',
    iconClass: 'icon-white',
    title: 'Fast and Secure Experience',
    description: 'Built with performance and privacy in mind. Your data stays protected while you enjoy seamless streaming.',
    wide: true,
  },
];

export const STEPS = [
  {
    number: '01',
    icon: 'download',
    title: 'Download CRIMZO APK',
    description: 'Tap the download button and install the app on your Android device in seconds.',
  },
  {
    number: '02',
    icon: 'user',
    title: 'Create Your Account',
    description: 'Sign up with your details and set up your profile to start your CRIMZO journey.',
  },
  {
    number: '03',
    icon: 'live',
    title: 'Go Live and Connect with Users',
    description: 'Start your first live stream and interact with viewers in real-time through chat and gifts.',
  },
  {
    number: '04',
    icon: 'star',
    title: 'Earn Diamonds and Rewards',
    description: 'Collect diamonds from engagement and redeem them for exciting rewards and perks.',
  },
];

export const CREATORS = [
  {
    photo: creatorPhoto('shubhami.jpeg'),
    name: 'Shubhami_Live',
    tagline: 'Delhi · Dance & vibes ✨',
    viewers: '3.8K',
    live: true,
  },
  {
    photo: creatorPhoto('jasmine.png'),
    name: 'Jasmine_Star',
    tagline: 'Mumbai · Chat & connect 💬',
    viewers: '2.6K',
    live: true,
  },
  {
    photo: creatorPhoto('somya.png'),
    name: 'Somya_Glow',
    tagline: 'Bangalore · Beauty live 💄',
    viewers: '4.1K',
    live: true,
  },
  {
    photo: creatorPhoto('samridhi.png'),
    name: 'Samridhi_Queen',
    tagline: 'Jaipur · Music & fun 🎵',
    viewers: '2.3K',
    live: true,
  },
  {
    photo: creatorPhoto('rakshita.png'),
    name: 'Rakshita_Vibe',
    tagline: 'Hyderabad · Daily live 🔴',
    viewers: '3.5K',
    live: true,
  },
  {
    photo: creatorPhoto('komal.png'),
    name: 'Komal_Chat',
    tagline: 'Pune · Meet new friends 👋',
    viewers: '2.9K',
    live: true,
  },
  {
    photo: creatorPhoto('bhawna.png'),
    name: 'Bhawna_Live',
    tagline: 'Lucknow · Fun & vibes ✨',
    viewers: '3.1K',
    live: true,
  },
  {
    photo: creatorPhoto('lakshita.png'),
    name: 'Lakshita_Star',
    tagline: 'Chandigarh · Live now 🔴',
    viewers: '2.7K',
    live: true,
  },
  {
    photo: creatorPhoto('creator-1.jpg'),
    name: 'Aisha_Live',
    tagline: 'Mumbai · Go live daily 🔴',
    viewers: '4.2K',
    live: true,
  },
  {
    photo: creatorPhoto('creator-4.jpg'),
    name: 'Nisha_Glow',
    tagline: 'Delhi · Connect & chat 💬',
    viewers: '3.4K',
    live: true,
  },
  {
    photo: creatorPhoto('creator-5.jpg'),
    name: 'Ritu_Queen',
    tagline: 'Bangalore · Music live 🎵',
    viewers: '2.8K',
    live: true,
  },
  {
    photo: creatorPhoto('priya.jpg'),
    name: 'Priya_Live',
    tagline: 'Mumbai · Dance & vibes ✨',
    viewers: '3.2K',
    live: true,
  },
  {
    photo: creatorPhoto('ananya.jpg'),
    name: 'Ananya_Star',
    tagline: 'Delhi · Chat & connect 💬',
    viewers: '2.1K',
    live: true,
  },
  {
    photo: creatorPhoto('sneha.jpg'),
    name: 'Sneha_Glow',
    tagline: 'Bangalore · Beauty live 💄',
    viewers: '4.5K',
    live: true,
  },
  {
    photo: creatorPhoto('riya.jpg'),
    name: 'Riya_Queen',
    tagline: 'Jaipur · Music & fun 🎵',
    viewers: '1.8K',
    live: true,
  },
  {
    photo: creatorPhoto('kavya.jpg'),
    name: 'Kavya_Vibe',
    tagline: 'Hyderabad · Daily live 🔴',
    viewers: '2.9K',
    live: true,
  },
  {
    photo: creatorPhoto('isha.jpg'),
    name: 'Isha_Chat',
    tagline: 'Pune · Meet new friends 👋',
    viewers: '3.7K',
    live: true,
  },
];

export const SCREENSHOTS = [
  {
    photo: creatorPhoto('shubhami.jpeg'),
    variant: 'live',
    caption: 'Live Streaming',
    name: 'Shubhami_Live',
    viewers: '3.8K',
    followers: '20.1K',
  },
  {
    photo: creatorPhoto('jasmine.png'),
    variant: 'discover',
    caption: 'Discover Creators',
    name: 'Jasmine_Star',
    viewers: '2.6K',
    followers: '14.8K',
  },
  {
    photo: creatorPhoto('somya.png'),
    variant: 'live',
    caption: 'Go Live & Connect',
    name: 'Somya_Glow',
    viewers: '4.1K',
    followers: '22.5K',
  },
  {
    photo: creatorPhoto('samridhi.png'),
    variant: 'profile',
    caption: 'Creator Profile',
    name: 'Samridhi_Queen',
    viewers: '2.3K',
    followers: '16.2K',
  },
  {
    photo: creatorPhoto('rakshita.png'),
    variant: 'live',
    caption: 'Daily Live Streams',
    name: 'Rakshita_Vibe',
    viewers: '3.5K',
    followers: '19.4K',
  },
  {
    photo: creatorPhoto('komal.png'),
    variant: 'discover',
    caption: 'Meet New Friends',
    name: 'Komal_Chat',
    viewers: '2.9K',
    followers: '17.6K',
  },
  {
    photo: creatorPhoto('bhawna.png'),
    variant: 'live',
    caption: 'Connect Live',
    name: 'Bhawna_Live',
    viewers: '3.1K',
    followers: '18.9K',
  },
  {
    photo: creatorPhoto('lakshita.png'),
    variant: 'profile',
    caption: 'Your Creator Profile',
    name: 'Lakshita_Star',
    viewers: '2.7K',
    followers: '15.3K',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How to download the app?',
    answer:
      'Tap the Download APP for Android button on this page. Your browser will download the CRIMZO APK file. Open the file from your notifications or Downloads folder, then follow the on-screen prompts to install. You may need to enable "Install from unknown sources" in your Android settings.',
  },
  {
    question: 'How to create an account?',
    answer:
      'After installing CRIMZO, open the app and tap Sign Up. Enter your phone number or email, create a password, and complete your profile with a photo and bio. Verification takes just a few seconds, and you\'re ready to explore.',
  },
  {
    question: 'How do rewards work?',
    answer:
      'CRIMZO rewards you with Diamonds for going live, receiving gifts from viewers, daily check-ins, and engaging with the community. Accumulate diamonds over time and redeem them for in-app perks, badges, and exclusive features. The more you stream and connect, the more you earn.',
  },
];
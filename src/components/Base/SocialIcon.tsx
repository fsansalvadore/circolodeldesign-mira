import tw from 'twin.macro';

const icons = {
  facebook: '/socials/facebook.svg',
  instagram: '/socials/instagram.svg',
  linkedin: '/socials/linkedin.svg',
  youtube: '/socials/youtube.svg',
  spotify: '/socials/spotify.svg',
};

const Social = tw.img`w-10 h-10`;

export const SocialIcon = ({ name }) => (
  <Social src={icons[name.toLowerCase()]} alt={name} />
);

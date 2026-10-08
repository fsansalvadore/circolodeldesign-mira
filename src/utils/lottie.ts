import type { LottiePlayer } from 'lottie-web';

// lottie-web touches `window` as soon as it is loaded, and from Node 21 on the
// global `navigator` sends it down that path during the server render too.
// Animations only start in effects, so the server never needs it.
const lottie: LottiePlayer | null =
  typeof window === 'undefined' ? null : require('lottie-web');

export default lottie;

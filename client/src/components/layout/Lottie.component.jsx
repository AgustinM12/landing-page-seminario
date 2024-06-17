import '@dotlottie/player-component';

const LottiePlayer = () => (
  <div className="flex justify-center items-center w-64 h-64">
    <dotlottie-player
      src="https://lottie.host/6dab2974-ed43-41fd-9edf-f8d028e9be76/Hwflngfjhb.json"
      background="transparent"
      speed="1"
      loop
      autoplay>
    </dotlottie-player>
  </div>
);

export default LottiePlayer;

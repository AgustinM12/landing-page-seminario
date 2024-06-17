import '@dotlottie/player-component';

const LottiePlayer = () => (
  <div className="flex justify-center items-center h-48 w-48 md:h-64 md:w-64 lg:w-80 lg:h-80">
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

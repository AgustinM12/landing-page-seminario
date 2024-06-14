import '@dotlottie/player-component';

const LottiePlayer = () => (
  <div className="flex justify-center items-center">
    <dotlottie-player
      src="https://lottie.host/6dab2974-ed43-41fd-9edf-f8d028e9be76/Hwflngfjhb.json"
      background="transparent"
      speed="1"
      style={{ width: '500px', height: '400px' }}
      loop
      autoplay>
    </dotlottie-player>
  </div>
);

export default LottiePlayer;

import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon, audioSrc }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const hoverButtonRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  // Audio hover handlers with fade effect
  const fadeIntervalRef = useRef(null);

  const handleCardMouseEnter = () => {
    if (audioRef.current && audioSrc) {
      // Clear any existing fade interval
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      
      // Start with volume at 0 and fade in
      audioRef.current.volume = 0;
      audioRef.current.loop = true;
      audioRef.current.play().catch(() => {
        // Audio play may fail due to browser autoplay policies
      });

      // Fade in over 500ms
      const fadeInDuration = 500;
      const fadeStep = 50;
      const volumeIncrement = 1 / (fadeInDuration / fadeStep);
      
      fadeIntervalRef.current = setInterval(() => {
        if (audioRef.current) {
          const newVolume = Math.min(audioRef.current.volume + volumeIncrement, 1);
          audioRef.current.volume = newVolume;
          if (newVolume >= 1) {
            clearInterval(fadeIntervalRef.current);
          }
        }
      }, fadeStep);
    }
  };

  const handleCardMouseLeave = () => {
    if (audioRef.current && audioSrc) {
      // Clear any existing fade interval
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

      // Fade out over 300ms
      const fadeOutDuration = 300;
      const fadeStep = 50;
      const volumeDecrement = audioRef.current.volume / (fadeOutDuration / fadeStep);

      fadeIntervalRef.current = setInterval(() => {
        if (audioRef.current) {
          const newVolume = Math.max(audioRef.current.volume - volumeDecrement, 0);
          audioRef.current.volume = newVolume;
          if (newVolume <= 0) {
            clearInterval(fadeIntervalRef.current);
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
        }
      }, fadeStep);
    }
  };

  return (
    <div 
      className="relative size-full"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {/* Hidden audio element for hover sound */}
      {audioSrc && <audio ref={audioRef} src={audioSrc} preload="auto" />}
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font mix-blend-difference">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Much More</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="mx-auto w-full max-w-[95vw] px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Into my gaming Pantheon
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          This is my Pantheon of my best games I ever loved.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          audioSrc="audio/Outer_Wilds.mp3"
          title={
            <>
              Ou<b>ter</b>wilds
            </>
          }
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            audioSrc="audio/Clair_obscur.mp3"
            title={
              <>
                Cl<b>air</b>Obscur
              </>
            }
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            audioSrc="audio/SMG.mp3"
            title={
              <>
                Su<b>per Mario</b>Galaxy
              </>
            }
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            audioSrc="audio/Undertale.mp3"
            title={
              <>
                Und<b>ert</b>ale
              </>
            }
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              A<b>n</b>d So<b> Mu</b>ch M<b>o</b>re.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;

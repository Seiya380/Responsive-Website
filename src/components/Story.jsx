import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <>
      {/* story 1 */}
      <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
          <p className="font-general text-sm uppercase md:text-[10px]">
            Undertale
          </p>

          <div className="relative size-full">
            <AnimatedTitle
              title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />

            <div className="story-img-container">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <img
                    ref={frameRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    src="/img/entrance.webp"
                    alt="entrance.webp"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* for the rounded corner */}
              <svg
                className="invisible absolute size-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="flt_tag">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="8"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="flt_tag"
                    />
                    <feComposite
                      in="SourceGraphic"
                      in2="flt_tag"
                      operator="atop"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
              <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                This games make me stress and also cry so much times
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* story 2 */}
      <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
          <p className="font-general text-sm uppercase md:text-[10px]">
            Outer Wilds
          </p>

          <div className="relative size-full">
            <AnimatedTitle
              title="the en<b>d</b> of <br /> the begin<b>ning</b>"
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />

            <div className="story-img-container">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <img
                    ref={frameRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    src="/img/entrance-4.webp"
                    alt="entrance-4.webp"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* for the rounded corner */}
              <svg
                className="invisible absolute size-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="flt_tag">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="8"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="flt_tag"
                    />
                    <feComposite
                      in="SourceGraphic"
                      in2="flt_tag"
                      operator="atop"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
              <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                Mind Blowing as fuck !
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* story 3 */}
      <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
          <p className="font-general text-sm uppercase md:text-[10px]">
            Super Mario Galaxy
          </p>

          <div className="relative size-full">
            <AnimatedTitle
              title="My<b>Child</b>hood <br /> Ga<b>me</b>"
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />

            <div className="story-img-container">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <img
                    ref={frameRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    src="/img/entrance-2.webp"
                    alt="entrance-2.webp"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* for the rounded corner */}
              <svg
                className="invisible absolute size-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="flt_tag">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="8"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="flt_tag"
                    />
                    <feComposite
                      in="SourceGraphic"
                      in2="flt_tag"
                      operator="atop"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
              <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                It makes me fall in love of video games.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* story 4 */}
      <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
          <p className="font-general text-sm uppercase md:text-[10px]">
            Clair Obscur
          </p>

          <div className="relative size-full">
            <AnimatedTitle
              title="A beau<b>tiful</b> french <br /> game<b>!</b>"
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />

            <div className="story-img-container">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <img
                    ref={frameRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    src="/img/entrance-3.webp"
                    alt="entrance-3.webp"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* for the rounded corner */}
              <svg
                className="invisible absolute size-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="flt_tag">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="8"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="flt_tag"
                    />
                    <feComposite
                      in="SourceGraphic"
                      in2="flt_tag"
                      operator="atop"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
              <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                Huge respect for this game. Deep story wonderful worlds
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingImage;

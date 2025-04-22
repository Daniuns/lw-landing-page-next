"use client";

import useControlAnimation from "@/app/hooks/dragonAnimation";
import { Fragment, useEffect, useRef, useState } from "react";

export default function DragonAnimation() {
  const [showAnimation, setShowAnimation] = useState(true);
  const { alreadyPlayed, setAlreadyPlayedTrue } = useControlAnimation();
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.onbeforeunload = function () {
      sessionStorage.clear();
    };

    if (alreadyPlayed) return;
    const video = videoRef.current;

    if (video) {
      if (video.readyState >= 3) {
        setIsLoaded(true);
      } else {
        const handleCanPlay = () => {
          setIsLoaded(true);
        };

        video.addEventListener("canplay", handleCanPlay);
        return () => video.removeEventListener("canplay", handleCanPlay);
      }
    }
  }, []);

  useEffect(() => {
    if (!alreadyPlayed && showAnimation) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showAnimation, alreadyPlayed]);

  const onEnded = () => {
    setShowAnimation(false);
    setAlreadyPlayedTrue();
  };
  return (
    <Fragment>
      {!isLoaded && !alreadyPlayed && (
        <div className="flex items-center justify-center w-screen h-screen bg-black">
          <h1 className="text-white text-2xl">Loading...</h1>
        </div>
      )}
      {showAnimation && !alreadyPlayed && (
        <section className="md:-mt-14 absolute w-screen h-screen z-20">
          <video
            ref={videoRef}
            src={"videos/dragon_animation.mp4"}
            className="w-screen h-screen object-cover"
            autoPlay
            muted
            playsInline
            onEnded={onEnded}
          />
        </section>
      )}
    </Fragment>
  );
}

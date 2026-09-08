"use client";

import useControlAnimation from "@/app/hooks/dragonAnimation";
import { Fragment, useEffect, useRef, useState } from "react";

export default function DragonAnimation() {
  const [showAnimation, setShowAnimation] = useState(true);
  const { alreadyPlayed, setAlreadyPlayedTrue } = useControlAnimation();
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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
  }, [alreadyPlayed]);

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
      {!isLoaded && !alreadyPlayed && showAnimation && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-background">
          <p className="text-lightGolden">Preparando sua aventura...</p>
        </div>
      )}
      {showAnimation && !alreadyPlayed && (
        <section className={`fixed inset-0 z-20 ${isLoaded ? "" : "invisible"}`}>
          <video
            ref={videoRef}
            src={"videos/dragon_animation.mp4"}
            className="w-screen h-screen object-cover"
            autoPlay
            muted
            playsInline
            onEnded={onEnded}
            onError={onEnded}
          />
          <button
            type="button"
            onClick={onEnded}
            className="absolute right-5 top-5 rounded-full border border-lightGolden/80 bg-background/70 px-4 py-2 text-sm text-lightGolden backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightGolden"
          >
            Pular introdução
          </button>
        </section>
      )}
    </Fragment>
  );
}

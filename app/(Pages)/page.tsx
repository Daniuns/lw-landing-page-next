"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import castle from "@/app/assets/images/castle.png";
import ThemeSection from "../components/Home/ThemeSection";
import BuyTheBook from "../components/Home/BuyTheBook";
import ReviewSection from "@/app/components/Home/ReviewSection";
import useControlAnimation from "../hooks/dragonAnimation";

export default function Home() {
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

  const onEnded = () => {
    setShowAnimation(false);
    setAlreadyPlayedTrue();
  };

  return (
    <main className="flex flex-col gap-8 w-screen">
      {!isLoaded && !alreadyPlayed && (
        <div className="flex items-center justify-center w-screen h-screen bg-black">
          <h1 className="text-white text-2xl">Loading...</h1>
        </div>
      )}
      {showAnimation && !alreadyPlayed && (
        <section className="md:-mt-14 absolute w-screen h-screen z-10">
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
      <section className="md:-mt-14">
        <Image src={castle} alt="Castle" />
      </section>
      <section className="min-h-80 p-8">
        <ThemeSection />
      </section>
      <section className="min-h-80 p-8">
        <ReviewSection />
      </section>
      <section className="min-h-80 p-8">
        <BuyTheBook />
      </section>
    </main>
  );
}

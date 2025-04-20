import { useState, useEffect } from "react";

const STORAGE_KEY = "dragon_animation_played";

const useControlAnimation = () => {
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem(STORAGE_KEY) === "true";
    setAlreadyPlayed(hasPlayed);
  }, []);

  const setAlreadyPlayedTrue = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setAlreadyPlayed(true);
  };

  return {
    alreadyPlayed,
    setAlreadyPlayedTrue,
  };
};

export default useControlAnimation;

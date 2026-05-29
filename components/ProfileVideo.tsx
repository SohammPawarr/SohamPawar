"use client";

import { useRef } from 'react';

export default function ProfileVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.2;
      videoRef.current.play().catch(() => {
        // Ignore auto-play errors if any
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <video
      ref={videoRef}
      src="/assets/profile.mp4"
      muted
      playsInline
      loop={false}
      className="object-cover object-[center_20%] origin-[center_20%] w-full h-full scale-[1.35]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

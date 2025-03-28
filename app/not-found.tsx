"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@headlessui/react";
import Link from "next/link";

export default function NotFound() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="text-[var(--color-gray-2)] gap-6 flex flex-col items-center justify-center min-h-screen">
      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translateX(0) rotate(0deg);
          }
          10% {
            transform: translateX(-5px) rotate(-3deg);
          }
          20% {
            transform: translateX(5px) rotate(3deg);
          }
          30% {
            transform: translateX(-5px) rotate(-2deg);
          }
          40% {
            transform: translateX(5px) rotate(2deg);
          }
          50% {
            transform: translateX(-3px) rotate(-1deg);
          }
          60% {
            transform: translateX(3px) rotate(1deg);
          }
          70% {
            transform: translateX(-2px) rotate(-0.5deg);
          }
          80% {
            transform: translateX(2px) rotate(0.5deg);
          }
          90% {
            transform: translateX(-1px) rotate(-0.25deg);
          }
          100% {
            transform: translateX(0) rotate(0deg);
          }
        }
      `}</style>

      <div className="flex justify-center">
        <span
          className="text-9xl font-bold"
          style={{
            animationName: isAnimating ? "shake" : "none",
            animationDuration: "1s",
            animationTimingFunction: "cubic-bezier(.36,.07,.19,.97)",
            animationDelay: "0ms",
            transformOrigin: "center center",
          }}
        >
          4
        </span>
        <span
          className="text-9xl font-bold"
          style={{
            animationName: isAnimating ? "shake" : "none",
            animationDuration: "1s",
            animationTimingFunction: "cubic-bezier(.36,.07,.19,.97)",
            animationDelay: "200ms",
            transformOrigin: "center center",
          }}
        >
          0
        </span>
        <span
          className="text-9xl font-bold"
          style={{
            animationName: isAnimating ? "shake" : "none",
            animationDuration: "1s",
            animationTimingFunction: "cubic-bezier(.36,.07,.19,.97)",
            animationDelay: "400ms",
            transformOrigin: "center center",
          }}
        >
          4
        </span>
      </div>
      <h3 className="text-center text-2xl">Oooops! Algo deu errado.</h3>
      <Link href="/" className="font-bold">
        <Button className="cursor-pointer text-black hover:text-white bg-[var(--color-primary)] hover:bg-[var(--color-gray-2)] px-9 py-5 rounded-xl transition-colors duration-300">
          Voltar ao início
        </Button>
      </Link>
    </main>
  );
}

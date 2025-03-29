"use client";

import type React from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

export type ImageSpan = "col" | "row" | "full" | "normal";

export interface GalleryImage {
  id: string;
  url: string;
  alt?: string;
  span?: ImageSpan;
}

interface GalleryGridProps {
  images: GalleryImage[];
  className?: string;
  gap?: "small" | "medium" | "large";
  priority?: number;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  images = [],
  className = "",
  gap = "medium",
  priority = 1,
}) => {
  const gapClass = useMemo(() => {
    switch (gap) {
      case "small":
        return "gap-1 md:gap-2";
      case "large":
        return "gap-4 md:gap-6";
      default:
        return "gap-2 md:gap-4";
    }
  }, [gap]);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 w-full  mx-auto",
        gapClass,
        className
      )}
    >
      {images.map((image, index) => {
        const isFirstOrLast = index === 0 || index === images.length - 1;
        const spanClass = getSpanClass(image.span, isFirstOrLast);
        const aspectRatio = getAspectRatio(image.span, isFirstOrLast);
        const isPriority = index < priority;

        return (
          <div
            key={image.id}
            className={cn(
              "relative overflow-hidden rounded-md",
              spanClass,
              aspectRatio
            )}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.alt || `Design de interior do imóvel ${index + 1}`}
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-300"
              sizes={
                spanClass.includes("col-span-2")
                  ? "(max-width: 768px) 100vw, 1200px"
                  : "(max-width: 768px) 100vw, 600px"
              }
              priority={isPriority}
              loading={isPriority ? "eager" : "lazy"}
            />
          </div>
        );
      })}
    </div>
  );
};

function getSpanClass(span?: ImageSpan, isFirstOrLast = false): string {
  if (span) {
    switch (span) {
      case "full":
      case "col":
        return "md:col-span-2";
      case "row":
        return "md:row-span-2";
      default:
        return "";
    }
  }

  return isFirstOrLast ? "md:col-span-2" : "";
}

function getAspectRatio(span?: ImageSpan, isFirstOrLast = false): string {
  if (span === "full" || isFirstOrLast) {
    return "aspect-[16/9]";
  }

  if (span === "row") {
    return "aspect-[3/4]";
  }

  return "aspect-square";
}

export default GalleryGrid;

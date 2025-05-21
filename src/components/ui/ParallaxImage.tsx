'use client';

import { motion, useScroll, useTransform } from '@/lib/motion';
import Image from 'next/image';
import { useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // Controls the parallax effect intensity (0.1 to 0.5 recommended)
  direction?: 'up' | 'down'; // Direction of parallax movement
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.2,
  direction = 'down',
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate the y offset based on scroll position
  // Multiply by a negative or positive value based on direction
  const multiplier = direction === 'up' ? -speed * 700 : speed * 700;
  
  // The key change: create an offset to prevent empty spaces
  const startOffset = direction === 'up' ? 0 : -100; // Start position offset
  const endOffset = direction === 'up' ? -100 : 0; // End position offset
  
  const y = useTransform(scrollYProgress, [0, 1], [startOffset, multiplier + endOffset]);

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden w-full h-full ${className}`}
      style={{position: 'relative', zIndex: 1}}
    >
      <motion.div
        className="absolute inset-0 h-[200%] w-full" // Increased height for more movement room
        style={{ 
          y, 
          zIndex: 2,
          // Position the image properly to prevent empty spaces:
          top: direction === 'up' ? '0%' : '-50%',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={true}
        />
      </motion.div>
    </div>
  );
}

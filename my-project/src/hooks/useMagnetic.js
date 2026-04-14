import { useRef, useState, useEffect } from 'react';

/**
 * Custom hook to create a magnetic effect on a DOM element.
 * @param {number} strength - How strongly the element is pulled toward the cursor (default 0.3)
 * @param {number} radius - The distance at which the magnetic pull starts (default 100px)
 */
export const useMagnetic = (strength = 0.3, radius = 100) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < radius) {
        // Apply magnetic pull
        setPosition({
          x: distanceX * strength,
          y: distanceY * strength
        });
      } else {
        // Snap back to original position
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [strength, radius]);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'transform 0.1s linear'
  };

  return { ref, style };
};

export default useMagnetic;

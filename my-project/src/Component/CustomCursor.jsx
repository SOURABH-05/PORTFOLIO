import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const requestRef = useRef();
  
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a') || 
                          target.closest('button') || 
                          target.getAttribute('role') === 'button' ||
                          window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    const animate = () => {
      // Direct positioning for the dot (perfect follow)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Smooth easing for the ring (lag follow)
      // Ease = Current + (Target - Current) * Factor
      const easing = 0.15;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * easing;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * easing;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(${isHovering ? 2.5 : isClicking ? 0.8 : 1})`;
        ringRef.current.style.borderColor = isHovering ? 'rgba(34, 211, 238, 0.6)' : 'rgba(255, 255, 255, 0.4)';
        ringRef.current.style.backgroundColor = isHovering ? 'rgba(34, 211, 238, 0.1)' : 'transparent';
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
        glowRef.current.style.opacity = isHovering ? '0.6' : '0.3';
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isHovering, isClicking]);

  return (
    <>
      <style>{`
        body, a, button, [role="button"] { 
          cursor: none !important; 
        }
        .cursor-dot, .cursor-ring, .cursor-glow {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          will-change: transform;
        }
        .cursor-dot {
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          margin: -3px 0 0 -3px;
        }
        .cursor-ring {
          width: 30px;
          height: 30px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          margin: -15px 0 0 -15px;
          transition: transform 0.2s ease-out, border-color 0.3s ease, background-color 0.3s ease;
        }
        .cursor-glow {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          margin: -75px 0 0 -75px;
          filter: blur(20px);
        }
      `}</style>

      <div ref={glowRef} className="cursor-glow" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
};

export default CustomCursor;

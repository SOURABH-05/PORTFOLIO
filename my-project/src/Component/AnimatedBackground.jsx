import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-black">
      {/* Noise grain overlay */}
      <div className="absolute inset-0 bg-noise z-10" />

      {/* Aurora Mesh Gradient Elements */}
      {/* Top Left Deep Violet */}
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-violet-900/40 blur-[120px] mix-blend-screen animate-blob" />
      
      {/* Center Right Fuchsia */}
      <div 
        className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-fuchsia-900/30 blur-[130px] mix-blend-screen animate-blob" 
        style={{ animationDelay: '2s', animationDuration: '12s' }} 
      />
      
      {/* Bottom Left Cyan */}
      <div 
        className="absolute -bottom-[30%] left-[10%] w-[80vw] h-[80vw] rounded-full bg-cyan-900/30 blur-[150px] mix-blend-screen animate-blob" 
        style={{ animationDelay: '4s', animationDuration: '15s' }} 
      />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] z-0" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }} 
      />
    </div>
  );
};

export default AnimatedBackground;

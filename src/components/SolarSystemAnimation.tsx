const SolarSystemAnimation = () => {
  return (
    <div className="fixed top-8 right-8 w-48 h-48 pointer-events-none opacity-60 z-10">
      {/* Sun - center circle */}
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-muted rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      
      {/* First orbit */}
      <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-muted/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-muted/60 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Second orbit */}
      <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-muted/15 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slower">
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-muted/40 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Third orbit */}
      <div className="absolute top-1/2 left-1/2 w-44 h-44 border border-muted/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slowest">
        <div className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-muted/30 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default SolarSystemAnimation;
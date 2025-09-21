const SolarSystemAnimation = () => {
  return (
    <div className="fixed top-8 right-8 pointer-events-none opacity-60 z-10" style={{ width: '1000px', height: '1000px' }}>
      {/* Sun - center circle */}
      <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-muted rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      
      {/* First orbit */}
      <div className="absolute top-1/2 left-1/2 border border-muted/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{ width: '200px', height: '200px' }}>
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-muted/60 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Second orbit */}
      <div className="absolute top-1/2 left-1/2 border border-muted/15 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slower" style={{ width: '400px', height: '400px' }}>
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-muted/40 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Third orbit */}
      <div className="absolute top-1/2 left-1/2 border border-muted/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slowest" style={{ width: '600px', height: '600px' }}>
        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-muted/30 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Fourth orbit */}
      <div className="absolute top-1/2 left-1/2 border border-muted/8 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{ width: '800px', height: '800px', animationDuration: '60s' }}>
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-muted/25 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default SolarSystemAnimation;
const SolarSystemAnimation = () => {
  return (
    <div className="fixed -right-32 pointer-events-none opacity-60 z-10" style={{ top: '-178px', width: '1000px', height: '1000px' }}>
      {/* Sun - center circle */}
      <div className="absolute top-1/2 left-1/2 bg-muted rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ width: '200px', height: '200px' }} />
      
      {/* First orbit - stationary */}
      <div className="absolute top-1/2 left-1/2 border border-muted/20 rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ width: '300px', height: '300px' }}>
      </div>
      {/* First planet - moving */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{ width: '300px', height: '300px' }}>
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-muted/60 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Second orbit - stationary */}
      <div className="absolute top-1/2 left-1/2 border border-muted/15 rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ width: '500px', height: '500px' }}>
      </div>
      {/* Second planet - moving */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slower" style={{ width: '500px', height: '500px' }}>
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-muted/40 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Third orbit - stationary */}
      <div className="absolute top-1/2 left-1/2 border border-muted/10 rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ width: '700px', height: '700px' }}>
      </div>
      {/* Third planet - moving */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slowest" style={{ width: '700px', height: '700px' }}>
        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-muted/30 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Fourth orbit - stationary */}
      <div className="absolute top-1/2 left-1/2 border border-muted/8 rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ width: '900px', height: '900px' }}>
      </div>
      {/* Fourth planet - moving */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: '900px', height: '900px', animation: 'spin 60s linear infinite' }}>
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-muted/25 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default SolarSystemAnimation;
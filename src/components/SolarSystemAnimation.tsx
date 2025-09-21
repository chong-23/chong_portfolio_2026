const SolarSystemAnimation = () => {
  return (
    <div className="absolute pointer-events-none opacity-30 -z-n1 overflow-hidden" style={{ top: '-250px', right: '-250px', width: '800px', height: '800px' }}>
      {/* Sun - center circle */}
      <div className="absolute top-1/2 left-1/2 bg-muted rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ width: '150px', height: '150px' }} />
      
      {/* First orbit - stationary */}
      <div className="absolute top-1/2 left-1/2 border border-muted/8 rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ width: '350px', height: '350px' }}>
      </div>
      {/* First planet - moving */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: '350px', height: '350px', animation: 'spin 20s linear infinite' }}>
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-muted/60 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Second orbit - stationary */}
      <div className="absolute top-1/2 left-1/2 border border-muted/8 rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ width: '600px', height: '600px' }}>
      </div>
      {/* Second planet - moving */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: '600px', height: '600px', animation: 'spin 35s linear infinite' }}>
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-muted/60 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Third orbit - stationary */}
      <div className="absolute top-1/2 left-1/2 border border-muted/8 rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ width: '700px', height: '700px' }}>
      </div>
      {/* Third planet - moving */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: '700px', height: '700px', animation: 'spin 50s linear infinite' }}>
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-muted/60 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default SolarSystemAnimation;
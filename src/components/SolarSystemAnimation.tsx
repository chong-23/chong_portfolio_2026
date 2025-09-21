const SolarSystemAnimation = () => {
  return (
    <div className="fixed pointer-events-none opacity-30 top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] transform translate-x-1/3 -translate-y-1/3" style={{ zIndex: -10 }}>
      <div className="relative w-full h-full">
      {/* Sun - center circle */}
      <div className="absolute top-1/2 left-1/2 bg-muted rounded-full transform -translate-x-1/2 -translate-y-1/2 w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] md:w-[90px] md:h-[90px] lg:w-[150px] lg:h-[150px]" />
      
      {/* First orbit - stationary */}
      <div className="absolute top-1/2 left-1/2 border border-muted/8 rounded-full transform -translate-x-1/2 -translate-y-1/2 w-[105px] h-[105px] sm:w-[140px] sm:h-[140px] md:w-[210px] md:h-[210px] lg:w-[350px] lg:h-[350px]">
      </div>
      {/* First planet - moving */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[105px] h-[105px] sm:w-[140px] sm:h-[140px] md:w-[210px] md:h-[210px] lg:w-[350px] lg:h-[350px]" style={{ animation: 'spin 20s linear infinite' }}>
        <div className="absolute top-0 left-1/2 w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] md:w-[11px] md:h-[11px] lg:w-3 lg:h-3 bg-muted/60 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Second orbit - stationary */}
      <div className="absolute top-1/2 left-1/2 border border-muted/8 rounded-full transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]">
      </div>
      {/* Second planet - moving */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]" style={{ animation: 'spin 35s linear infinite' }}>
        <div className="absolute top-0 left-1/2 w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] lg:w-2 lg:h-2 bg-muted/60 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Third orbit - stationary */}
      <div className="absolute top-1/2 left-1/2 border border-muted/8 rounded-full transform -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] md:w-[420px] md:h-[420px] lg:w-[700px] lg:h-[700px]">
      </div>
      {/* Third planet - moving */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] md:w-[420px] md:h-[420px] lg:w-[700px] lg:h-[700px]" style={{ animation: 'spin 50s linear infinite' }}>
        <div className="absolute top-0 left-1/2 w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] md:w-[4px] md:h-[4px] lg:w-1 lg:h-1 bg-muted/60 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      </div>
    </div>
  );
};

export default SolarSystemAnimation;
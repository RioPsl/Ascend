import { useState, useEffect } from 'react';
// @ts-ignore
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react';

export default function HeroShader() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasError(true);
      }
    } catch (e) {
      setHasError(true);
    }
  }, []);

  if (hasError) {
    return (
      <div 
        id="fallback-shader"
        className="absolute inset-0 bg-[#EFEFEF]" 
        style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, #ffffff 0%, #f3f3f3 40%, #eaeaea 100%)' }}
      >
        {/* Beautiful high-end abstract design fallback with warm-orange chroma elements */}
        <div className="absolute top-1/4 right-1/4 w-[50vw] h-[50vw] bg-[#ff5f03] opacity-10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-[40vw] h-[40vw] bg-[#ff5f03] opacity-[0.06] rounded-full blur-[100px] animate-pulse duration-[8s]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
    );
  }

  return (
    <div 
      id="hero-shader"
      className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none"
    >
      <Shader style={{ width: '100%', height: '100%' }}>
        <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
        <ChromaFlow 
          baseColor="#ffffff" 
          downColor="#ff5f03" 
          leftColor="#ff5f03" 
          rightColor="#ff5f03" 
          upColor="#ff5f03" 
          momentum={13} 
          radius={3.5} 
        />
        <FlutedGlass 
          aberration={0.61} 
          angle={31} 
          frequency={8} 
          highlight={0.12} 
          highlightSoftness={0} 
          lightAngle={-90} 
          refraction={4} 
          shape="rounded" 
          softness={1} 
          speed={0.15} 
        />
        <FilmGrain strength={0.05} />
      </Shader>
    </div>
  );
}

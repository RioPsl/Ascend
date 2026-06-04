declare module 'shaders/react' {
  import { ComponentType, CSSProperties, ReactNode } from 'react';

  export interface ShaderProps {
    style?: CSSProperties;
    children?: ReactNode;
  }

  export interface SwirlProps {
    colorA?: string;
    colorB?: string;
    detail?: number;
  }

  export interface ChromaFlowProps {
    baseColor?: string;
    downColor?: string;
    leftColor?: string;
    rightColor?: string;
    upColor?: string;
    momentum?: number;
    radius?: number;
  }

  export interface FlutedGlassProps {
    aberration?: number;
    angle?: number;
    frequency?: number;
    highlight?: number;
    highlightSoftness?: number;
    lightAngle?: number;
    refraction?: number;
    shape?: 'rounded' | 'square';
    softness?: number;
    speed?: number;
  }

  export interface FilmGrainProps {
    strength?: number;
  }

  export const Shader: ComponentType<ShaderProps>;
  export const Swirl: ComponentType<SwirlProps>;
  export const ChromaFlow: ComponentType<ChromaFlowProps>;
  export const FlutedGlass: ComponentType<FlutedGlassProps>;
  export const FilmGrain: ComponentType<FilmGrainProps>;
}

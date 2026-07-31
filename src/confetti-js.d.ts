/**
 * Type declarations for `public/assets/confetti.min.js` (confetti-js), which is
 * loaded as a classic script in index.html and therefore only reachable as a
 * global on `window`. Option names mirror the library's own parameter object.
 */

interface ConfettiGeneratorOptions {
  /** Canvas element, or the id of one, to render into. */
  target: string | HTMLCanvasElement;
  max?: number;
  size?: number;
  animate?: boolean;
  respawn?: boolean;
  clock?: number;
  rotate?: boolean;
  start_from_edge?: boolean;
  width?: number;
  height?: number;
  props?: Array<string | { type: string; src?: string; size?: number; weight?: number }>;
  /** Colours as `[r, g, b]` triples. */
  colors?: number[][];
}

interface ConfettiGeneratorInstance {
  render(): void;
  clear(): void;
}

interface Window {
  ConfettiGenerator: new (options: ConfettiGeneratorOptions) => ConfettiGeneratorInstance;
}

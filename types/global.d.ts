// types/global.d.ts
declare global {
    interface Window {
      particlesJS: (tagId: string, params: IParticlesParams) => void; // paramsの型もより具体的にできると良い
    }
  }
  
  // この行は、このファイルがモジュールではなくスクリプトであることを示すために必要です（グローバルスコープに影響を与えるため）
  export {};


  // types/particles-config.d.ts
export interface IParticlesParams {
    particles: {
      number?: {
        value?: number;
        density?: {
          enable?: boolean;
          value_area?: number;
        };
      };
      color?: {
        value?: string | string[];
      };
      shape?: {
        type?: string | string[]; // "circle", "edge", "triangle", "polygon", "star", "image"
        stroke?: {
          width?: number;
          color?: string;
        };
        polygon?: {
          nb_sides?: number;
        };
        image?: {
          src?: string;
          width?: number;
          height?: number;
        };
      };
      opacity?: {
        value?: number;
        random?: boolean;
        anim?: {
          enable?: boolean;
          speed?: number;
          opacity_min?: number;
          sync?: boolean;
        };
      };
      size?: {
        value?: number;
        random?: boolean;
        anim?: {
          enable?: boolean;
          speed?: number;
          size_min?: number;
          sync?: boolean;
        };
      };
      line_linked?: {
        enable?: boolean;
        distance?: number;
        color?: string;
        opacity?: number;
        width?: number;
        shadow?: { // 独自に追加する場合（もしあれば）
          enable: boolean;
          blur: number;
          color: string;
        }
      };
      move?: {
        enable?: boolean;
        speed?: number;
        direction?: string; // "none", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"
        random?: boolean;
        straight?: boolean;
        out_mode?: string; // "out", "bounce"
        bounce?: boolean;
        attract?: {
          enable?: boolean;
          rotateX?: number;
          rotateY?: number;
        };
      };
      // 他にも多くのオプションがあります
    };
    interactivity?: {
      detect_on?: string; // "canvas", "window"
      events?: {
        onhover?: {
          enable?: boolean;
          mode?: string | string[]; // "grab", "bubble", "repulse"
        };
        onclick?: {
          enable?: boolean;
          mode?: string | string[]; // "push", "remove", "bubble", "repulse"
        };
        resize?: boolean;
      };
      modes?: {
        grab?: {
          distance?: number;
          line_opacity?: number;
        };
        bubble?: {
          distance?: number;
          size?: number;
          duration?: number;
          opacity?: number;
          // speed?: number; // v2.0.0ではspeedはない模様
        };
        repulse?: {
          distance?: number;
          duration?: number;
        };
        push?: {
          particles_nb?: number;
        };
        remove?: {
          particles_nb?: number;
        };
      };
    };
    retina_detect?: boolean;
    // 必要に応じて他のトップレベルプロパティも追加
  }
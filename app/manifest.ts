import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PEDA Atolye",
    short_name: "PEDA",
    description: "PEDA cocuk, yetiskin ve aileler icin cok dilli gelisim odakli atolye ve danismanlik hizmetleri sunar.",
    start_url: "/tr",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}

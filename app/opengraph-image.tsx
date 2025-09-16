import { ImageResponse } from "next/og";
export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const bg = "#0B0B0C";
  const sand = "#F4D7A1";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: bg,
          color: "#fff",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: -1 }}>Matt Hall</div>
            <div style={{ fontSize: 34, color: "rgba(255,255,255,0.85)" }}>
              Full-stack technologist & product builder
            </div>
          </div>
        </div>
        <div style={{ marginTop: 40, height: 1, background: "rgba(255,255,255,0.12)" }} />
        <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: sand,
            }}
          />
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.8)" }}>matthallwastaken.dev</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

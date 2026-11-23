import { ImageResponse } from "next/og";

export const alt = "Ransya Maulana — Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          backgroundColor: "#111111",
          color: "#f5f5f5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#999999",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              backgroundColor: "#8b84ff",
            }}
          />
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "88px",
              fontWeight: 700,
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            Ransya Maulana
          </div>
          <div style={{ fontSize: "34px", color: "#999999" }}>
            Software development and creative work.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "22px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#999999",
          }}
        >
          <span>Technical</span>
          <span>Creative</span>
        </div>
      </div>
    ),
    size,
  );
}

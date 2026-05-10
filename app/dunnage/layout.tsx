export default function NzbcLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "#d4d0c8",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "14px",
      }}
    >
      {children}
    </div>
  );
}

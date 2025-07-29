export default function AuthorBio() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginTop: "2rem",
        background: "var(--nav-bg)",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <img
        src="/profile.png"
        alt="Santosh"
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #4F8EF7",
        }}
      />
      <div>
        <strong>Santosh</strong>
        <p style={{ margin: 0, color: "var(--text)" }}>
          Tech enthusiast, coder, and blogger. Sharing knowledge and code with
          the world!
        </p>
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main>
      <section
        style={{
          maxWidth: "720px",
          paddingTop: "48px",
          paddingBottom: "56px",
        }}
      >
        <p className="section-label">Privacy Policy</p>
        <h1>Privacy Policy</h1>

        <div style={{ display: "grid", gap: "20px", marginTop: "24px" }}>
          <p>
            This website uses Google Analytics to understand how visitors use
            the site and to improve content, performance, and user experience.
          </p>

          <p>
            Google Analytics may collect information such as pages visited, time
            spent on the site, device type, browser type, and approximate
            geographic location. This information is aggregated and does not
            personally identify individual visitors.
          </p>

          <p>
            Cookies and similar technologies may be used to collect this data.
            You can control or disable cookies through your browser settings.
          </p>

          <p>
            If you contact me directly by email, your information will only be
            used to respond to your message and will not be shared with third
            parties unless required by law.
          </p>

          <p>
            For questions about this policy, contact:{" "}
            <a href="mailto:yenegh@gmail.com">yenegh@gmail.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
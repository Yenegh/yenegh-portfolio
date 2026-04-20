export default function TemporalDiagram() {
  return (
    <div className="temporal-diagram">

      {/* Base diagram */}
      <img
        src="/images/manawataki/diagram-02.jpg"
        alt="Temporal phases diagram"
        className="temporal-diagram__base"
      />

      {/* Overlay images */}
      <div className="temporal-diagram__overlay">
        <img src="/images/manawataki/FINAL38.jpg" className="phase phase-1" />
        <img src="/images/manawataki/FINAL39.jpg" className="phase phase-2" />
        <img src="/images/manawataki/FINAL40.jpg" className="phase phase-3" />
        <img src="/images/manawataki/FINAL41.jpg" className="phase phase-4" />
        <img src="/images/manawataki/FINAL42.jpg" className="phase phase-5" />
        <img src="/images/manawataki/FINAL43.jpg" className="phase phase-6" />
        <img src="/images/manawataki/FINAL44.jpg" className="phase phase-7" />
        <img src="/images/manawataki/FINAL45.jpg" className="phase phase-8" />
        <img src="/images/manawataki/FINAL46.jpg" className="phase phase-9" />
        <img src="/images/manawataki/FINAL47.jpg" className="phase phase-10" />
        <img src="/images/manawataki/FINAL48.jpg" className="phase phase-11" />
        <img src="/images/manawataki/FINAL49.jpg" className="phase phase-12" />
      </div>

    </div>
  );
}
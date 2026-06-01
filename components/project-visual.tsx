import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

type Props = {
  variant: Project["visual"];
  className?: string;
};

export function ProjectVisual({ variant, className }: Props) {
  return (
    <div
      className={cn(
        "relative aspect-[16/9] w-full overflow-hidden rounded-t-[var(--radius-card)] border-b border-[var(--color-border)] bg-[var(--color-surface-2)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--color-border) 60%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-border) 60%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}
      />
      {variant === "anonhire" ? <AnonHireVisual /> : null}
      {variant === "lumina" ? <LuminaVisual /> : null}
      {variant === "stratify" ? <StratifyVisual /> : null}
      {variant === "deeplog" ? <DeepLogVisual /> : null}
      {variant === "terminal" ? <TerminalVisual /> : null}
    </div>
  );
}

function AnonHireVisual() {
  return (
    <svg
      viewBox="0 0 480 270"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="AnonHire credential verification flow"
    >
      <defs>
        <linearGradient id="anon-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Connecting lines */}
      <g
        fill="none"
        stroke="url(#anon-stroke)"
        strokeWidth="1.2"
        strokeDasharray="3 4"
      >
        <path d="M110 90 C 180 90, 200 135, 240 135" />
        <path d="M370 90 C 320 90, 300 135, 240 135" />
        <path d="M110 200 C 180 200, 200 165, 240 165" />
        <path d="M370 200 C 320 200, 300 165, 240 165" />
        <path d="M240 135 L 240 165" />
      </g>

      {/* Issuer */}
      <g transform="translate(60, 60)">
        <rect width="100" height="60" rx="10" fill="var(--color-surface)" stroke="var(--color-border-strong)" />
        <text x="50" y="22" textAnchor="middle" fontFamily="ui-monospace" fontSize="9" fill="var(--color-fg-muted)">ISSUER</text>
        <text x="50" y="42" textAnchor="middle" fontFamily="ui-monospace" fontSize="11" fill="var(--color-fg)">University</text>
        <circle cx="20" cy="50" r="2" fill="var(--color-accent)" />
        <text x="30" y="53" fontFamily="ui-monospace" fontSize="8" fill="var(--color-fg-muted)">sign</text>
      </g>

      {/* Verifier */}
      <g transform="translate(320, 60)">
        <rect width="100" height="60" rx="10" fill="var(--color-surface)" stroke="var(--color-border-strong)" />
        <text x="50" y="22" textAnchor="middle" fontFamily="ui-monospace" fontSize="9" fill="var(--color-fg-muted)">VERIFIER</text>
        <text x="50" y="42" textAnchor="middle" fontFamily="ui-monospace" fontSize="11" fill="var(--color-fg)">Employer</text>
        <circle cx="20" cy="50" r="2" fill="var(--color-accent)" />
        <text x="30" y="53" fontFamily="ui-monospace" fontSize="8" fill="var(--color-fg-muted)">verify</text>
      </g>

      {/* Holder */}
      <g transform="translate(190, 105)">
        <rect width="100" height="60" rx="10" fill="var(--color-surface)" stroke="var(--color-accent)" strokeOpacity="0.5" />
        <text x="50" y="22" textAnchor="middle" fontFamily="ui-monospace" fontSize="9" fill="var(--color-accent)">HOLDER</text>
        <text x="50" y="42" textAnchor="middle" fontFamily="ui-monospace" fontSize="11" fill="var(--color-fg)">Candidate</text>
        <text x="50" y="54" textAnchor="middle" fontFamily="ui-monospace" fontSize="8" fill="var(--color-fg-muted)">0x7a…f3</text>
      </g>

      {/* ZK Circuit */}
      <g transform="translate(190, 195)">
        <rect width="100" height="50" rx="10" fill="var(--color-surface)" stroke="var(--color-accent)" strokeOpacity="0.7" />
        <text x="50" y="20" textAnchor="middle" fontFamily="ui-monospace" fontSize="9" fill="var(--color-accent)">ZKP CIRCUIT</text>
        <text x="50" y="36" textAnchor="middle" fontFamily="ui-monospace" fontSize="9" fill="var(--color-fg-muted)">GPA ≥ 8.0  ?</text>
        <text x="50" y="46" textAnchor="middle" fontFamily="ui-monospace" fontSize="8" fill="var(--color-fg-dim)">proof:true</text>
      </g>

      <text x="20" y="250" fontFamily="ui-monospace" fontSize="9" fill="var(--color-fg-dim)">
        SSI · ZKP · Sepolia
      </text>
    </svg>
  );
}

function LuminaVisual() {
  return (
    <svg
      viewBox="0 0 480 270"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Lumina offline-first GIS"
    >
      {/* Map area */}
      <g transform="translate(30, 30)">
        <rect width="420" height="210" rx="10" fill="var(--color-surface)" stroke="var(--color-border-strong)" />

        {/* Map grid lines */}
        <g stroke="var(--color-border)" strokeWidth="0.6">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="210" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 42} x2="420" y2={i * 42} />
          ))}
        </g>

        {/* Pseudo road */}
        <path
          d="M0 150 C 80 140, 140 170, 200 130 S 320 100, 420 110"
          fill="none"
          stroke="var(--color-border-strong)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Fiber route traced */}
        <path
          d="M20 170 C 100 160, 160 190, 220 150 S 340 120, 410 130"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.8"
          strokeDasharray="4 3"
        />

        {/* Asset dots */}
        {[
          [80, 165],
          [160, 155],
          [220, 150],
          [280, 135],
          [340, 125],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <circle r="6" fill="var(--color-accent)" fillOpacity="0.15" />
            <circle r="2.5" fill="var(--color-accent)" />
          </g>
        ))}

        {/* Technician marker */}
        <g transform="translate(280, 135)">
          <circle r="14" fill="var(--color-accent)" fillOpacity="0.18" />
          <circle r="9" fill="var(--color-accent)" fillOpacity="0.35" />
          <circle r="4" fill="var(--color-accent)" />
        </g>

        {/* Offline indicator */}
        <g transform="translate(330, 22)">
          <rect width="74" height="22" rx="6" fill="var(--color-surface-2)" stroke="var(--color-border-strong)" />
          <circle cx="12" cy="11" r="3" fill="#f59e0b" />
          <text x="22" y="15" fontFamily="ui-monospace" fontSize="9" fill="var(--color-fg)">
            OFFLINE · 12
          </text>
        </g>
      </g>

      <text x="30" y="258" fontFamily="ui-monospace" fontSize="9" fill="var(--color-fg-dim)">
        GPS · sync-replay · PostGIS
      </text>
    </svg>
  );
}

function StratifyVisual() {
  return (
    <svg
      viewBox="0 0 480 270"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Stratify dashboard"
    >
      <g transform="translate(20, 20)">
        {/* Window chrome */}
        <rect width="440" height="230" rx="10" fill="var(--color-surface)" stroke="var(--color-border-strong)" />
        <rect width="440" height="22" rx="10" fill="var(--color-surface-2)" />
        <circle cx="14" cy="11" r="3" fill="var(--color-fg-dim)" />
        <circle cx="26" cy="11" r="3" fill="var(--color-fg-dim)" />
        <circle cx="38" cy="11" r="3" fill="var(--color-fg-dim)" />
        <text x="220" y="15" textAnchor="middle" fontFamily="ui-monospace" fontSize="9" fill="var(--color-fg-dim)">
          stratify / goals
        </text>

        {/* Sidebar */}
        <rect x="0" y="22" width="84" height="208" fill="var(--color-surface-2)" />
        <g fontFamily="ui-monospace" fontSize="9">
          <text x="12" y="42" fill="var(--color-fg-muted)">Q3 Goals</text>
          <rect x="8" y="50" width="68" height="18" rx="4" fill="var(--color-accent)" fillOpacity="0.18" />
          <text x="14" y="62" fill="var(--color-accent)">Ship ZKP v1</text>
          <text x="12" y="84" fill="var(--color-fg-muted)">Approvals</text>
          <text x="12" y="104" fill="var(--color-fg-muted)">Reports</text>
          <text x="12" y="124" fill="var(--color-fg-muted)">Audit log</text>
        </g>

        {/* Main content: stat cards */}
        <g transform="translate(96, 32)">
          {[
            { label: "Active", value: "12" },
            { label: "Pending", value: "4" },
            { label: "Approved", value: "27" },
          ].map((s, i) => (
            <g key={i} transform={`translate(${i * 110}, 0)`}>
              <rect width="100" height="44" rx="8" fill="var(--color-surface-2)" stroke="var(--color-border)" />
              <text x="10" y="16" fontFamily="ui-monospace" fontSize="8" fill="var(--color-fg-dim)">
                {s.label.toUpperCase()}
              </text>
              <text x="10" y="36" fontFamily="ui-monospace" fontSize="14" fill="var(--color-fg)">
                {s.value}
              </text>
            </g>
          ))}
        </g>

        {/* Table */}
        <g transform="translate(96, 92)" fontFamily="ui-monospace" fontSize="9">
          <text x="0" y="0" fill="var(--color-fg-dim)">GOAL</text>
          <text x="190" y="0" fill="var(--color-fg-dim)">OWNER</text>
          <text x="270" y="0" fill="var(--color-fg-dim)">SCORE</text>
          <line x1="0" y1="6" x2="320" y2="6" stroke="var(--color-border)" />
          <g transform="translate(0, 22)">
            <text x="0" y="0" fill="var(--color-fg)">Ship ZKP circuit</text>
            <text x="190" y="0" fill="var(--color-fg-muted)">shresth</text>
            <text x="270" y="0" fill="var(--color-accent)">94</text>
          </g>
          <g transform="translate(0, 40)">
            <text x="0" y="0" fill="var(--color-fg)">Reduce p95 latency</text>
            <text x="190" y="0" fill="var(--color-fg-muted)">shresth</text>
            <text x="270" y="0" fill="var(--color-accent)">88</text>
          </g>
          <g transform="translate(0, 58)">
            <text x="0" y="0" fill="var(--color-fg)">Mobile offline sync</text>
            <text x="190" y="0" fill="var(--color-fg-muted)">shresth</text>
            <text x="270" y="0" fill="var(--color-fg-muted)">72</text>
          </g>
          <g transform="translate(0, 76)">
            <text x="0" y="0" fill="var(--color-fg)">Audit log + exports</text>
            <text x="190" y="0" fill="var(--color-fg-muted)">shresth</text>
            <text x="270" y="0" fill="var(--color-fg-muted)">65</text>
          </g>
        </g>

        {/* Approval chip */}
        <g transform="translate(96, 200)">
          <rect width="106" height="20" rx="10" fill="var(--color-accent)" fillOpacity="0.12" stroke="var(--color-accent)" strokeOpacity="0.4" />
          <text x="53" y="14" textAnchor="middle" fontFamily="ui-monospace" fontSize="9" fill="var(--color-accent)">
            APPROVED · Q3
          </text>
        </g>
      </g>
    </svg>
  );
}

function DeepLogVisual() {
  // Two main clusters (normal logs) + scattered anomalies (cluster -1).
  const normalA = [
    [60, 60], [78, 52], [72, 70], [90, 64], [64, 78], [82, 80], [96, 70],
    [70, 56], [88, 76], [76, 60], [66, 68], [92, 58], [80, 72], [74, 84],
    [86, 64], [68, 74], [84, 90], [78, 68], [94, 82], [62, 86],
  ];
  const normalB = [
    [320, 200], [338, 192], [332, 210], [350, 204], [324, 218], [340, 220],
    [356, 196], [328, 224], [344, 188], [336, 216], [348, 212], [326, 200],
    [354, 222], [330, 194], [342, 206], [320, 212], [358, 208], [332, 202],
  ];
  const anomalies = [
    [180, 80], [220, 220], [140, 200], [260, 70], [200, 150], [160, 240],
    [300, 130], [120, 130], [240, 240], [280, 220], [180, 50], [210, 60],
  ];

  return (
    <svg
      viewBox="0 0 480 270"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="DeepLog PCA cluster scatter plot with anomalies highlighted"
    >
      <g transform="translate(20, 20)">
        <rect width="440" height="230" rx="10" fill="var(--color-surface)" stroke="var(--color-border-strong)" />

        {/* Axes */}
        <g stroke="var(--color-border)" strokeWidth="0.8">
          <line x1="40" y1="20" x2="40" y2="200" />
          <line x1="40" y1="200" x2="420" y2="200" />
        </g>
        <g fontFamily="ui-monospace" fontSize="8" fill="var(--color-fg-dim)">
          <text x="30" y="24" textAnchor="end">PCA2</text>
          <text x="420" y="216" textAnchor="end">PCA1</text>
        </g>

        {/* Cluster A (normal) */}
        <g>
          {normalA.map(([x, y], i) => (
            <circle
              key={`a${i}`}
              cx={x + 40}
              cy={y + 20}
              r="3.2"
              fill="var(--color-accent-soft)"
              fillOpacity="0.55"
            />
          ))}
        </g>

        {/* Cluster B (normal) */}
        <g>
          {normalB.map(([x, y], i) => (
            <circle
              key={`b${i}`}
              cx={x + 40}
              cy={y + 20}
              r="3.2"
              fill="var(--color-accent-soft)"
              fillOpacity="0.55"
            />
          ))}
        </g>

        {/* Anomalies (cluster -1) */}
        <g>
          {anomalies.map(([x, y], i) => (
            <g key={`x${i}`} transform={`translate(${x + 40}, ${y + 20})`}>
              <circle r="6" fill="#ef4444" fillOpacity="0.18" />
              <circle r="2.6" fill="#ef4444" />
            </g>
          ))}
        </g>

        {/* Legend */}
        <g
          transform="translate(290, 30)"
          fontFamily="ui-monospace"
          fontSize="9"
        >
          <rect width="118" height="40" rx="6" fill="var(--color-surface-2)" stroke="var(--color-border)" />
          <circle cx="14" cy="14" r="3.2" fill="var(--color-accent-soft)" fillOpacity="0.55" />
          <text x="24" y="17" fill="var(--color-fg-muted)">normal</text>
          <circle cx="14" cy="30" r="3.2" fill="#ef4444" />
          <text x="24" y="33" fill="var(--color-fg-muted)">anomaly</text>
        </g>
      </g>

      <text x="20" y="258" fontFamily="ui-monospace" fontSize="9" fill="var(--color-fg-dim)">
        TF-IDF · DBSCAN · PCA · 12 / 50 anomalies
      </text>
    </svg>
  );
}

function TerminalVisual() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0c0c0d] font-mono text-[12px] leading-relaxed">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[10px] tracking-wide text-white/40">
          ~/shresth — zsh
        </span>
      </div>
      <pre className="flex-1 overflow-hidden px-5 py-4 text-white/80">
        <code>
          <span className="text-[#a5b4fc]">$</span> npx shresth
          {"\n"}
          {"\n"}
          <span className="text-white">Shresth Gupta</span>
          {"\n"}
          <span className="text-white/50">backend · full-stack · mumbai</span>
          {"\n"}
          {"\n"}
          <span className="text-[#a5b4fc]">▸</span> anonhire   privacy-preserving creds
          {"\n"}
          <span className="text-[#a5b4fc]">▸</span> lumina     offline-first gis
          {"\n"}
          <span className="text-[#a5b4fc]">▸</span> stratify   goal tracking
          {"\n"}
          {"\n"}
          <span className="text-white/40">github.com/shhresth</span>
        </code>
      </pre>
    </div>
  );
}

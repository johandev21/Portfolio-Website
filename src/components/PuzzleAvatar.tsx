import myselfImageMobile from "../assets/myself-new-photo-160.jpg";
import myselfImageDesktop from "../assets/myself-new-photo-240.jpg";

const CLIP_ID = "puzzle-avatar-clip";

type EdgeKind = "tab" | "blank" | "flat";

type Point = readonly [number, number];

interface KnobCurve {
  c1: Point;
  c2: Point;
  to: Point;
}

interface PieceEdge {
  from: Point;
  to: Point;
  normal: Point;
  edge: EdgeKind;
}

const MARGIN = 0.14;
const CORNER = 0.088;

const KNOB: readonly KnobCurve[] = [
  { c1: [0.47, 0.0054], c2: [0.385, 0.0316], to: [0.385, 0.0723] },
  { c1: [0.385, 0.1129], c2: [0.44, 0.14], to: [0.5, 0.14] },
  { c1: [0.56, 0.14], c2: [0.615, 0.1129], to: [0.615, 0.0723] },
  { c1: [0.615, 0.0316], c2: [0.53, 0.0054], to: [0.58, 0] },
];

const LO = MARGIN;
const HI = 1 - MARGIN;

const CORNERS: readonly Point[] = [
  [LO, LO],
  [HI, LO],
  [HI, HI],
  [LO, HI],
];

const PIECE_EDGES: readonly PieceEdge[] = [
  { from: CORNERS[0], to: CORNERS[1], normal: [0, -1], edge: "tab" },
  { from: CORNERS[1], to: CORNERS[2], normal: [1, 0], edge: "blank" },
  { from: CORNERS[2], to: CORNERS[3], normal: [0, 1], edge: "blank" },
  { from: CORNERS[3], to: CORNERS[0], normal: [-1, 0], edge: "tab" },
];

const CORNER_TRIM = CORNER / (HI - LO);

const round = (value: number) => Math.round(value * 10000) / 10000;

function pointAlong(edge: PieceEdge, u: number, v: number): Point {
  const sign = edge.edge === "tab" ? 1 : -1;
  const [sx, sy] = edge.from;
  const dx = edge.to[0] - sx;
  const dy = edge.to[1] - sy;
  const [nx, ny] = edge.normal;
  return [sx + u * dx + sign * v * nx, sy + u * dy + sign * v * ny];
}

const format = ([x, y]: Point) => `${round(x)} ${round(y)}`;

function buildEdge(edge: PieceEdge): string {
  if (edge.edge === "flat") {
    return ` L ${format(pointAlong(edge, 1 - CORNER_TRIM, 0))}`;
  }

  return [
    ` L ${format(pointAlong(edge, 0.42, 0))}`,
    ...KNOB.map(
      ({ c1, c2, to }) =>
        ` C ${format(pointAlong(edge, ...c1))} ${format(pointAlong(edge, ...c2))} ${format(pointAlong(edge, ...to))}`,
    ),
    ` L ${format(pointAlong(edge, 1 - CORNER_TRIM, 0))}`,
  ].join("");
}

function buildPath(): string {
  const segments = PIECE_EDGES.flatMap((edge, index) => {
    const next = PIECE_EDGES[(index + 1) % PIECE_EDGES.length];
    return [
      buildEdge(edge),
      ` Q ${format(next.from)} ${format(pointAlong(next, CORNER_TRIM, 0))}`,
    ];
  });

  return `M ${format(pointAlong(PIECE_EDGES[0], CORNER_TRIM, 0))}${segments.join("")} Z`;
}

const PIECE_PATH = buildPath();

export default function PuzzleAvatar() {
  return (
    <div className="puzzle-avatar">
      <div className="puzzle-avatar__piece">
        <picture>
          <source media="(min-width: 768px)" srcSet={myselfImageDesktop.src} />
          <img
            src={myselfImageMobile.src}
            alt="Johan Carrasco"
            width="240"
            height="240"
            sizes="(max-width: 767px) 80px, 120px"
            decoding="async"
          />
        </picture>
      </div>
      <div className="puzzle-avatar__sheen" aria-hidden="true" />
      <svg
        className="puzzle-avatar__edge"
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id={CLIP_ID} clipPathUnits="objectBoundingBox">
            <path d={PIECE_PATH} />
          </clipPath>
        </defs>
        <path d={PIECE_PATH} vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

import { useState } from "react";
import styles from "@site/src/css/landing.module.css";

interface MeshNode {
  id: string;
  x: number;
  y: number;
  type: "human" | "bot";
  name: string;
  description: string;
  icon: string;
}

const getCardPlacement = (x: number, y: number) => {
  const v = y <= 50 ? "down" : "up";
  const h = x <= 20 ? "left" : x >= 80 ? "right" : "center";
  return { v, h };
};

const BASE_ICON_PATH = "/pages/landing/IoA-network";

const NODES: MeshNode[] = [
  {
    id: "alice-human",
    x: 10,
    y: 49,
    type: "human",
    name: "Alice",
    description: "Wants to build the next big thing!",
    icon: `${BASE_ICON_PATH}/alice_human.webp`,
  },
  {
    id: "alice-bot",
    x: 20,
    y: 50,
    type: "bot",
    name: "Alice's Agent",
    description:
      "Knows Alice well and leverages other expert agents to help her do her thing",
    icon: `${BASE_ICON_PATH}/alice_bot.webp`,
  },
  {
    id: "math-bot",
    x: 60,
    y: 18,
    type: "bot",
    name: "Math Agent",
    description:
      "Proves theorems autonomously, does your integrals and checks for mistakes",
    icon: `${BASE_ICON_PATH}/math_bot.webp`,
  },
  {
    id: "operator-bot",
    x: 90,
    y: 45,
    type: "bot",
    name: "Operator Agent",
    description:
      "Executes real-world manual actions, from house keeping to carpentry",
    icon: `${BASE_ICON_PATH}/operator_bot.webp`,
  },
  {
    id: "artist-bot",
    x: 30,
    y: 90,
    type: "bot",
    name: "Artist Agent",
    description: "Generates creative visual assets: images, audio and videos",
    icon: `${BASE_ICON_PATH}/artist_bot.webp`,
  },
  {
    id: "programmer-bot",
    x: 65,
    y: 80,
    type: "bot",
    name: "Programmer Agent",
    description: "Writes, tests and refactors production code",
    icon: `${BASE_ICON_PATH}/programmer_bot.webp`,
  },
  {
    id: "ai-engineer-human",
    x: 35,
    y: 50,
    type: "human",
    name: "AI engineer",
    description: "Builds systems by creating and orchestrating AI agents",
    icon: `${BASE_ICON_PATH}/ai_engineer_human.webp`,
  },
  {
    id: "writer-bot",
    x: 45,
    y: 20,
    type: "bot",
    name: "Writer Agent",
    description:
      "Has read it all. Can help you write blog posts, essays, poems and everything in between",
    icon: `${BASE_ICON_PATH}/writer_bot.webp`,
  },
  {
    id: "philosopher-human",
    x: 70,
    y: 40,
    type: "bot",
    name: "Philosopher",
    description: "Helps us give a meaning to life, or does the opposite",
    icon: `${BASE_ICON_PATH}/philosopher_human.webp`,
  },
  {
    id: "researcher-human",
    x: 70,
    y: 55,
    type: "human",
    name: "Researcher",
    description: "Pushes forward the boundary of our knowledge",
    icon: `${BASE_ICON_PATH}/researcher_human.webp`,
  },
  {
    id: "product-manager-bot",
    x: 30,
    y: 30,
    type: "bot",
    name: "Product Manager Agent",
    description:
      "Creates business plans, gives ideas and insights for successful products",
    icon: `${BASE_ICON_PATH}/business_bot.webp`,
  },
];

const EDGES: [string, string][] = [
  ["math-bot", "programmer-bot"],
  ["math-bot", "operator-bot"],
  ["programmer-bot", "operator-bot"],
  ["philosopher-human", "writer-bot"],
  ["philosopher-human", "artist-bot"],
  ["ai-engineer-human", "math-bot"],
  ["ai-engineer-human", "programmer-bot"],
  ["ai-engineer-human", "artist-bot"],
  ["alice-human", "alice-bot"],
  ["alice-bot", "artist-bot"],
  ["alice-bot", "programmer-bot"],
  ["alice-bot", "product-manager-bot"],
  ["product-manager-bot", "programmer-bot"],
  ["product-manager-bot", "writer-bot"],
  ["product-manager-bot", "artist-bot"],
  ["researcher-human", "operator-bot"],
  ["researcher-human", "math-bot"],
  ["researcher-human", "ai-engineer-human"],
];

export default function InternetOfAgentsNetworNetwork() {
  const [hovered, setHovered] = useState<MeshNode | null>(null);

  return (
    <section className={styles.meshSection}>
      <div className={styles.meshContainer}>
        {/* SVG lines */}
        <svg
          className={styles.meshLines}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="meshGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7c5cff" />
              <stop offset="100%" stopColor="#61dafb" />
            </linearGradient>
          </defs>

          {EDGES.map(([a, b]) => {
            const A = NODES.find((n) => n.id === a);
            const B = NODES.find((n) => n.id === b);

            if (!A || !B) return null;

            return (
              <line
                key={`${a}-${b}`}
                x1={A.x}
                y1={A.y}
                x2={B.x}
                y2={B.y}
                stroke="url(#meshGradient)"
                strokeWidth={0.8}
                strokeLinecap="round"
                opacity={0.6}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {NODES.map((node) => (
          <div
            key={node.id}
            className={styles.meshNode}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onMouseEnter={() => setHovered(node)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={node.icon}
              alt={node.name}
              className={styles.meshNodeIcon}
              loading="lazy"
            />
          </div>
        ))}

        {/* Hover card */}
        {hovered &&
          (() => {
            const { v, h } = getCardPlacement(hovered.x, hovered.y);

            return (
              <div
                className={[
                  styles.meshCard,
                  v === "down" ? styles.meshCardDown : styles.meshCardUp,
                  h === "left"
                    ? styles.meshCardLeft
                    : h === "right"
                      ? styles.meshCardRight
                      : styles.meshCardCenter,
                ].join(" ")}
                style={{ left: `${hovered.x}%`, top: `${hovered.y}%` }}
              >
                <strong>{hovered.name}</strong>
                <p>{hovered.description}</p>
              </div>
            );
          })()}
      </div>
    </section>
  );
}

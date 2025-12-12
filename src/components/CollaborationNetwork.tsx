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

const getCardPlacement = (y: number) => {
  if (y < 50) return "down";
  if (y >= 50) return "up";
};

const NODES: MeshNode[] = [
  {
    id: "manager-human",
    x: 18,
    y: 28,
    type: "human",
    name: "Product Manager",
    description: "Defines goals and constraints for AI agents",
    icon: "/media/collaboration-network/manager_human.png",
  },
  {
    id: "math-bot",
    x: 55,
    y: 18,
    type: "bot",
    name: "Math Bot",
    description: "Performs pricing, optimization and risk calculations",
    icon: "/media/collaboration-network/math_bot.png",
  },
  {
    id: "operator-human",
    x: 78,
    y: 55,
    type: "human",
    name: "Operator",
    description: "Executes real-world actions with AI assistance",
    icon: "/media/collaboration-network/operator_human.png",
  },
  {
    id: "artist-bot",
    x: 32,
    y: 72,
    type: "bot",
    name: "Artist Bot",
    description: "Generates visual assets and creative outputs",
    icon: "/media/collaboration-network/artist_bot.png",
  },
  {
    id: "programmer-bot",
    x: 58,
    y: 62,
    type: "bot",
    name: "Programmer Bot",
    description: "Writes, tests and refactors production code",
    icon: "/media/collaboration-network/programmer_bot.png",
  },
  {
    id: "developer-human",
    x: 42,
    y: 40,
    type: "human",
    name: "Developer",
    description: "Builds systems by orchestrating AI agents",
    icon: "/media/collaboration-network/developer_human.png",
  },
  {
    id: "payment-bot",
    x: 70,
    y: 38,
    type: "bot",
    name: "Payment Agent",
    description: "Handles autonomous transactions and settlements",
    icon: "/media/collaboration-network/payment_bot.png",
  },
];

const EDGES: [string, string][] = [
  ["manager-human", "math-bot"],
  ["math-bot", "payment-bot"],
  ["payment-bot", "operator-human"],
  ["operator-human", "artist-bot"],
  ["artist-bot", "developer-human"],
  ["developer-human", "programmer-bot"],
  ["programmer-bot", "math-bot"],
];

export default function MeshNetwork() {
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
            />
          </div>
        ))}

        {/* Hover card */}
        {hovered &&
          (() => {
            const placement = getCardPlacement(hovered.y);

            return (
              <div
                className={`${styles.meshCard} ${
                  placement === "down" ? styles.meshCardDown : styles.meshCardUp
                }`}
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

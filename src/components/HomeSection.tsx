import React from "react";
import Glider, { GliderMethods } from "react-glider";
import styles from "../styles/HomeSection.module.scss";

interface PaneProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const PaneExample: React.FC<PaneProps> = ({ children, style, className }) => (
  <div className={`glider-slide ${className}`} style={style}>
    <h1>{children}</h1>
  </div>
);

export default function HomeSection() {
  const gliderRef = React.useRef<GliderMethods>(null);

  return (
    <div className={styles.container}>
      <Glider
        ref={gliderRef}
        draggable
        hasArrows
        hasDots
        slidesToScroll={5}
        slidesToShow={5}
        className="gradient-outline"
      >
        <PaneExample>1</PaneExample>
        <PaneExample>2</PaneExample>
        <PaneExample>3</PaneExample>
        <PaneExample>4</PaneExample>
        <PaneExample>1</PaneExample>
        <PaneExample>2</PaneExample>
        <PaneExample>3</PaneExample>
        <PaneExample>4</PaneExample>
        <PaneExample>1</PaneExample>
        <PaneExample>2</PaneExample>
        <PaneExample>3</PaneExample>
        <PaneExample>4</PaneExample>
      </Glider>
    </div>
  );
}

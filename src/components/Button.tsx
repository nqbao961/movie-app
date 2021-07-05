import React from "react";
import styles from "../styles/Button.module.scss";

export default function Button({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  let buttonType = styles.default;
  switch (type) {
    case "primary":
      buttonType = styles.primary;
      break;

    case "border":
      buttonType = styles.border;
      break;

    default:
      buttonType = styles.default;
      break;
  }
  return (
    <button className={`${styles.container} ${buttonType}`}>{children}</button>
  );
}

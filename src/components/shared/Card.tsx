import React from "react";

type Props = {
  children?: React.ReactNode;
  reverse?: boolean;
};

function Card(props: Props) {
  const { children, reverse } = props;
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

export default Card;

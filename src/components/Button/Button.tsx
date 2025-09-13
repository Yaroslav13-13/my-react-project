import type React from "react";
import { useState } from "react";

export default function Button() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };
  return (
    <>
      <button onClick={handleClick}></button>
      <button onClick={event}>Click me!</button>;
    </>
  );
}

interface ClickProps {
  value: number;
  onUpdate: () => void;
}

export function Click({ value, onUpdate }: ClickProps) {
  return <button onClick={onUpdate}>CLICK:{value}</button>;
}

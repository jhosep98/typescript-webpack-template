import React from "react";

type GreeterProps = {
  greeter: string;
};

export const App = ({ greeter }: GreeterProps) => {
  return <div>{greeter}</div>;
};

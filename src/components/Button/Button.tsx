// export default function Button() {
//   const handleClick = () => {
//     console.log("I'm a button!");
//   };

import type React from "react";

//   return <button onClick={handleClick}>Click me!</button>;
// }

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

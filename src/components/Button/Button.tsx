export default function Button() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return <button onClick={() => console.log("Clicked!")}>Click Me</button>;
  //   return <button onClick={handleClick}>Click Me</button>;
}

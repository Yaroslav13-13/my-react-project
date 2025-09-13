// export default function Form() {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const formData = new FormData(form);
//     const username = formData.get("username");
//     console.log("Username:", username);

//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="username" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

import { useState } from "react";
export default function Form() {
  const [username, setUsername] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Username: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Введи імʼя"
        style={{
          height: "35px",
          marginRight: "8px",
          fontSize: "16px",
          paddingLeft: "8px",
          color: "#d82424ff",
          border: "1px solid #000000ff",
          borderRadius: "9px",
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// import { useContext } from "react";
// import { userContext } from "../hooks/userContext";

// const ChatButton = () => {
//   const { userName, setUserName } = useContext(userContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <form className="home__container">
//       <h2 className="home__header">Sign in to the chat room</h2>
//       <label htmlFor="username">Username</label>
//       <input
//         type="text"
//         name="username"
//         id="username"
//         className="username__input"
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//       />
//       <button type="button" className="home__cta" onClick={handleSubmit}>
//         SIGN IN
//       </button>
//     </form>
//   );
// };

// export default ChatButton;

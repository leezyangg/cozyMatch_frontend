// const AuthPage = (props) => {
//     const onSubmit = (e) => {
//       e.preventDefault();
//       const { value } = e.target[0];
//       // eslint-disable-next-line react/prop-types
//       props.onAuth({ username: value, secret: value });
//     };
  
//     return (
//       <div className="w-screen h-screen table-cell align-middle">
//         <form onSubmit={onSubmit} className="w-6/12 max-w-xs">
//           <div className="font-extrabold text-gray-300 pb-3 text-4xl">Welcome 👋</div>
  
//           <div className="text-lg text-gray-500 pb-6">Set a username to get started</div>
  
//           <div className="relative inline-block w-full pb-3">
//             <div className="absolute text-gray-500 w-24">Username</div>
//             <input className="bg-gray-800 text-white rounded-lg mb-3" name="username" />
//             <button className="w-full h-12 text-white bg-orange-600 rounded-lg cursor-pointer" type="submit">
//               Enter
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   };
  
//   export default AuthPage;
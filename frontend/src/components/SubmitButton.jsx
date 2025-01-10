// import React from 'react';

// const SubmitButton = ({ onClick, loading }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-green-500 w-[10vw] h-[7vh] text-white py-2 px-4 rounded-2xl cursor-pointer mt-[80vh] hover:scale-105"
//       disabled={loading}
//     >
//       {loading ? 'Loading...' : 'Submit'}
//     </button>
//   );
// };

// export default SubmitButton;


import React from 'react';

const SubmitButton = ({ onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 w-[10vw] h-[7vh] text-white py-2 px-4 rounded-2xl cursor-pointer mt-[80vh] hover:scale-105 transition-transform duration-300 ease-in-out"
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Submit'}
    </button>
  );
};

export default SubmitButton;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { get_master, post_master } from "./URL/url";

// const Stu = () => {
//   const [num, setnum] = useState("");
//   const [data, setdata] = useState([]);

//   useEffect(() => {
//     axios.get(get_master).then((res) => {
//       setdata(res.data.num);
//     });
//   }, []);
//   const post = async () => {
//     await axios
//       .post(post_master, {
//         num,
//       })
//       .then((res) => {
//         console.log(res);
//       });
//   };

//   return (
//     <div>
//       <form>
//         <label>STU ID</label>
//         <input
//           value={data}
//           type="text"
//           onChange={(e) => setnum(e.target.value)}
//         />
//       </form>
//       <button onClick={post}>submit</button>
//     </div>
//   );
// };

// export default Stu;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { get_master, post_master } from "./URL/url";

const Studentid = () => {
  const [num, setNum] = useState("");
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState(""); // New state for input value

  useEffect(() => {
    axios.get(get_master).then((res) => {
      setData(res.data.num);
      setInputValue(res.data.num); // Initialize inputValue with data value
    });
  }, []);

  const post = async () => {
    await axios.post(post_master, { num }).then((res) => {
      console.log(res);
    });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the input value
    setNum(e.target.value); // Update the num state
  };

  return (
    <div>
      <form>
        <label>STU ID</label>
        <input
          value={inputValue} // Use inputValue instead of data
          type="text"
          onChange={handleInputChange} // Use handleInputChange for onChange event
        />
      </form>
      <button onClick={post}>submit</button>
    </div>
  );
};

export default Studentid;

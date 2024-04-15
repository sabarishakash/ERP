import React, { useEffect, useState } from "react";
import axios from "axios";

import logo from "./logo.svg";
import { get_url, post_url } from "./URL/url";
import { useNavigate } from "react-router-dom";

function Cash() {
  const [name, setname] = useState("");
  const [amount, setamount] = useState("");

  let navigate = useNavigate();
  const post_datas = async () => {
    await axios.post(post_url, {
      name,
      amount,
    });
    navigate("/read");
  };

  return (
    <>
      <div>
        <form>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <br />
          <label>Amount:</label>
          <br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
          />
          <br />
        </form>
      </div>
      <button onClick={post_datas}>click</button>
    </>
  );
}
export default Cash;

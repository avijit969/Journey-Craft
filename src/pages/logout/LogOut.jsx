import React from "react";
import axios from "axios";
function LogOut() {
  const logout = () => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/v1/users/logout",
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        className="m-12 bg-black text-white p-4 rounded-xl"
        onClick={logout}
      >
        logOut
      </button>
    </div>
  );
}

export default LogOut;

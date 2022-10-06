import React from "react";
import { useState } from "react";

const UpdateProfil = () => {
  const [firstname, setFristname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <div className="updateProfil">
      <div className="container-updateProfil">
        <form className="profil">
          <div className="firstName">
            <input
              className="input-firstName"
              type="text"
              autoComplete="off"
              placeholder="name"
              value={firstname}
              onChange={(e) => setFristname(e.target.value)}
            />
          </div>

          <div className="lastName">
            <input
              className="input-lastName"
              type="text"
              autoComplete="off"
              placeholder="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            ></input>
          </div>
        </form>

        <div className="button-profilUpdate">
          <button type="submit" className="btn-submit-update" value="updateProfil">
            Save
          </button>
          <button type="submit" className="btn-cancel-update" value="cancelUpdate">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;



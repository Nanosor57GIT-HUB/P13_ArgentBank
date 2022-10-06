import React from "react";
import { useState } from "react";


const UpdateProfil = () => {

  //form display management
  // gestion d'affichage du formulaire
  const [formUpdate, setFormUpdate] = useState(true) 

  // Display form with "Edit Name" button
  // affichage du formulaire avec le bouton "Edit Name"
  const displayForm = () => {
    setFormUpdate(false);
  };

  //closed form with cancel button
  // fermeture du formulaire avec le bouton "cancel"
  const hideForm = () => {
    setFormUpdate(true);
  };

 //fuction to update or not the name and last name of user
  const editUser = (e) => {
    e.preventDefault();

    setFormUpdate(true);
      
  };

   

  return (
    <div className="updateProfil">
      {formUpdate ? (
        <button className="edit-button" onClick={displayForm}>
          Edit Name
        </button>
      ) : (
        <div className="container-updateProfil">
          <form className="profil">
            <div className="container-form-profile">
              <div className="firstName">
                <label htmlFor="firstName">
                  <input
                    className="input-firstName"
                    type="text"
                    autoComplete="off"
                    placeholder="name"
                   
                  />
                </label>
              </div>

              <div className="lastName">
                <label htmlFor="lastName">
                  <input
                    className="input-lastName"
                    type="text"
                    autoComplete="off"
                    placeholder="lastname"
                  
                  />
                </label>
              </div>
            </div>

            <div className="button-profilUpdate">
              <button
                type="submit"
                className="btn-submit-update"
                value="updateProfil"
                onClick={(e) => editUser(e)}
              >
                Save
              </button>

              <button
                type="submit"
                className="btn-cancel-update"
                value="cancelUpdate"
                onClick={hideForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateProfil;

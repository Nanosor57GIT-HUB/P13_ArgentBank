import React from "react";
import { useState, useEffect } from "react";
import { profile, profileUpdate } from "../../features/auth/authSlice";
import { editUserName, cancelUserName } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../features/auth/authSlice";


const UpdateProfil = () => {
  const dispatch = useDispatch();

  //useState to update or not the name and last name of user
  // useState pour mettre à jour ou non le nom et le prénom de l'utilisateur
  const [firstNameUpdate, setFirstNameUpdate] = useState();
  const [lastNameUpdate, setLastNameUpdate] = useState();

  //form display management
  // gestion d'affichage du formulaire
  const [formUpdate, setFormUpdate] = useState(true);

  const { firstName, lastName, isSuccess, isError } = useSelector(
    (state) => state.auth
  );

  // Display form with "Edit Name" button
  // affichage du formulaire avec le bouton "Edit Name"
  const displayForm = () => {
    setFormUpdate(false);
    dispatch(editUserName());
  };

  //closed form with cancel button
  // fermeture du formulaire avec le bouton "cancel"
  const hideForm = () => {
    setFormUpdate(true);
  };

  //update function for first name, last name or both (user)
  //fonction de mise à jour du prénom, nom ou les deux (utilisateur)
  const editUser = (e) => {
    e.preventDefault();

    const userDataUpdate = {
      firstName: firstNameUpdate ? firstNameUpdate : firstName,
      lastName: lastNameUpdate ? lastNameUpdate : lastName,
    };

    dispatch(profileUpdate(userDataUpdate));
    setFormUpdate(true);
    dispatch(cancelUserName());
    dispatch(reset());
  };

  useEffect(() => {
    dispatch(profile());
  }, [dispatch, isSuccess, isError]);

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
                    onChange={(e) => setFirstNameUpdate(e.target.value)}
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
                    onChange={(e) => setLastNameUpdate(e.target.value)}
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

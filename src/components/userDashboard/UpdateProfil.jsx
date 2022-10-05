import React from "react";



const UpdateProfil = () => {

  return (
    <div className="updateProfil">
     
        
     
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
               
              >
                Save
              </button>

              <button
                type="submit"
                className="btn-cancel-update"
                value="cancelUpdate"
              
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      
    </div>
  );
};

export default UpdateProfil;

import React, { useEffect, useContext, useState } from "react";
import { UpdateUserPhoto, UpdateUser } from "../utils/updateUser";
import { authContext } from "../context/AuthContext";

const ProfilePictucre = () => {
  const { auth } = useContext(authContext);
  const [user, setUser] = useState({
    id: auth.id,
    photoName: "",
    photo: "",
  });

  const handlePhoto = (event) => {
    setUser({
      ...user,
      photoName: event.target.files[0].name,
      photo: event.target.files[0],
    });
  };

  const updateUserPhoto = async () => {
    const formData = new FormData();
    formData.append("upload", user.photo);
    formData.append("fileName", user.photoName);
    try {
      await UpdateUser(user);
      await UpdateUserPhoto(user);
    } catch (err) {
      console.warn(err.message);
    }
  };

  useEffect(() => {
    updateUserPhoto();
  }, [handlePhoto]);

  return (
    <div className="picture_profil flex flex-fd-column flex-ai-center flex-jc-center">
      <input
        type="file"
        name="file"
        id="photo"
        className="inputfile"
        onChange={handlePhoto}
      />
      <label htmlFor="photo">Je change de photo</label>
    </div>
  );
};

export default ProfilePictucre;

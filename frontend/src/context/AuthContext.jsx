import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState();
  const [user, setUser] = useState();

  const login = (authData) => {
    setAuth(authData);
    if (authData.role_id === 2) {
      setUser("consultant");
      navigate("/AdminConsultant");
    } else if (authData.role_id === 3) {
      setUser("admin");
      navigate("/AdminConsultant");
    } else {
      setUser("user");
      navigate("/Main");
    }
  };

  const logout = () => {
    setAuth({});
    window.localStorage.removeItem("user");
    navigate(":ConnexionCandidat", { replace: true, state: "Disconnected" });
  };

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(auth));
  }, [auth]);

  const value = useMemo(() => ({ auth, login, logout, user }), [auth]);

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

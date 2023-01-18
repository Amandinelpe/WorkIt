import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({ data: null });
  const [user, setUser] = useState();

  const login = (data) => {
    setAuth({ data });
    if (data.role_id === 2) {
      setUser("consultant");
      navigate("/AdminConsultant");
    } else if (data.role_id === 3) {
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
    navigate("/", { replace: true, state: "Disconnected" });
  };

  useEffect(() => {
    const data = window.localStorage.getItem("user");

    if (data && data !== "undefined") {
      setAuth(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (auth.data) {
      window.localStorage.setItem("user", JSON.stringify(auth));
    }
  }, [auth]);

  const value = useMemo(() => ({ auth, login, logout, user }), [auth]);

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

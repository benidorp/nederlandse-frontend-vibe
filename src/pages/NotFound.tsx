import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.location.replace("https://www.iaee.eu/");
  }, []);

  return null;
};

export default NotFound;

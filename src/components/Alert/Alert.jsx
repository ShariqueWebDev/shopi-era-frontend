import React, { useContext } from "react";
import "./Alert.scss";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";

const Alert = () => {
  const { alert } = useContext(Context);
  const navigate = useNavigate();
  console.log(alert);
  return (
    <>
      {alert && (
        <div className={`alert-container`}>
          <div className="alert-content">
            <div className="content">
              <div className="sign">{alert.img}</div>
              <div className="text">{`${alert.type}, ${alert.message}`}</div>
            </div>
            <div
              className={`blank-layer ${
                alert !== null ? "widthController" : ""
              }`}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;

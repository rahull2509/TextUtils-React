import React from "react";
import "./Alert.css";

function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

interface AlertProps {
  alert: {
    type: string;
    msg: string;
  } | null;
}

const Alert: React.FC<AlertProps> = ({ alert }) => {
  return (
    alert && (
      <div className={`custom-alert ${alert.type}`}>
        <strong>{capitalize(alert.type)}:</strong> {alert.msg}
      </div>
    )
  );
};
export default Alert;

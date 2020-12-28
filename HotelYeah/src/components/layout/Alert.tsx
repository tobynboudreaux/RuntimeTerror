import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({alerts}: AlertProps) =>
  alerts !== null &&
  alerts?.map((alert: any) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

  interface AlertProps {
    alerts?: string[];
  }

export default connect(Alert);

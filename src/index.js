import React, { useMemo } from "react";
import PropTypes from "prop-types";

import {
  hasDigits,
  hasUppercase,
  hasLowercase,
  hasEightLength,
  hasSpecialCharacter,
} from "./utils.js";

import "./styles.css";

const strengthsLabel = {
  1: "weak",
  2: "weak",
  3: "normal",
  4: "good",
  5: "strong",
};

const PasswordStrengthBar = (props) => {
  const { containerClass, password, showTitle, strengthTitles } = props;
  // On base of password apply validation test, these are following tests:
  const passwordScore = useMemo(() => {
    return (
      [
        // 1. Check if passowrd has at least one digit
        hasDigits(password),
        // 2. Check if passowrd has special characters
        hasSpecialCharacter(password),
        // 3. Check if passowrd has at least one upper case letter
        hasUppercase(password),
        // 4. Check if passowrd has at least one lower case letter
        hasLowercase(password),
        // 5. Check if passowrd length is minimum 8
        hasEightLength(password),
      ].filter((num) => !!num).length || 1
    );
  }, [password]);

  // Creates an array of length 4
  const arrayOfFour = useMemo(
    () => Array.from({ length: 4 }, (_, i) => i + 1),
    []
  );

  // Renders password strength bars
  // Assign colors to the bars on based of the password strength
  const renderPassStrengthBars = () => {
    return arrayOfFour.map((num) => {
      const passEntered = password.length > 0 && num === 1;
      const barClass =
        passwordScore > num || passEntered
          ? strengthsLabel[passwordScore]
          : "empty";

      return <div className={`strengthBar ${barClass}`} />;
    });
  };

  return (
    <div className={`passwordStrengthContainer ${containerClass}`}>
      <div className={"strengthBars"}>{renderPassStrengthBars()}</div>
      {showTitle && password.length > 0 && (
        <div className={"strengthTitleContainer"}>
          Password Strength:{" "}
          <div className={"strengthTitle"}>
            {strengthTitles[strengthsLabel[passwordScore]]}
          </div>
        </div>
      )}
    </div>
  );
};

PasswordStrengthBar.propTypes = {
  containerClass: PropTypes.string,
  password: PropTypes.string,
  showTitle: PropTypes.bool,
  strengthTitles: PropTypes.objectOf(PropTypes.object),
};

PasswordStrengthBar.defaultProps = {
  containerClass: "",
  password: "",
  showTitle: true,
  strengthTitles: {
    weak: "Weak",
    normal: "Normal",
    good: "Good",
    strong: "Strong",
  },
};

export default React.memo(PasswordStrengthBar);

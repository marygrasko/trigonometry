/* eslint-disable react/prop-types */
import React from "react";
import { slide as Menu } from 'react-burger-menu';
import "../Menu.css";

function ValuesMenu(props) {
  return (
    <Menu right noOverlay disableAutoFocus isOpen width={375}>
      <label className="centered underlined" style={{padding: "1em 0"}}>
          Тригонометрические значения отображаются на окружности как их абсолютные значения и округляются до двух
          знаков после запятой,
          для большей точности обратитесь к приведенным ниже значениям.
      </label>

      <label className="centered large-print">
          Значения тригонометрических функций
      </label>
      <label className="centered">
          cos(θ) = {props.trigValues.cos}
      </label>
      <label className="centered">
          sin(θ) = {props.trigValues.sin}
      </label>
      <label className="centered">
          tan(θ) = {props.trigValues.tan}
      </label>
      <label className="centered">
          cot(θ) = {props.trigValues.cot}
      </label>
      <label className="centered">
          sec(θ) = {props.trigValues.sec}
      </label>
      <label className="centered">
          csc(θ) = {props.trigValues.csc}
      </label>
    </Menu>
  );
}

export default ValuesMenu;

/* eslint-disable react/prop-types */

import React from "react";
import { slide as Menu } from 'react-burger-menu';
import "../Menu.css";

function SettingsMenu(props) {
    return (
        <Menu noOverlay disableAutoFocus isOpen width={375}>
            <label className="centered large-print">
                Ввод значения угла
            </label>
            <label className="centered large-print underlined" style={{padding: "1em 0"}}>
                θ:
                <input type="text" style={{marginLeft: "0.25em"}} value={props.degreeAngle} onChange={props.handleDegreeAngleChange} className="small-input" />
                ° ≈
                <input type="text" style={{marginLeft: "0.8em", marginRight: "0.25em"}} value={props.radianAngle} onChange={props.handleRadianAngleChange} className="medium-input" />
                rad
            </label>

            <label className="centered large-print underlined" style={{padding: "1em 0"}}>
                Нажмите для фиксации значений:
                <input id="hold-click-checkbox" type="checkbox" defaultChecked onChange={props.handleAngleSelectionChange} />
            </label>

            <label className="centered large-print underlined" style={{padding: "1em 0"}}>
                Единица измерения угла наклона:
                <select id="angle-value-dropdown" style={{marginLeft: "0.25em"}} onChange={props.handleAngleUnitChange}>
                    <option value="degrees">Градусы</option>
                    <option value="radians">Радианы</option>
                    <option value="none">Нет значения</option>
                </select>
            </label>

            <label className="centered large-print">
                Тригонометрические функции
            </label>
            <div className="centered" style={{whitespace: "nowrap"}}>
                <label>
                    cos:
                    <input id="cos-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
                </label>
                <label>
                    sin:
                    <input id="sin-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
                </label>
                <label>
                    tan:
                    <input id="tan-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
                </label>
            </div>
            <div className="centered underlined" style={{whitespace: "nowrap", padding: "1em"}}>
                <label>
                    cot:
                    <input id="cot-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
                </label>
                <label>
                    sec:
                    <input id="sec-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
                </label>
                <label>
                    csc:
                    <input id="csc-checkbox" type="checkbox" defaultChecked onChange={props.handleTrigSelectionChange} />
                </label>
            </div>

            <label className="centered large-print">
                Детали единичного круга
            </label>
            <div className="centered" style={{whitespace: "nowrap"}}>
                <label>
                    Оси:
                    <input id="axis-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
                </label>
                <label>
                    Градусы:
                    <input id="degree-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
                </label>
            </div>
            <div className="centered" style={{whitespace: "nowrap"}}>
                <label>
                    Радианы:
                    <input id="radian-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
                </label>
                <label>
                    Pi:
                    <input id="pi-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
                </label>
            </div>
            <div className="centered underlined" style={{whitespace: "nowrap", paddingBottom: "1em"}}>
                <label>
                    Квадранты:
                    <input id="quadrant-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
                </label>
                <label>
                    Знаки функций:
                    <input id="sign-checkbox" type="checkbox" defaultChecked onChange={props.handleCircleDetailChange} />
                </label>
            </div>
        </Menu>
    );
}

export default SettingsMenu;

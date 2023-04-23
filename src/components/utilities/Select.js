import React, { useState } from "react";

const Select = (props) => {
    const [choosenOption, setChoosenOption] = useState(props.options[0]);

    const optionChangeHanlder = (event) => {
        setChoosenOption(event.target.innerHTML);
        setIsMenuActive(!isMenuActive);
        if(choosenOption != props.options[0]){
            props.onFilterChanged("modified")
        }
        if(choosenOption == props.options[0]){
            props.onFilterChanged("default")
        }
    };
    const [isMenuActive, setIsMenuActive] = useState(false);
    const displayMenuHandler = () => {
        setIsMenuActive(!isMenuActive);
    };

    const selectMenuClass = ["select__menu", isMenuActive ? "" : "disabled"].join(" ");

    return (
        <div className="select" key={props.id}>
            <p className="select__title">{props.name}</p>
            <div className="select__current" onClick={displayMenuHandler}>
                {choosenOption}
            </div>
            <div className={selectMenuClass}>
                {props.options.map((option) => (
                    <p className="select__menu-item" onClick={optionChangeHanlder}>{option}</p>
                ))}
            </div>
        </div>
    );
};

export default Select;

import React from "react";
import './Menu.css';
type MenuProps = {
    data: string[];
}

const Menus = (props: MenuProps) => {
    return(
        <div className="Menu">
        <ul>
            {props.data.map(item =>
                <li><a href="#">{item}</a></li>)}
        </ul>
        </div>
    )
}

export default Menus;
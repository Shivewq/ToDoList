import React from "react";
import { ButtonStyle, formStyle, inputStyle } from './styles/styles';

const Form: React.FC = () => {
    return (
        <div style={formStyle} className="form">
            <input style={inputStyle} type="text" placeholder="Enter Task"/>
                <button style={inputStyle} className="todo-button" type="submit">
                    <i>{ButtonStyle}</i>
                </button>
        </div>
    );
}

export default Form;
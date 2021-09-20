import CSS from 'csstype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const button = <FontAwesomeIcon icon={faPlus} />


const body: CSS.Properties = {
    backgroundImage: 'linear-gradient(10deg, #2b2b2b 0%, #000000 100%)',
    color: 'white',
    fontFamily: 'sans-serif',
    minHeight: '100vh'
};

const header: CSS.Properties = {
    minHeight: '20vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem',
    margin: '0'
  };

const form: CSS.Properties = {
    minHeight: '20vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const input: CSS.Properties = {
    padding: '0.5rem',
    fontSize: '1rem',
    border: 'none',
    background: 'white'
}

export const inputStyle = input;
export const formStyle = form;
export const bodyStyle = body;
export const headStyles = header;
export const ButtonStyle = button;

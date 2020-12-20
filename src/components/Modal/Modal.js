import React, { useEffect } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');


export default function Modal({src, closeModal}) {

    const handler = ({ key }) => {
        if (key === 'Escape') this.props.closeModal()
    }

    const handleBackdrop = evt =>{
        if(evt.currentTarget === evt.target) closeModal()
    }

    useEffect(()=>{
        window.addEventListener('keydown', handler)
        return ()=>{
            window.removeEventListener('keydown', handler)
        };
    }, [handler])
    
    
    return createPortal(
        <div className="Overlay"  onClick={handleBackdrop}>
            <div className="Modal">
                <img src={src} alt="" />
            </div>
        </div>, 
        modalRoot
    );
}

Modal.defaultProps = {
    src:'',
    closeModal:()=>{}
}

Modal.defaultProps = {
    src:PropTypes.string.isRequired,
    closeModal:PropTypes.func
}

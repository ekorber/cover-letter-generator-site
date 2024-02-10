import styled from 'styled-components'

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const Content = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    position: relative;
    z-index: 1001;
    max-width: 90dvw;
    max-height: 90dvh;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 24px;
    cursor: pointer;
`;

function Modal({ isOpen, onClose, defaultCloseButton=true, children, className }) {

    // Only show content when modal is open
    if (isOpen) {
        return (
            <Background className="modal-background" onClick={onClose}>
                <Content className={`modal-content overflow-auto ${className}`} onClick={e => e.stopPropagation()}>
                    {
                        defaultCloseButton && <CloseButton className="close-button" onClick={onClose}>&times;</CloseButton>
                    }
                    {children}
                </Content>
            </Background>
        );
    } else {
        return null
    }
}

export default Modal;
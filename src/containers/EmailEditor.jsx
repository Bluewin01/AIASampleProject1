import EmailEditor from 'react-email-editor'
import { useRef } from 'react'
import { ButtonStyled } from '../components/Basic-styles'
import styled from 'styled-components';

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    padding: 10px;
`

function EmailEditorPage() {
    const emailEditorRef = useRef(null);

    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
        });
    };

    const onReady = () => {
        // editor is ready
        // you can load your template here;
        // const templateJson = {};
        // emailEditorRef.current.editor.loadDesign(templateJson);
    };

    return (
        <div>
            <ButtonContainer>
                <ButtonStyled onClick={exportHtml}>Export HTML</ButtonStyled>
            </ButtonContainer>

            <EmailEditor ref={emailEditorRef} onReady={onReady} />
        </div>
    )
}


export default EmailEditorPage
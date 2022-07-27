import Form from 'react-bootstrap/Form'

const Input = ({ name, inputName, onChange, value }) => (
        <>
            <Form.Label>{inputName}</Form.Label>
            <Form.Control name={name} type="text" placeholder={inputName} onChange={onChange} value={value} />
        </>
)

export default Input

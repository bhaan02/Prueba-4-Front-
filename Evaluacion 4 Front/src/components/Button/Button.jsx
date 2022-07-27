import Button from 'react-bootstrap/Button'

const CustomButton = ({ text, onClick }) => (
    <Button variant="primary" onClick={onClick}>{text}</Button>
)

export default CustomButton
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../Input'
import Button from '../Button';
import CustomTable from '../Table';
import { useState } from 'react';


const MaskedForm = () =>{
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState({
        code: '',
        name: '',
        description: '',
        price: '',
        amount: ''
    })

    const onChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    const onClick = () => {
        setProducts([
            ...products, 
            {
                code: value.code,
                name: value.name,
                description: value.description,
                price: value.price,
                amount: value.amount,
                total: value.price * value.amount,
                totalDiscount: ((value.price * value.amount) * 0.9)  
            }
        ])

        setValue({
            code: '',
            name: '',
            description: '',
            price: '',
            amount: ''
        })
    }

    return (
        <Container>
            <Form>
                <Col>
                    <Row>
                        <Input name='code' inputName="Código" onChange={onChange} value={value.code}/>
                    </Row>
                    <Row>
                        <Input name='name' inputName="Nombre Producto"  onChange={onChange} value={value.name}/>
                    </Row>
                    <Row>
                        <Input name='description' inputName="Descripción"onChange={onChange} value={value.description}/>
                    </Row>
                    <Row>
                        <Input name='price' inputName="Precio"  onChange={onChange} value={value.price}/>
                    </Row>
                    <Row>
                        <Input name='amount' inputName="Cantidad" onChange={onChange} value={value.amount}/>
                    </Row>
                </Col>                
                <Button text="Añadir Producto" onClick={onClick} onChange={onChange} />
            </Form>
           
           <CustomTable products={products}/>
        </Container>
    )
}

export default MaskedForm
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid'

const CustomTable = ({products}) => (
        <Table size="sm">
            <thead>
                <tr>
                <th>Código</th>
                <th>Articulo</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Total Descuento</th>
                </tr>
            </thead>
            <tbody>    
                {
                    products.map((product) => (
                        <tr key={uuidv4()}>
                            <td>{product.code}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.amount}</td>
                            <td>{product.total}</td>
                            <td>{product.totalDiscount}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
)

export default CustomTable
import styled from 'styled-components';
import { popularProducts } from '../data';
import ProductItem from './ProductItem';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`
export default function Product (){
    return(
        <Container>
            {popularProducts.map((item) => 
                <ProductItem item={item} key={item.id}/>
            )}
        </Container>
    );
}
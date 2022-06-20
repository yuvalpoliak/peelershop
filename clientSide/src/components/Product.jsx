import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import ProductItem from './ProductItem';
import axios from 'axios'

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`
export default function Product ({category, filter, sort}){
    const [products, setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])

    useEffect(()=>{
        const getProducts = async() => {
            try{
                const response = await axios.get(
                    category ?
                    `http://localhost:5000/api/product?category=${category}` :
                    `http://localhost:5000/api/product`
                    )
                console.log(response)
                setProducts(response.data)
            }
            catch(err){
                console.log(err)
            }
            
        }
        getProducts();
    },[category])

    useEffect(()=> {
        category && 
        setProductsFiltered(
            products.filter((item) => Object.entries(filter).every(([key,value]) => 
            item[key].includes(value)
            ))
        )
    },[products, category, filter])

    useEffect(()=> {
        if(sort === 'newest'){
            setProductsFiltered((prev) => 
            [...prev].sort((a,b) => a.createdAt - b.createdAt)
            )
        }
        else if(sort === 'asc'){
            setProductsFiltered((prev) => 
            [...prev].sort((a,b) => a.price - b.price)
            )
        }
        else{
            setProductsFiltered((prev) => 
            [...prev].sort((a,b) => b.price - a.price)
            )
        }
    }, [sort])

    return(
        <Container>
            {   category ? 
                productsFiltered.map(
                (item) => 
                <ProductItem item={item} key={item.id}/>
                )
                //when needed slice the products array here to 8 items.
                :products.map(
                (item) => 
                <ProductItem item={item} key={item.id}/>
                )
            }
        </Container>
    );
}
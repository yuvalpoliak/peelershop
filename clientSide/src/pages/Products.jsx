import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Product from '../components/Product';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.h1`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({margin: '0px 20px', display:
     'flex', flexDirection: 'column'})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: '0px'})}
`
const Select = styled.select`
    margin-right: 20px;
    padding: 10px;
    ${mobile({marginRight: '10px 0px'})}
`
const Options = styled.option`

`
function Products(){
    const location = useLocation()
    const category = location.pathname.split(':')[1];
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState('newest')

    const handleFilter = (event) => {
        const value = event.target.value;
        setFilter({
            ...filter,
            [event.target.name]: value,
        })
    }
    console.log(filter)
    return(
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Vintage</Title>
            <FilterContainer>
                <Filter>
                <FilterText>Filter:</FilterText>
                <Select name='color' onChange={handleFilter}>
                    <Options disabled >
                    Color
                    </Options>
                    <Options>red</Options>
                    <Options>blue</Options>
                    <Options>white</Options>
                    <Options>yellow</Options>
                    <Options>black</Options>
                    </Select>
                    <Select name='size' onChange={handleFilter}>
                    <Options disabled >
                    Size
                    </Options>
                    <Options>tiny</Options>
                    <Options>small</Options>
                    <Options>medium</Options>
                    <Options>large</Options>
                    <Options>humongous</Options>
                </Select>
                </Filter>
                <Filter>
                <FilterText>Sort:</FilterText>
                <Select onChange={(event) => setSort(event.target.value)}>
                <Options value='newest'>Newest</Options>
                <Options value='asc'>price (asc)</Options>
                <Options value='desc'>price (desc)</Options>
                </Select>
                </Filter>
            </FilterContainer>
            <Product category={category} filter={filter} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default Products
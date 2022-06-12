import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Product from '../components/Product';
import { mobile } from '../responsive';

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
    return(
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Vintage</Title>
            <FilterContainer>
                <Filter>
                <FilterText>Filter:</FilterText>
                <Select>
                    <Options disabled selected>
                    Color
                    </Options>
                    <Options>red</Options>
                    <Options>blue</Options>
                    <Options>white</Options>
                    <Options>yellow</Options>
                    <Options>black</Options>
                    </Select>
                    <Select>
                    <Options disabled selected>
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
                <Select>
                <Options selected>Newest</Options>
                <Options>price (asc)</Options>
                <Options>price (desc)</Options>
                </Select>
                </Filter>
            </FilterContainer>
            <Product/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default Products
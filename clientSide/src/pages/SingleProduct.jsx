import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: 'column', padding: '10px'})}
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    height: 70vh;
    ${mobile({height: '40vh'})}
    
`
const InfoContainer = styled.div`
    padding: 0px 50px
    ${mobile({padding: '10px'})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Description = styled.p`
    margin: 20px 0px
`
const Price= styled.span`
    font-weight: 100;
    font-size: 40px
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px
    ${mobile({width: '100%'})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FIlterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: '100%'})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    height: 30px;
    width: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    margin-top: 10px;

    &:hover {
        background-color: snow;
    }
`


export default function SingleProduct(){
    return(
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImageContainer>
                    <Image src='/woodenPeeler.jpg'/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Wooden Peeler</Title>
                    <Description>sjdhsjdh sdjhsjdhj sjdhsjdh 
                alskaslklask wuey etkj dchb dgb/,
                 qdyg elkj ssjdhjsdh skjfgh sldjvh dscgyqe forigu dgepbk SJXGVF SRLGJH AIYGDC LRIG sxyrd ltjgh dfgkbhn eiwyfg asutf dlkbnj aedcyv 
                 sldfvjgn keuwcfgb keufh
                  sljnh asjuydv rlwjgn keicyd</Description>
                    <Price>25 NIS</Price>
                    <FilterContainer>
                        <Filter>
                            <FIlterTitle>Color</FIlterTitle>
                            <FilterColor color='wheat'></FilterColor>
                            <FilterColor color='burlywood'></FilterColor>
                            <FilterColor color ='sandybrown'></FilterColor>
                        </Filter>
                        <Filter>
                        <FIlterTitle>Size</FIlterTitle>
                            <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: '10px'})}
`
const Title = styled.h1`
    text-align: center;
    font-weight: 300;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer; 
    background-color: ${props=> props.type === 'filled' ? 'black' : 'transparent'};
    border: ${props=> props.type === 'filled' && 'none'};
    color: ${props=> props.type === 'filled' && 'white'};  
`
const TopTexts = styled.div`
    ${mobile({display: 'none'})}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})}
`
const Info = styled.div`
    flex: 3;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})}
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color }
`
const ProductSize = styled.span``
const ProductName = styled.span``
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: '5px 15px'})}
`
const ProductPrice = styled.div`
    font-weight: 200;
    font-size: 30px;
    ${mobile({marginBottom: '20px'})}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const SummaryTitle= styled.h1`
    font-weight: 200;
`
const SummeryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === 'total' && '500'};
    font-size: ${props=> props.type === 'total' && '24px'};
`
const SummeryItemText = styled.span``
const SummeryItemPrice = styled.span``
const Button = styled.button`
    padding: 10px;
    width: 100%;
    background-color: black;
    color: white;
    font-weight: 600;
    border: none;
`

export default function Cart(){
    return(
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>YOUR SHOPPING CART:</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(1)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src='Potato-Peeler.png'/>
                                <Details>
                                    <ProductName><b>Product:</b>POTATO PEELER</ProductName>
                                    <ProductId><b>ID:</b>987654321</ProductId>
                                    <ProductColor color='black'/>
                                    <ProductSize><b>Size:</b>Small</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>20 NIS</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetails>
                                <Image src='WidePeeler.jpg'/>
                                <Details>
                                    <ProductName><b>Product:</b>WIDE PEELER</ProductName>
                                    <ProductId><b>ID:</b>573445698</ProductId>
                                    <ProductColor color='green'/>
                                    <ProductSize><b>Size:</b>Large</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>7</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>50 NIS</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummeryItem>
                        <SummeryItemText>Subtotal</SummeryItemText>
                        <SummeryItemText>370 NIS</SummeryItemText>
                        </SummeryItem>
                        <SummeryItem>
                        <SummeryItemText>Estimated Shipping</SummeryItemText>
                        <SummeryItemText>29.90 NIS</SummeryItemText>
                        </SummeryItem>
                        <SummeryItem>
                        <SummeryItemText>Sale Discount</SummeryItemText>
                        <SummeryItemText>50%</SummeryItemText>
                        </SummeryItem>
                        <SummeryItem type='total'>
                        <SummeryItemText >Total</SummeryItemText>
                        <SummeryItemPrice>199.95 NIS</SummeryItemPrice>
                        </SummeryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}
import { CreditCard, Facebook, Instagram, Mail, MailOutline, Payment, Phone, Room } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: 'none'})}
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: 'snow'})}
`
const SocialContainer = styled.div`
    display: flex;
`
const Logo = styled.div`
    font-weight: bold;
    font-size: 40px
`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
`
const ListItem = styled.li`
    width: 50%;
    margin: 10px;
`
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    justify-contact: center;
    margin-bottom: 20px
`
function Footer(){
    return(
        <Container>
            <Left>
                <Logo>Peeler.</Logo>
                <Description> Jibrish: sjdhsjdh sdjhsjdhj sjdhsjdh 
                alskaslklask wuey etkj dchb dgb/,
                 qdyg elkj ssjdhjsdh skjfgh sldjvh dscgyqe forigu dgepbk SJXGVF SRLGJH AIYGDC LRIG sxyrd ltjgh dfgkbhn eiwyfg asutf dlkbnj aedcyv 
                 sldfvjgn keuwcfgb keufh
                  sljnh asjuydv rlwjgn keicyd </Description>
                <SocialContainer>
                    <SocialIcon color='#3B5999'>
                        <Facebook/>
                    </SocialIcon>
                   <SocialIcon color='#E4405F'>
                        <Instagram/>
                    </SocialIcon>
                     
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact:</Title>
                <ContactItem><Room/>21 Example Street, Example Town</ContactItem>
                <ContactItem><Phone/>054 - 123 - 456 - 789 </ContactItem>
                <ContactItem><MailOutline/>Contact@Peeler.com</ContactItem>
                <CreditCard/>
            </Right>
        </Container>
    );
}

export default Footer;
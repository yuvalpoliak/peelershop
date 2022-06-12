import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: teal ;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: '75%'})}
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:  10px 0px ;
    padding: 10px;
`

const Button = styled.button`
    border: none;
    width: 40%;
    padding: 15px 20px;
    background-color: brown;
    color: white;
    cursor: pointer;
    margin: 5px 0px;
`
const Link = styled.a`
    text-decoration: underline;
    margin: 5px 0px;
    font-size: 12px;
`
export default function Login(){
    return(
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                <Input placeholder='username'></Input>
                <Input placeholder='password'></Input>
                <Button>LOGIN</Button>
                <Link>FORGOT PASSWORD</Link>
                <Link>SIGN UP</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}
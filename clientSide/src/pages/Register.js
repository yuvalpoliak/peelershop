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
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width: '75%'})}
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    margin: 20px 0px;
    font-size: 12px;
`
const Button = styled.button`
    border: none;
    padding: 15px 20px;
    background-color: brown;
    color: white;
    cursor: pointer;
    margin: 10px 10px;
`
const Div = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content : space-around;
`
export default function Register(){
    return(
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                <Input placeholder='first name'></Input>
                <Input placeholder='last name'></Input>
                <Input placeholder='username'></Input>
                <Input placeholder='email'></Input>
                <Input placeholder='password'></Input>
                <Input placeholder='confirm password'></Input>
                <Div>
                <Agreement>By creating an account, I consent to the <br/><b>PRIVACY POLICY</b></Agreement>
                <Button>CREATE</Button>
                </Div>
                </Form>
            </Wrapper>
        </Container>
    )
}
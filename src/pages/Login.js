import axios from "axios";
import { useRef } from "react";
import styled from "styled-components";
import { useAuth } from "../Hooks/useAuth";
export const Login = () =>{
    const InputEmail= useRef()
    const InputPassword= useRef()
    const {token, setToken}= useAuth()
    const FormSubmit = (evt) =>{
        evt.preventDefault();
        axios.post('https://reqres.in/api/login',{
            email:InputEmail.current.value,
            password:InputPassword.current.value
        })
          .then(function (response) {
            if(response.data)(
                setToken(response.data)
            )
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return(
       <Wrapper>
        <Title>
            Login page
        </Title>
        <Form onSubmit={FormSubmit}>
            <Input ref={InputEmail} className="form-control" type='email' placeholder="email..." />
            <Input ref={InputPassword} className="form-control" type='password' placeholder="password..." />
            <Button className="btn btn-primary" type="submit">
                send
            </Button>
        </Form>
       </Wrapper>
    )
}

const Wrapper = styled.div`
    height:100vh;
    padding:4rem;
    background-color:#444;
`
const Title = styled.h1`
    color: #fff;
    text-align:center;
    text-transform:uppercase;
`

const Form = styled.form`
    width:600px;
    margin:50px auto;
    padding:1rem;
    text-align:center;
    background-color:#fff;
    border:5px solid #ccc;
    border-radius:12px;
`
const Input = styled.input`
    width:100%;
    margin-bottom:30px;
`
const  Button = styled.button``
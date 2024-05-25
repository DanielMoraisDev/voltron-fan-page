import { ErrorMessage, Container, FieldsForm, SideForm, InputForm, SideImage, PrimaryButton, FormContainer, LabelForm } from "../../standard"

import axios from "axios"
import React from "react"

import formImage from "../../assets/images/image.png"

const Login = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [errorEmail, setErrorEmail] = React.useState(null)
    const [errorPassword, setErrorPassword] = React.useState(null)

    const [isEmailValidated, setIsEmailValidated] = React.useState(false)
    const [isPasswordValidated, setIsPasswordValidated] = React.useState(false)

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:3333/users")
            return res.data
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    const validationField = async (value) => {
        const actualField = event.target.id

        const data = await fetchData()

        if (actualField == "email") {
            const emailRegex = /^[\w.%+-]{1,64}@[\w.-]{2,}\.[a-zA-Z]{2,}$/;

            if (value == "" || !emailRegex.test(value)) {
                setErrorEmail("Preencha o email corretamente")
                setIsEmailValidated(false)
            } else {
                setErrorEmail(null)
                setIsEmailValidated(true)
            }
        } else if (actualField == "password") {
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{2,50}$/;
            
            if (value == "" || passwordRegex.test(value)) {
                setErrorPassword("Preencha a senha corretamente")
                setIsPasswordValidated(false)
            } else {
                const dataUser = data.find(e => e.email == email)

                if (dataUser) {
                    const passwordUser = dataUser.password

                    if (dataUser == undefined || !passwordUser || passwordUser != password) {
                        if (errorEmail != "Preencha a senha corretamente") {
                            setErrorEmail("Preencha a senha corretamente")
                        }
                        setErrorEmail("Email inválido")
                        setErrorPassword("Senha inválida")
                        setIsPasswordValidated(false)
                    } else {
                        if (errorEmail == "Preencha a senha corretamente") {
                            setErrorEmail(null)
                        }
                        setErrorPassword(null)
                        setIsPasswordValidated(true)
                    }
                } else {
                    setErrorEmail("Email inválido")
                    setErrorPassword("Senha inválida")
                }
            }
        }
    }

    const validatedFields = () => {
        if (isPasswordValidated && isEmailValidated) {
            event.preventDefault();
            window.location.href = "/inicio";
        } 
    }

    return (
        <Container>
            <FormContainer>
                <SideImage style={{height: "100%", margin: "0", boxShadow: "none", backgroundImage: `url(${formImage})` }}></SideImage>
                <SideForm>
                    <h1 style={{fontWeight: "bolder"}}>Fazer login</h1>
                    <FieldsForm onSubmit={(Event) => {
                        Event.preventDefault()
                        validatedFields()
                    }} action="">

                        <LabelForm htmlFor="email">Email: </LabelForm>
                        <InputForm id="email" type="text" name="email" placeholder="Digite seu email" onBlur={({ target }) => validationField(target.value)} value={email} onChange={({ target }) => setEmail(target.value)} />
                        {errorEmail && <ErrorMessage>{errorEmail}</ErrorMessage>}

                        <LabelForm htmlFor="password">Senha: </LabelForm>
                        <InputForm id="password" type="text" name="password" placeholder="Digite sua senha" onBlur={({ target }) => validationField(target.value)} value={password} onChange={({ target }) => setPassword(target.value)} />
                        {errorPassword && <ErrorMessage>{errorPassword}</ErrorMessage>}

                        <PrimaryButton>Enviar</PrimaryButton>
                    </FieldsForm>
                </SideForm>
            </FormContainer>
        </Container>
    )
}

export default Login
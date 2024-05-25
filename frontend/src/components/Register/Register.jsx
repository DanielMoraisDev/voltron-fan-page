import { ErrorMessage, Container, FieldsForm, SideForm, InputForm, SideImage, PrimaryButton, FormContainer, LabelForm } from "../../standard"

import axios from "axios"
import React from "react"

import formImage from "../../assets/images/wp5634314-voltron-legendary-defender-phone-wallpapers.jpg"

const Register = () => {
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")

    const [errorName, setErrorName] = React.useState(null)
    const [errorPassword, setErrorPassword] = React.useState(null)
    const [errorEmail, setErrorEmail] = React.useState(null)

    const [isNameValidated, setIsNameValidated] = React.useState(false)
    const [isPasswordValidated, setIsPasswordValidated] = React.useState(false)
    const [isEmailValidated, setIsEmailValidated] = React.useState(false)

    const [formData, setFormData] = React.useState({ name: "", email: "", password: "" })

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
        console.log(actualField)

        const data = await fetchData()

        if (actualField == "name") {
            if (value == "") {
                setErrorName("Preencha o nome corretamente")
                setIsNameValidated(false)
            } else {
                setErrorName(null)
                setFormData(e => ({ ...e, name: name }))
                setIsNameValidated(true)
            }
        } else if (actualField == "email") {
            const emailRegex = /^[\w.%+-]{1,64}@[\w.-]{2,}\.[a-zA-Z]{2,}$/;

            if (value == "" || !emailRegex.test(value)) {
                setErrorEmail("Preencha o email corretamente")
                setIsEmailValidated(false)
            } else {
                const verifyEmail = data.find(e => e.email == email)

                if (verifyEmail != undefined) {
                    setErrorEmail("Já existe um usuário com este email")
                    setIsEmailValidated(false)
                } else {
                    setErrorEmail(null)
                    setFormData(e => ({ ...e, email: email }))
                    setIsEmailValidated(true)
                }
            }
        } else if (actualField == "password") {
            if (value == "" || value.length < 2) {
                setErrorPassword("Preencha a senha corretamente")
                setIsPasswordValidated(false)
            } else {
                setErrorPassword(null)
                setFormData(e => ({ ...e, password: password }))
                setIsPasswordValidated(true)
            }
        }
    }

    const validatedFields = () => {
        if (isNameValidated && isPasswordValidated && isEmailValidated) {
            event.preventDefault();
            axios.post("http://localhost:3333/users", formData)
                .then(res => {
                    window.location.href = "/login";
                    setFormData({ name: "", email: "", password: "" })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    return (
        <Container>
            <FormContainer>
                <SideImage style={{ height: "100%", margin: "0", boxShadow: "none", backgroundImage: `url(${formImage})` }}></SideImage>
                <SideForm>
                    <h1 style={{ fontWeight: "bolder" }}>Fazer Registro</h1>
                    <FieldsForm onSubmit={(Event) => {
                        Event.preventDefault()
                        validatedFields()
                    }} action="">

                        <LabelForm htmlFor="name">Nome:</LabelForm>
                        <InputForm type="text" id="name" placeholder="Digite seu nome" onBlur={({ target }) => validationField(target.value)} value={name} onChange={({ target }) => setName(target.value)} />
                        {errorName && <ErrorMessage>{errorName}</ErrorMessage>}

                        <LabelForm htmlFor="email">Email:</LabelForm>
                        <InputForm type="text" id="email" placeholder="Digite seu email" onBlur={({ target }) => validationField(target.value)} value={email} onChange={({ target }) => setEmail(target.value)} />
                        {errorEmail && <ErrorMessage>{errorEmail}</ErrorMessage>}

                        <LabelForm htmlFor="password">Senha:</LabelForm>
                        <InputForm type="text" id="password" placeholder="Digite sua senha" onBlur={({ target }) => validationField(target.value)} value={password} onChange={({ target }) => setPassword(target.value)} />
                        {errorPassword && <ErrorMessage>{errorPassword}</ErrorMessage>}

                        <PrimaryButton>Enviar</PrimaryButton>
                    </FieldsForm>
                </SideForm>
            </FormContainer>
        </Container>
    )
}

export default Register
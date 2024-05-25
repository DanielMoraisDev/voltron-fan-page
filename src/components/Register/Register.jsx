import { Container, Form } from "../../standard"

import axios from "axios"
import React from "react"

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
            if (value == "") {
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
            if (value == "") {
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
        if (!isNameValidated || !isPasswordValidated || !isEmailValidated) {
            // alterar cor botão
        } else {
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
            <Form onSubmit={(Event) => {
                Event.preventDefault()
                validatedFields()
            }} action="">

                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" placeholder="Digite seu nome" onBlur={({ target }) => validationField(target.value)} value={name} onChange={({ target }) => setName(target.value)} />
                {errorName && <span>{errorName}</span>}

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" placeholder="Digite seu email" onBlur={({ target }) => validationField(target.value)} value={email} onChange={({ target }) => setEmail(target.value)} />
                {errorEmail && <span>{errorEmail}</span>}

                <label htmlFor="password">Senha:</label>
                <input type="text" id="password" placeholder="Digite sua senha" onBlur={({ target }) => validationField(target.value)} value={password} onChange={({ target }) => setPassword(target.value)} />
                {errorPassword && <span>{errorPassword}</span>}

                <button>Enviar</button>
            </Form>
        </Container>
    )
}

export default Register
import { Container, Form } from "../../standard"

import axios from "axios"
import React from "react"


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
            if (value == "") {
                setErrorEmail("Preencha o email corretamente")
                setIsEmailValidated(false)
            } else {
                setErrorEmail(null)
                setIsEmailValidated(true)
            }
        } else if (actualField == "password") {
            if (value == "") {
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
        if (!isPasswordValidated || !isEmailValidated) {
            // alterar cor botão
        } else {
            event.preventDefault();
            window.location.href = "/inicio";
        }
    }

    return (
        <Container>
            <Form onSubmit={(Event) => {
                Event.preventDefault()
                validatedFields()
            }} action="">

                <label htmlFor="email">Email: </label>
                <input id="email" type="text" name="email" placeholder="Digite seu email" onBlur={({ target }) => validationField(target.value)} value={email} onChange={({ target }) => setEmail(target.value)} />
                {errorEmail && <span>{errorEmail}</span>}

                <label htmlFor="password">Senha: </label>
                <input id="password" type="text" name="password" placeholder="Digite sua senha" onBlur={({ target }) => validationField(target.value)} value={password} onChange={({ target }) => setPassword(target.value)} />
                {errorPassword && <span>{errorPassword}</span>}

                <button>Enviar</button>
            </Form>
        </Container>
    )
}

export default Login
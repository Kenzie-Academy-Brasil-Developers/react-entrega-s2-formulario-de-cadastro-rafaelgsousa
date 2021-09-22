import {useHistory} from "react-router-dom"
import Stack from '@material-ui/core/Stack';
import TextField from '@material-ui/core/TextField';
import Button from  '@material-ui/core/Button'
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import "./style.css"

function FormCadastro(){

    const history = useHistory()

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório!"),
        email:yup.string().required("Campo obrigatório!"),
        password:yup.string().min(8,"Deve ter no mínimo 8 caracteres").required("Campo obrigatório!")
        .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve ter letra maíuscula, mínuscula, numero e caracter"),
        confpassword:yup.string().required("Item obrigatório").oneOf([yup.ref("password")],"senha incorreta")
    })

    const {register, handleSubmit, formState:{errors}}= useForm({resolver:yupResolver(schema)})

    const onSub =(data)=>{
        setTimeout(()=>{
            history.push(`/loge/${data.name}`)
        },800)
        
    }
    return(
        <form onSubmit={handleSubmit(onSub)}>
            <h3 className="titulo">Formulário de Cadastro</h3>
            <Stack spacing={2} direction="column">
            <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                variant="filled"
                placeholder="Nome"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
            />
            <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                variant="filled"
                placeholder="Email"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                type="email"
            />
            <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                variant="filled"
                placeholder="Senha"
                {...register("password")}
                type = "password"
                error={!!errors.password}
                helperText={errors.password?.message}
            />
            <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                variant="filled"
                placeholder="Confirmação de senha"
                type="password"
                {...register("confpassword")}
                error={!!errors.confpassword}
                helperText={errors.confpassword?.message}
            />
            <Button variant="outlined" type="submit">Enviar</Button>
            </Stack>
        </form>
    )
}

export default FormCadastro
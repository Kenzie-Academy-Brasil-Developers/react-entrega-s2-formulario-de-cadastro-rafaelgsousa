import {useHistory} from "react-router-dom"
import Button from  '@material-ui/core/Button'
import "./style.css"
import {useParams} from "react-router-dom"

function Loge(){

    const history = useHistory()

    const params = useParams()

    return(
        <>
            <div className="Container">
                <h3 className="welcome">Seja bem vindo(a), {params.name}!</h3>
                <h3 className="welcome">PLUUUUUUS UUUUULTRAAAAAA! XD</h3>
            </div>
            <Button variant="contained" onClick ={ ()=>history.push("/")}>Voltar para Cadastro</Button>
        </>
    )
}

export default Loge
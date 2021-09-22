import {Switch,Route} from "react-router-dom"
import FormCadastro from "./../pages/FormCadastro"
import Loge from "./../pages/Loge"
function Root(){


    return(
        <Switch>
            <Route exact path="/">
                <FormCadastro />
            </Route>
            <Route path={"/loge/:name"}>
                <Loge/>
            </Route>
        </Switch>
    )
}

export default Root
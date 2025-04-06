import { CampoTexto } from '../../Components';
import { Button } from '../../Components'

const FormCTarefa = () => { 
    return (
        
        <form>
            <CampoTexto />
            <Button texto="+" />
        </form>
    )
}

export { FormCTarefa };
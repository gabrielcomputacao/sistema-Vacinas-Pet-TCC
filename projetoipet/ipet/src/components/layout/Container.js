
import {DivContainer} from "./stylesLayout/ContainerStyle"

function Container(props){
        return(
            <DivContainer>
                {props.children}
            </DivContainer>
        )
}

export default Container
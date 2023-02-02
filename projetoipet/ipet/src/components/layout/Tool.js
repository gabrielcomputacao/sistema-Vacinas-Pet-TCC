import { FaDoorOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DivStyle,LinkStyle,Pstyle } from "./stylesLayout/ToolStyle";

export default function Tool() {
  return (
    <DivStyle>
      <LinkStyle to="/" >
        <div>
          <Pstyle>
            {" "}
            <FaDoorOpen /> &nbsp; &nbsp;Sair
          </Pstyle>
        </div>
      </LinkStyle>
    </DivStyle>
  );
}

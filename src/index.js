import ReactDOM from "react-dom";
import Validation from "./halo";

import Halo from "./halo";

const rootElement = document.getElementById("root");
ReactDOM.render(<Validation options={["a", "b", "c", "d"]} />, rootElement);

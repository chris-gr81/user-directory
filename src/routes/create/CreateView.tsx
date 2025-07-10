import Formular from "../../components/formular/Formular";
import { DEFAULT_USER } from "../../constants";

function CreateView() {
  return <Formular initialData={DEFAULT_USER} />;
}

export default CreateView;

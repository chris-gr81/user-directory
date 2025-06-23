import { useParams } from "react-router-dom";
import Formular from "../../components/formular/Formular";

function CreateView() {
  const { userId } = useParams();
  return <Formular />;
}

export default CreateView;

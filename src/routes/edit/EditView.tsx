import { useParams } from "react-router-dom";
import Formular from "../../components/formular/Formular";

function EditView() {
  const { userId } = useParams();
  console.log(userId);

  return <Formular />;
}
export default EditView;

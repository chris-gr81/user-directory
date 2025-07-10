import { useParams } from "react-router-dom";
import Formular from "../../components/formular/Formular";
import { useStorage } from "../../context/StorageContext";
import { DEFAULT_USER } from "../../constants";

function EditView() {
  const { profileId } = useParams();
  const { getProfile } = useStorage();

  const profile = profileId ? getProfile(profileId) : DEFAULT_USER;

  return <Formular initialData={profile} />;
}
export default EditView;

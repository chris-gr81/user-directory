import { useParams } from "react-router-dom";

function CreateView() {
  const { userId } = useParams();
  return <>Create or edit {userId}</>;
}

export default CreateView;

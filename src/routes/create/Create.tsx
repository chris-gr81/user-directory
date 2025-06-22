import { useParams } from "react-router-dom";

function Create() {
  const { userId } = useParams();
  return <>Create or edit {userId}</>;
}

export default Create;

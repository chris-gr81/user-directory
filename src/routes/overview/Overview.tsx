import { useContext } from "react";
import Card from "../../components/card/Card";
import { StorageContext } from "../../context/StorageContext";
import "./overview.scss";

function Overview() {
  const { profiles } = useContext(StorageContext);

  return (
    <div className="overview">
      {profiles.map((profile) => {
        return <Card key={profile.id} value={profile} />;
      })}
    </div>
  );
}

export default Overview;

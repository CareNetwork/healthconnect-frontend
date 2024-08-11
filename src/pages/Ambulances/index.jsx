import Layout from "../../components/Layouts/Layout";
import AmbulanceList from '../../components/Ambulance/AmbulanceList';

const Ambulances = () => {
  return (
    <Layout>
      <h1>Ambulance Services</h1>
      <AmbulanceList />
    </Layout>
  );
};

export default Ambulances;

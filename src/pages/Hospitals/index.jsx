
import Layout from '../../components/Layouts/Layout';
import HospitalList from '../../components/Hospitals/HospitalList';
import HospitalFilters from '../../components/Hospitals/HospitalFilters';

const Hospitals = () => {
  return (
    <Layout>
      <h1>Hospitals</h1>
      <HospitalFilters />
      <HospitalList />
    </Layout>
  );
};

export default Hospitals;
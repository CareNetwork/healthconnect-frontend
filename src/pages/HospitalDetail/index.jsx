
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layouts/Layout';

const HospitalDetails = () => {
  const { id } = useParams();

  // You would typically fetch hospital details here using the id

  return (
    <Layout>
      <h1>Hospital Details</h1>
      <p>Hospital ID: {id}</p>
      {/* Add more details here */}
    </Layout>
  );
};

export default HospitalDetails;

import { useParams } from 'react-router-dom';


const HospitalDetails = () => {
  const { id } = useParams();

  // I will fetch hospital details here using the id

  return (
    <>
      <h1>Hospital Details</h1>
      <p>Hospital ID: {id}</p>
      {/* Add more details here */}
    </>
  );
};

export default HospitalDetails;
import HospitalList from "../../components/Hospitals/HospitalList";
import HospitalFilters from "../../components/Hospitals/HospitalFilters";

const Hospitals = () => {
  return (
    <>
      <h1>Hospitals</h1>
      <HospitalFilters />
      <HospitalList />
    </>
  );
};

export default Hospitals;


import HospitalCard from './HospitalCard';
import HospitalFilters from './HospitalFilters';
import useHospitals from '../../hooks/useHospitals';

const HospitalList = () => {
  const { hospitals, loading, error, filters, setFilters } = useHospitals();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Hospitals in Ghana</h2>
      <HospitalFilters filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {hospitals.map(hospital => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
};

export default HospitalList;
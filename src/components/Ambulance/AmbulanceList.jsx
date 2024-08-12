import AmbulanceCard from './AmbulanceCard';
import useAmbulances from '../../hooks/useAmbulances';

const AmbulanceList = () => {
  const { ambulances, loading, error } = useAmbulances();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Ambulance Services in Ghana</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ambulances.map(ambulance => (
          <AmbulanceCard key={ambulance.id} ambulance={ambulance} />
        ))}
      </div>
    </div>
  );
};

export default AmbulanceList;
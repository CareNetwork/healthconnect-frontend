import HospitalCard from './HospitalCard';
import HospitalFilters from './HospitalFilters';
import useHospitals from '../../hooks/useHospitals';
import { useEffect } from 'react';
import { useState } from 'react';

const HospitalList = () => {
  const { hospitals, loading, error, filters, setFilters } = useHospitals();

  const [filteredHospitals, setFilteredHospitals] = useState([]);

  useEffect(() => {
    console.log(filters)
    let hospitalFilter = hospitals;
    if(filters.location != ""){
    hospitalFilter = hospitalFilter.filter((hospital)=>{
    return hospital.location == filters.location
  });}
  if(filters.services != ""){
    hospitalFilter = hospitalFilter.filter((hospital)=>{
      return hospital.services.map((service) => service.toLowerCase()).includes(filters.services.toLowerCase())
    });
  }

  if(filters.typeOfhospital != ""){
    hospitalFilter = hospitalFilter.filter((hospital)=>{
      return hospital.typeOfhospital == filters.typeOfhospital
    });
  }
setFilteredHospitals(hospitalFilter)
   
  }, [filters, hospitals])
  
  /**
   * 1. create a new state to hold filteredHospitals
   * 2. when filters changes, run a filter operation on the hospitals variable and assign the results to filteredHospitals
   * 3. where you map the hospitals, replace hospitals with filteredHospitals
   */
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Hospitals in Ghana</h2>
      <HospitalFilters key={'filters'} filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredHospitals.map((hospital, index) => (
          <HospitalCard key={index} hospital={hospital}   imageUrl={hospital.imageUrl}/>
        ))}
      </div>
    </div>
  );
};

export default HospitalList;

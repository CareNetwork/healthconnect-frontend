/* eslint-disable react/prop-types */
const HospitalFilters = ({ filters = {}, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    console.log('set filter', name)
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const regions = ["Greater Accra", "Ashanti Region", "Eastern Region", "Western Region", "Central Region"];
  const specialties = ["Cardiology", "Neurology", "Oncology", "Pediatrics", "Orthopedics"];
  const hospitalTypes = ["Public", "Private", "Non-profit", "Teaching"];

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        name="location"
        value={filters.location || ''}
        onChange={handleFilterChange}
        className="border rounded px-3 py-2"
      >
        <option value="">All Regions</option>
        {regions.map(region => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>

      <select
        name="services"
        value={filters.services || ''}
        onChange={handleFilterChange}
        className="border rounded px-3 py-2"
      >
        <option value="">All Specialties</option>
        {specialties.map(specialty => (
          <option key={specialty} value={specialty}>{specialty}</option>
        ))}
      </select>

      <select
        name="typeOfhospital"
        value={filters.typeOfhospital || ''}
        onChange={handleFilterChange}
        className="border rounded px-3 py-2"
      >
        <option value="">All Types</option>
        {hospitalTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default HospitalFilters;
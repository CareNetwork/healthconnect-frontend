/* eslint-disable react/prop-types */
const HospitalFilters = ({ filters = {}, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
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
        name="region"
        value={filters.region || ''}
        onChange={handleFilterChange}
        className="border rounded px-3 py-2"
      >
        <option value="">All Regions</option>
        {regions.map(region => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>

      <select
        name="specialty"
        value={filters.specialty || ''}
        onChange={handleFilterChange}
        className="border rounded px-3 py-2"
      >
        <option value="">All Specialties</option>
        {specialties.map(specialty => (
          <option key={specialty} value={specialty}>{specialty}</option>
        ))}
      </select>

      <select
        name="type"
        value={filters.type || ''}
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
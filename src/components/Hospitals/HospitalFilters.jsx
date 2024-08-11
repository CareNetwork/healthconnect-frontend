/* eslint-disable react/prop-types */
const HospitalFilters = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        name="region"
        value={filters.region}
        onChange={handleFilterChange}
        className="border rounded px-3 py-2"
      >
        <option value="">All Regions</option>
        {/* Add options for regions */}
      </select>
      <select
        name="specialty"
        value={filters.specialty}
        onChange={handleFilterChange}
        className="border rounded px-3 py-2"
      >
        <option value="">All Specialties</option>
        {/* Add options for specialties */}
      </select>
      <select
        name="type"
        value={filters.type}
        onChange={handleFilterChange}
        className="border rounded px-3 py-2"
      >
        <option value="">All Types</option>
        {/* Add options for hospital types */}
      </select>
    </div>
  );
};

export default HospitalFilters;
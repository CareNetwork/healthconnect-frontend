/* eslint-disable react/prop-types */
const AmbulanceFilters = ({ filters, setFilters }) => {
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
          <option value="">All Regionional Capitals</option>
          <option value="Accra">Accra</option>
          <option value="Kumasi">Kumasi</option>
          <option value="Cape Coast">Cape Coast</option>
          <option value="Sekondi Takoradi">Sekondi Takoradi</option>
          <option value="Koforidua">Koforidua</option>
          <option value="Tamale">Tamale</option>
          <option value="Ho">Ho</option>
          <option value="Wa">Wa</option>
          <option value="Bolgatanga">Bolgatanga</option>
          <option value="Sunyani">Sunyani</option>
          <option value="Damongo">Damongo</option>
          <option value="Techiman">Techiman</option>
          <option value="Goaso">Goaso</option>
          <option value="Sefwi Wiawso">Sefwi Wiawso</option>
          <option value="Nalerigu">Nalerigu</option>
        
        </select>
      </div>
    );
  };
  
  export default AmbulanceFilters;
  
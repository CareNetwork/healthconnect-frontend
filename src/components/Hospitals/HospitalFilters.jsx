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

  const regions = ["Greater Accra", "Ashanti Region", "Eastern Region", "Western Region", "Central Region", "Volta Region", "Oti Region", "Bono Region", "Savannah Region", "Upper West Region", "Upeer East Region", "Western North Region", "Bono East Region", "Northern Region", "North East Region","Ahafo Region"];
  const specialties = ["Cardiology", "Neurology", "Oncology", "Pediatrics", "Orthopedics", "Specialists", "Electrocardiography", "Dietetics", "Physiotherapy", "Ear, Nose and Throat", "Renal Dialysis", "catheterization"  ];
  const hospitalTypes = ["Public", "Private", "Non-profit", "Teaching"];

  const selectStyle = `
  appearance-none
  w-full
  md:w-auto
  bg-white
  border
  border-cyan-300
  text-cyan-700
  py-3
  px-4
  pr-8
  rounded-lg
  shadow-sm
  focus:outline-none
  focus:ring-2
  focus:ring-cyan-500
  focus:border-cyan-500
  transition-all
  duration-300
  ease-in-out
`;

const selectWrapperStyle = `
  relative
  w-full
  md:w-auto
`;

const selectIconStyle = `
  absolute
  right-3
  top-1/2
  transform
  -translate-y-1/2
  text-cyan-500
  pointer-events-none
`;

return (
  <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-6">
    <div className={selectWrapperStyle}>
      <select
        name="location"
        value={filters.location || ''}
        onChange={handleFilterChange}
        className={selectStyle}
      >
        <option value="">All Regions</option>
        {regions.map(region => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>
      <div className={selectIconStyle}>
        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      </div>
    </div>

    <div className={selectWrapperStyle}>
      <select
        name="services"
        value={filters.services || ''}
        onChange={handleFilterChange}
        className={selectStyle}
      >
        <option value="">All Specialties</option>
        {specialties.map(specialty => (
          <option key={specialty} value={specialty}>{specialty}</option>
        ))}
      </select>
      <div className={selectIconStyle}>
        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      </div>
    </div>

    <div className={selectWrapperStyle}>
      <select
        name="typeOfhospital"
        value={filters.typeOfhospital || ''}
        onChange={handleFilterChange}
        className={selectStyle}
      >
        <option value="">All Types</option>
        {hospitalTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <div className={selectIconStyle}>
        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      </div>
    </div>
  </div>
);
};

export default HospitalFilters;
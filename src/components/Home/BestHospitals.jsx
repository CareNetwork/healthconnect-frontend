import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';

const hospitals = [
  { id: 1, name: 'Korle-Bu Teaching Hospital', image: '/assets/images/korle-bu.jpg' },
  { id: 2, name: 'Komfo Anokye Teaching Hospital', image: '/assets/images/komfo-anokye.jpg' },
  // Add more hospitals
];

const BestHospitals = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Top Hospitals in Ghana</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
        >
          {hospitals.map((hospital) => (
            <SwiperSlide key={hospital.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={hospital.image} alt={hospital.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{hospital.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestHospitals;
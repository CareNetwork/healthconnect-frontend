
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper';

const reviews = [
  { id: 1, name: 'Kwame A.', content: 'Health Connect Ghana helped me find the right specialist quickly. Great service!' },
  { id: 2, name: 'Ama B.', content: 'The emergency feature is a lifesaver. I got an ambulance in minutes when I needed it most.' },
  // Add more reviews
];

const Reviews = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
        <Swiper
          modules={[]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-gray-100 p-8 rounded-lg">
                <p className="text-lg mb-4">{review.content}</p>
                <p className="font-semibold">- {review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
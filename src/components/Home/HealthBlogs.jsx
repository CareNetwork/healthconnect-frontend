import { maternity, covid, nhis } from '../../assets/images';

const blogs = [
  {
    id: 1,
    title: 'Understanding NHIS: Your Guide to the National Health Insurance Scheme in Ghana',
    excerpt: 'Learn about the National Health Insurance Scheme and how it benefits you.',
    image: nhis,
    url: 'https://www.nhis.gov.gh/news'
  },
  {
    id: 2,
    title: 'COVID-19 Update: Current Situation in Ghana',
    excerpt: 'Stay informed about the latest COVID-19 developments and safety measures.',
    image: covid,
    url: 'https://www.african-review.com/blog-details.php?id=17'
  },
  {
    id: 3,
    title: 'Maternity Service Agenda',
    excerpt: 'GMH’s newest ground-breaking initiative is poised to strengthen maternal and newborn care in northern Ghana.',
    image: maternity,
     url: 'https://ghanamedicalhelp.com/maternity-service-agenda/'
  },
];

const HealthBlogs = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Health Updates & News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <a 
                  href={blog.url}
                  className="text-blue-500 font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthBlogs;
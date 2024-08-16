import { useState } from 'react';

const faqs = [
  {
    question: 'How do I search for a hospital?',
    answer: 'You can search for hospitals by using the search bar on our homepage. Enter the hospital name, location, or specialty'
  },
  {
    question: 'Is the emergency call feature available 24/7?',
    answer: 'Yes, our emergency call feature is available 24 hours a day, 7 days a week.'
  },
  // Add more FAQs
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16" style={{ backgroundColor: '#164E63' }}> {/* Added background color */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white" style={{ paddingTop: '2rem' }}> {/* Added padding */}
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md ${activeIndex === index ? 'bg-white' : 'bg-white'}`} 
              style={{ borderColor: '#57F1E6', borderWidth: '1px', transition: 'all 0.3s ease-in-out' }}
            >
              <button
                className={`flex justify-between items-center w-full p-4 text-left text-${activeIndex === index ? 'black' : '#0b1121'} font-semibold`} 
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4" style={{ backgroundColor: '#1b2d42', color: '#57F1E6' }}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

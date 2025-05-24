import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  delay?: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    // ★ bg-white border border-gray-200 shadow-md
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md gsap-fade-in-up" data-gsap-delay={delay || "0"}>
      <button
        // ★ text-blue-600 hover:text-blue-700
        className="faq-question w-full text-left text-xl font-semibold flex justify-between items-center text-blue-600 hover:text-blue-700"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-')}`}
      >
        {question}
        <i className={`fas fa-chevron-down transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      {isOpen && (
        // ★ text-gray-700
        <div id={`faq-answer-${question.replace(/\s+/g, '-')}`} className="faq-answer mt-4 text-gray-700 text-sm">
          {answer}
        </div>
      )}
    </div>
  );
};
export default FaqItem;
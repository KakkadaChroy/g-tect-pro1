import React, {useState} from 'react';
import {ChevronDown, ChevronRight} from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
    isOpen?: boolean;
}

const FAQSection: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQItem[]>([
        {
            question: 'Nisi nisi magna nostrud non consequat conse ?',
            answer: 'Ullamco enim ut culpa irure non qui est duis et aute proident reprehenderit tempor mollit. Aliquip excepteur nisi culpa reprehenderit adipisicing aliquip excepteur nulla minim.',
            isOpen: true
        },
        {
            question: 'Nostrud eiusmod exercitation duis reprehenderit laboris ullamco. Magna culpa cillum ?',
            answer: 'Fugiat dolore sint nostrud commodo nostrud esse velit ad tempor. Aute reprehenderit magna cupidatat ut adipisicing ad occaecat anim sunt laboris ut eiusmod ex fugiat.',
            isOpen: false
        },
        {
            question: 'Fugiat pariatur minim eiusmod aute adipisicing aliqua occaecat ?',
            answer: 'Consectetur incididunt aliqua excepteur sint esse mollit quis nulla labore nostrud id elit. Ipsum enim fugiat consectetur voluptate do eiusmod sint ut anim.',
            isOpen: false
        },
        {
            question: 'Nostrud eiusmod exercitation duis ?',
            answer: 'Nostrud voluptate adipisicing magna ut adipisicing. Minim ea eu id anim amet culpa id ipsum reprehenderit non elit reprehenderit consectetur adipisicing.',
            isOpen: false
        },
        {
            question: 'Velit duis ipsum sint consectetur id sint Lorem minim fugiat. Velit velit veniam ullamco est adipisicing ?',
            answer: 'Incididunt sit quis fugiat officia excepteur id. Esse laboris non veniam tempor ullamco ex amet anim officia. Magna et dolore pariatur elit irure voluptate.',
            isOpen: false
        },
        {
            question: 'Deserunt consequat esse occaecat anim sunt quis mollit officia adipisicing incididunt ?',
            answer: 'Officia fugiat duis irure nisi deserunt consequat. Veniam labore culpa do officia in adipisicing officia dolore sint. Magna aliqua id labore in Lorem ad dolor voluptate cillum eu aliquip.',
            isOpen: false
        },
        {
            question: 'Aliquip irure mollit deserunt ipsum sit sunt veniam?',
            answer: 'Consequat nisi qui veniam eiusmod occaecat laboris do duis nostrud. Aliquip nostrud elit id duis quis dolor officia qui. Aliquip occaecat id incididunt quis nisi anim sunt eiusmod.',
            isOpen: false
        }
    ]);

    const toggleFAQ = (index: number) => {
        const updatedFaqs = faqs.map((faq, i) => {
            if (i === index) {
                return {...faq, isOpen: !faq.isOpen};
            }
            return faq;
        });

        setFaqs(updatedFaqs);
    };

    return (
        <div className="w-full max-w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border rounded-md overflow-hidden transition-all duration-200 ${
                            faq.isOpen ? 'border-green-500' : 'border-gray-200'
                        }`}
                    >
                        <button
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className={`font-medium text-[18px] ${faq.isOpen ? 'text-primary' : 'text-gray-800'}`}>
                                {faq.question}
                            </span>
                            <span className="flex-shrink-0 ml-2">
                                {faq.isOpen ? (
                                    <ChevronDown
                                        className={`h-5 w-5 ${faq.isOpen ? 'text-primary' : 'text-gray-400'}`}/>
                                ) : (
                                    <ChevronRight className="h-5 w-5 text-gray-400"/>
                                )}
                            </span>
                        </button>

                        {faq.isOpen && (
                            <div className="px-6 py-4 bg-white text-sm text-[#171A1F]">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
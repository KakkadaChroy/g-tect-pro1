import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FooterProps {
    brandName?: string;
    year?: number;
}

const CopyRightFooter: React.FC<FooterProps> = ({
                                           brandName = "Brand, Inc.",
                                           year = new Date().getFullYear()
                                       }) => {
    const [language, setLanguage] = React.useState("English");
    const [showLanguages, setShowLanguages] = React.useState(false);

    const languages = ["English", "Español", "Français", "Deutsch", "中文"];

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        setShowLanguages(false);
    };

    return (
        <footer className="w-full text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="relative mb-4 md:mb-0">
                    <button
                        className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded"
                        onClick={() => setShowLanguages(!showLanguages)}
                    >
                        <span>{language}</span>
                        <ChevronDown size={16} />
                    </button>

                    {showLanguages && (
                        <div className="absolute bottom-full mb-1 w-full bg-[#1f232d] border border-gray-600 rounded overflow-hidden">
                            {languages.map((lang) => (
                                <button
                                    key={lang}
                                    className={`w-full px-4 py-2 text-left hover:bg-gray-700 ${
                                        lang === language ? 'bg-gray-700' : ''
                                    }`}
                                    onClick={() => handleLanguageChange(lang)}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>© {year} {brandName}</span>
                    <span className="px-1">•</span>
                    <a href="/privacy" className="hover:text-white">Privacy</a>
                    <span className="px-1">•</span>
                    <a href="/terms" className="hover:text-white">Terms</a>
                    <span className="px-1">•</span>
                    <a href="/sitemap" className="hover:text-white">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default CopyRightFooter;
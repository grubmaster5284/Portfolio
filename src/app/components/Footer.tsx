import { portfolioData, getCopyrightText } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            {getCopyrightText(portfolioData.contact.footer.name, portfolioData.contact.footer.additionalText)}
          </p>
        </div>
      </div>
    </footer>
  );
}

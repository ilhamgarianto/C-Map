import { Facebook, Twitter, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Explore Maps', href: '#map' },
        { name: 'Datasets', href: '#' },
        { name: 'API Access', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'User Guide', href: '#' },
        { name: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'info@cmap-cimahi.id', href: 'mailto:info@cmap-cimahi.id' },
        { name: '+62 22 1234567', href: 'tel:+62221234567' },
        { name: 'Cimahi City Hall', href: '#' },
        { name: 'West Java, Indonesia', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">C-MAP</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
             Platform geoportal terintegrasi Kota Cimahi yang menghubungkan data spasial dengan kebutuhan perencanaan dan perumusan kebijakan, serta memberdayakan para pemangku kepentingan melalui wawasan berbasis data.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; 2026 C-MAP - Cimahi Map for Action & Policy. All rights reserved. | Developed for Cimahi City Government
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

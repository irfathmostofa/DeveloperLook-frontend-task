'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@gethyped.nl"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                info@gethyped.nl
              </a>
              <a
                href="tel:+31615337496"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                +31 6 1533 7496
              </a>
            </div>
          </motion.div>

          {/* Address Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Adres</h3>
            <a
              href="https://www.google.nl/maps/dir/52.2173687,6.866555/Beltrumsestraat+6,+7141+AL+Groenlo/@52.0427183,6.6137857,17z/data=!4m18!1m8!3m7!1s0x47b8772ecd81aedd:0x7c0d9a22590807d9!2sBeltrumsestraat+6,+7141+AL+Groenlo!3b1!8m2!3d52.0427183!4d6.6163606!16s%2Fg%2F11b8zbd_sy!4m8!1m1!4e1!1m5!1m1!1s0x47b8772ecd81aedd:0x7c0d9a22590807d9!2m2!1d6.6163606!2d52.0427183?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Beltrumsestraat 6,<br />
              7141 AL Groenlo
            </a>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Links</h3>
            <div className="space-y-3">
              <Link href="#expertises" className="block text-gray-400 hover:text-white transition-colors">
                Expertises
              </Link>
              <Link href="#work" className="block text-gray-400 hover:text-white transition-colors">
                Work
              </Link>
              <Link href="#about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Follow us</h3>
            <div className="flex gap-4">
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/gethyped.nl/' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/gethypednl/' },
                { name: 'TikTok', url: 'https://www.tiktok.com/@gethyped.nl' },
                { name: 'YouTube', url: 'https://www.youtube.com/@gethypednl' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all"
                >
                  <span className="text-xs font-bold">{social.name[0]}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8 origin-left"
        />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-400 text-sm space-y-4"
        >
          <p>© 2025 Get Hyped</p>
          <p>
            Design by{' '}
            <a href="https://dylanbrouwer.design/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Dylan
            </a>
          </p>
          <p>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacyvoorwaarden
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
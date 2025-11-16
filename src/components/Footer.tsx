import { Hotel, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Zap } from 'lucide-react';
import { Container } from './ui';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Hotel size={36} />
              <span>Glimmora Hotel</span>
            </div>
            <p className={styles.description}>
              Experience the future of hospitality with AI-powered services that make your stay seamless, comfortable, and unforgettable.
            </p>
            <div className={styles.poweredBy}>
              <Zap size={16} />
              Powered by Glimmora AI
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <a href="#rooms" className={styles.link}>Rooms & Suites</a>
            <a href="#features" className={styles.link}>AI Features</a>
            <a href="#pre-checkin" className={styles.link}>Pre-Check-In</a>
            <a href="#amenities" className={styles.link}>Amenities</a>
            <a href="#gallery" className={styles.link}>Gallery</a>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <a href="#" className={styles.link}>AI Concierge</a>
            <a href="#" className={styles.link}>Room Service</a>
            <a href="#" className={styles.link}>Spa & Wellness</a>
            <a href="#" className={styles.link}>Restaurant</a>
            <a href="#" className={styles.link}>Events</a>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <a href="tel:+1234567890" className={styles.link}>
              <Phone size={16} />
              +1 (234) 567-8900
            </a>
            <a href="mailto:info@glimmorahotel.com" className={styles.link}>
              <Mail size={16} />
              info@glimmorahotel.com
            </a>
            <a href="#" className={styles.link}>
              <MapPin size={16} />
              123 Luxury Ave, Paradise City
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div>© {currentYear} Glimmora Hotel. All rights reserved.</div>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.link}>Privacy Policy</a>
            <a href="#" className={styles.link}>Terms of Service</a>
            <a href="#" className={styles.link}>Cookie Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

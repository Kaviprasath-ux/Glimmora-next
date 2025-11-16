import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, ArrowRight } from 'lucide-react';
import { Container, Button } from './ui';
import styles from './PreCheckinShowcase.module.css';

const screenshots = [
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80',
  'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80',
];

const features = [
  'ID verification (OCR scan or manual upload)',
  'Choose your preferred room from available options',
  'Add special requests and preferences',
  'Digital key delivered to your phone (Apple/Google Wallet)',
  'Skip the front desk entirely - go straight to your room'
];

export const PreCheckinShowcase = () => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="pre-checkin" className={styles.section}>
      <Container>
        <div className={styles.container}>
          <motion.div
            className={styles.phoneWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.glowEffect} />
            <div className={styles.phoneMockup}>
              <div className={styles.phoneNotch} />
              <div className={styles.phoneScreen}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentScreenshot}
                    src={screenshots[currentScreenshot]}
                    alt={`Pre-check-in step ${currentScreenshot + 1}`}
                    className={styles.screenshot}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.badge}>
              <Zap size={16} />
              Pre-Check-In
            </div>

            <h2 className={styles.title}>Check-In From Anywhere</h2>
            <p className={styles.subtitle}>
              Complete your check-in 24 hours before arrival
            </p>

            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.featureIcon}>
                    <Check size={14} />
                  </div>
                  <span className={styles.featureText}>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className={styles.cta}>
              <Button variant="primary" size="large" endIcon={<ArrowRight size={20} />}>
                Start Pre-Check-In Now
              </Button>
              <Button variant="secondary" size="large">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default PreCheckinShowcase;

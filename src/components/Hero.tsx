import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Button } from './ui';
import styles from './Hero.module.css';

export const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Luxury Hotel"
          className={styles.heroImage}
        />
      </div>

      <motion.div
        className={styles.heroContent}
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
          Experience AI-Powered Hospitality
        </motion.h1>

        <motion.p className={styles.heroSubtitle} variants={fadeInUp}>
          Where luxury meets innovation - powered by Glimmora AI
        </motion.p>

        <motion.div
          className={styles.bookingWidget}
          variants={fadeInUp}
        >
          <div className={styles.bookingTitle}>
            <span>Find Your Perfect Stay</span>
            <div className={styles.aiBadge}>
              <Sparkles size={16} className={styles.sparkle} />
              AI-Optimized Pricing
            </div>
          </div>

          <div className={styles.bookingForm}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Check-In</label>
              <input
                type="date"
                className={styles.formInput}
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Check-Out</label>
              <input
                type="date"
                className={styles.formInput}
                defaultValue={new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Guests</label>
              <select className={styles.formSelect}>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Room Type</label>
              <select className={styles.formSelect}>
                <option>All Room Types</option>
                <option>Standard Room</option>
                <option>Deluxe Room</option>
                <option>Suite</option>
                <option>Penthouse</option>
              </select>
            </div>
          </div>

          <Button
            variant="primary"
            size="large"
            className={styles.bookingButton}
          >
            Check Availability
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

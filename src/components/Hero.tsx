import { motion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import { Button } from './ui';
import styles from './Hero.module.css';

export const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Luxury Hotel"
          className={styles.heroImage}
        />

        {/* Floating decorative elements */}
        <div className={`${styles.floatingElement} ${styles.float1}`} />
        <div className={`${styles.floatingElement} ${styles.float2}`} />
        <div className={`${styles.floatingElement} ${styles.float3}`} />
      </div>

      <motion.div
        className={styles.heroContent}
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.div className={styles.badge} variants={fadeInUp}>
          ✨ Welcome to the Future of Hospitality
        </motion.div>

        <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
          Experience <span className={styles.highlight}>AI-Powered</span> Luxury
        </motion.h1>

        <motion.p className={styles.heroSubtitle} variants={fadeInUp}>
          Where cutting-edge technology meets timeless elegance.
          Your journey to effortless comfort begins here.
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

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        onClick={scrollToFeatures}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className={styles.scrollText}>Discover More</span>
        <ChevronDown size={24} className={styles.scrollArrow} />
      </motion.div>
    </section>
  );
};

export default Hero;

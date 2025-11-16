import { motion } from 'framer-motion';
import { Award, Users, Globe, Sparkles } from 'lucide-react';
import { Container } from './ui';
import styles from './LuxuryStats.module.css';

const stats = [
  {
    icon: Award,
    number: '98%',
    label: 'Guest Satisfaction',
    description: 'AI-powered service excellence'
  },
  {
    icon: Users,
    number: '50K+',
    label: 'Happy Guests',
    description: 'Served annually'
  },
  {
    icon: Sparkles,
    number: '24/7',
    label: 'AI Concierge',
    description: 'Always at your service'
  },
  {
    icon: Globe,
    number: '9',
    label: 'Languages',
    description: 'Multilingual support'
  }
];

export const LuxuryStats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.pattern} />
      <Container>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className={styles.stat}
                variants={statVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.icon}>
                  <Icon size={24} />
                </div>
                <div className={styles.number}>{stat.number}</div>
                <div className={styles.label}>{stat.label}</div>
                <div className={styles.description}>{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default LuxuryStats;

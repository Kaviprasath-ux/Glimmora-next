import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  MessageCircle,
  Sparkles,
  Smartphone,
  TrendingDown,
  Heart,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Container } from './ui';
import styles from './AIFeatures.module.css';

const features = [
  {
    icon: ClipboardCheck,
    title: 'Skip the Front Desk',
    description: 'Complete check-in from your phone before arrival. Save time and go straight to your room.',
    cta: 'Start Pre-Check-In',
    href: '#pre-checkin'
  },
  {
    icon: MessageCircle,
    title: 'Instant Assistance',
    description: 'Get help anytime with our multilingual AI chatbot. Available 24/7 in 9 languages.',
    cta: 'Chat Now',
    href: '#ai-assistant'
  },
  {
    icon: Sparkles,
    title: 'Perfect Room Match',
    description: 'AI assigns the best room based on your preferences, booking history, and availability.',
    cta: 'Learn More',
    href: '#rooms'
  },
  {
    icon: Smartphone,
    title: 'Contactless Entry',
    description: 'Your phone is your room key. Works with Apple Wallet & Google Pay.',
    cta: 'Get Digital Key',
    href: '#pre-checkin'
  },
  {
    icon: TrendingDown,
    title: 'Best Rate Guarantee',
    description: 'AI-optimized pricing ensures you get the best deal. Dynamic rates updated in real-time.',
    cta: 'Check Rates',
    href: '#rooms'
  },
  {
    icon: Heart,
    title: 'Knows Your Preferences',
    description: 'AI remembers your preferences for future stays. Personalized experience every time.',
    cta: 'Create Profile',
    href: '#'
  }
];

export const AIFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className={styles.section}>
      <Container>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Powered by Glimmora AI</h2>
          <p className={styles.subtitle}>Experience the future of hospitality</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className={styles.featureCard}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={32} className={styles.icon} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <a href={feature.href} className={styles.featureCTA}>
                  {feature.cta}
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className={styles.poweredBy}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.poweredByText}>Powered by</p>
          <div className={styles.poweredByLogo}>
            <Zap size={40} />
            <span>Glimmora AI</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AIFeatures;

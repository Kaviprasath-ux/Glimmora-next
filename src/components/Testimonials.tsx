import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
import { Container } from './ui';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "The AI-powered pre-check-in was a game changer! I went straight to my room with my digital key. No waiting, no hassle. This is the future of hospitality.",
    author: "Sarah Chen",
    title: "Business Executive",
    initials: "SC",
    rating: 5,
    verified: true
  },
  {
    quote: "The AI concierge understood my requests perfectly, even in French! It recommended the best local restaurants and booked spa treatments instantly. Truly impressive.",
    author: "Jean-Pierre Laurent",
    title: "Travel Blogger",
    initials: "JL",
    rating: 5,
    verified: true
  },
  {
    quote: "I was amazed by how the AI remembered my preferences from my last stay. The room was exactly as I like it, and the personalized service was outstanding.",
    author: "Michael Rodriguez",
    title: "Regular Guest",
    initials: "MR",
    rating: 5,
    verified: true
  }
];

export const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
      <div className={`${styles.decorativeCircle} ${styles.circle1}`} />
      <div className={`${styles.decorativeCircle} ${styles.circle2}`} />

      <Container>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>GUEST EXPERIENCES</div>
          <h2 className={styles.title}>What Our Guests Say</h2>
          <p className={styles.subtitle}>
            Real stories from guests who experienced the future of hospitality
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles.testimonial}
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFA726" className={styles.star} />
                ))}
              </div>

              <p className={styles.quote}>{testimonial.quote}</p>

              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.initials}
                </div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.author}</div>
                  <div className={styles.authorTitle}>{testimonial.title}</div>
                </div>
                {testimonial.verified && (
                  <div className={styles.verifiedBadge}>
                    <CheckCircle size={12} />
                    Verified
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;

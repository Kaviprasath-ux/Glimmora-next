import { motion } from 'framer-motion';
import { Users, Maximize, Wifi, Coffee, Sparkles } from 'lucide-react';
import { Container, Button } from './ui';
import styles from './RoomsSuites.module.css';

const rooms = [
  {
    id: 1,
    title: 'Deluxe Ocean View',
    description: 'Spacious room with breathtaking ocean views, modern amenities, and premium comfort.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    features: [
      { icon: Users, text: '2-3 Guests' },
      { icon: Maximize, text: '45 m²' },
      { icon: Wifi, text: 'Free WiFi' },
      { icon: Coffee, text: 'Mini Bar' }
    ],
    isAIRecommended: true,
    isAvailable: true
  },
  {
    id: 2,
    title: 'Executive Suite',
    description: 'Luxury suite with separate living area, king bed, and stunning city panorama.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    features: [
      { icon: Users, text: '2-4 Guests' },
      { icon: Maximize, text: '75 m²' },
      { icon: Wifi, text: 'Free WiFi' },
      { icon: Coffee, text: 'Premium Mini Bar' }
    ],
    isAIRecommended: false,
    isAvailable: true
  },
  {
    id: 3,
    title: 'Penthouse Paradise',
    description: 'Ultimate luxury with private terrace, jacuzzi, and 360° panoramic views.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    features: [
      { icon: Users, text: '4-6 Guests' },
      { icon: Maximize, text: '120 m²' },
      { icon: Wifi, text: 'Gigabit WiFi' },
      { icon: Coffee, text: 'Full Bar' }
    ],
    isAIRecommended: true,
    isAvailable: false
  }
];

export const RoomsSuites = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="rooms" className={styles.section}>
      <Container>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Rooms & Suites</h2>
          <p className={styles.subtitle}>Luxury accommodations tailored to your needs</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              className={styles.roomCard}
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className={styles.imageWrapper}>
                <img src={room.image} alt={room.title} className={styles.roomImage} />
                <div className={styles.badges}>
                  {room.isAIRecommended && (
                    <div className={styles.badge + ' ' + styles.badgeAI}>
                      <Sparkles size={12} />
                      AI Recommended
                    </div>
                  )}
                  {room.isAvailable && (
                    <div className={styles.badge + ' ' + styles.badgeStatus}>
                      Available
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.roomContent}>
                <div className={styles.roomHeader}>
                  <div>
                    <h3 className={styles.roomTitle}>{room.title}</h3>
                  </div>
                  <div className={styles.price}>
                    <div className={styles.priceAmount}>${room.price}</div>
                    <div className={styles.priceNight}>per night</div>
                  </div>
                </div>

                <p className={styles.roomDescription}>{room.description}</p>

                <div className={styles.features}>
                  {room.features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className={styles.feature}>
                        <Icon size={16} />
                        <span>{feature.text}</span>
                      </div>
                    );
                  })}
                </div>

                <Button variant="primary" size="large" fullWidth>
                  {room.isAvailable ? 'Book Now' : 'Join Waitlist'}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default RoomsSuites;

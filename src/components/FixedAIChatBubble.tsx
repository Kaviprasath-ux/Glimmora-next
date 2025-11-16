import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Mic, Send } from 'lucide-react';
import styles from './FixedAIChatBubble.module.css';

export const FixedAIChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className={styles.chatBubble}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className={styles.chatButton}
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot size={28} />
              <div className={styles.badge}>1</div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, type: 'spring' }}
          >
            <div className={styles.chatHeader}>
              <div className={styles.chatHeaderLeft}>
                <div className={styles.avatar}>
                  <Bot size={24} style={{ color: 'var(--primary-main)' }} />
                </div>
                <div>
                  <div className={styles.headerTitle}>Glimmora AI Assistant</div>
                  <div className={styles.headerStatus}>
                    <span className={styles.statusDot} />
                    Online
                  </div>
                </div>
              </div>
              <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className={styles.chatMessages}>
              <div className={styles.message}>
                <div className={styles.messageBubble}>
                  👋 Hello! I'm Glimmora AI, your 24/7 hotel assistant. How can I help you today?
                </div>
                <div className={styles.quickActions}>
                  <button className={styles.quickAction}>🛎️ Room Service</button>
                  <button className={styles.quickAction}>🧹 Housekeeping</button>
                  <button className={styles.quickAction}>🎭 Concierge</button>
                  <button className={styles.quickAction}>📞 Front Desk</button>
                </div>
              </div>
            </div>

            <div className={styles.chatInput}>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className={styles.input}
                />
                <button className={styles.iconButton}>
                  <Mic size={18} />
                </button>
              </div>
              <button className={`${styles.iconButton} ${styles.sendButton}`}>
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FixedAIChatBubble;

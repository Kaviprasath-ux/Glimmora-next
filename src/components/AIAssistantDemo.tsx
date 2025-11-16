import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Mic, Send, Globe, Zap, Clock } from 'lucide-react';
import { Container } from './ui';
import styles from './AIAssistantDemo.module.css';

interface Message {
  id: number;
  type: 'user' | 'ai';
  text: string;
  time: string;
  quickActions?: string[];
}

const demoConversation: Message[] = [
  {
    id: 1,
    type: 'ai',
    text: "Hello! I'm Glimmora AI, your 24/7 hotel assistant. How can I help you today?",
    time: '10:30 AM',
    quickActions: ['Room Service', 'Housekeeping', 'Concierge', 'Front Desk']
  },
  {
    id: 2,
    type: 'user',
    text: 'What time is breakfast served?',
    time: '10:31 AM'
  },
  {
    id: 3,
    type: 'ai',
    text: 'Our breakfast buffet is served daily from 6:30 AM to 11:00 AM in the Grand Dining Room on the 2nd floor. Would you like me to reserve a table for you?',
    time: '10:31 AM'
  },
  {
    id: 4,
    type: 'user',
    text: 'Yes, please book a table for 2 at 8:30 AM tomorrow',
    time: '10:32 AM'
  },
  {
    id: 5,
    type: 'ai',
    text: 'Perfect! I\'ve reserved a table for 2 guests tomorrow at 8:30 AM. You\'ll receive a confirmation email shortly. Is there anything else I can help you with?',
    time: '10:32 AM',
    quickActions: ['Spa Booking', 'Local Attractions', 'Room Service', 'Late Checkout']
  }
];

export const AIAssistantDemo = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < demoConversation.length) {
        if (demoConversation[currentIndex].type === 'ai') {
          setIsTyping(true);
          setTimeout(() => {
            setMessages(prev => [...prev, demoConversation[currentIndex]]);
            setIsTyping(false);
            currentIndex++;
          }, 1000);
        } else {
          setMessages(prev => [...prev, demoConversation[currentIndex]]);
          currentIndex++;
        }
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <section id="ai-assistant" className={styles.section}>
      <Container>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.badge}>
            <Zap size={16} />
            AI-Powered
          </div>
          <h2 className={styles.title}>Meet Your AI Concierge</h2>
          <p className={styles.subtitle}>Available 24/7 in 9 languages</p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <Clock size={18} />
              <span>Instant Responses</span>
            </div>
            <div className={styles.feature}>
              <Globe size={18} />
              <span>Multilingual Support</span>
            </div>
            <div className={styles.feature}>
              <Mic size={18} />
              <span>Voice & Text</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.chatDemo}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderLeft}>
              <div className={styles.aiAvatar}>
                <Bot size={24} style={{ color: 'var(--primary-main)' }} />
              </div>
              <div>
                <h3 style={{ fontWeight: 600, marginBottom: '4px' }}>Glimmora AI</h3>
                <div className={styles.aiStatus}>
                  <span className={styles.statusDot} />
                  <span>Online</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.chatMessages}>
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`${styles.message} ${message.type === 'user' ? styles.messageUser : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`${styles.messageAvatar} ${message.type === 'ai' ? styles.messageAvatarAI : styles.messageAvatarUser}`}>
                    {message.type === 'ai' ? <Bot size={20} /> : 'You'}
                  </div>
                  <div className={styles.messageContent}>
                    <div className={`${styles.messageBubble} ${message.type === 'ai' ? styles.messageBubbleAI : styles.messageBubbleUser}`}>
                      {message.text}
                    </div>
                    {message.quickActions && (
                      <div className={styles.quickActions}>
                        {message.quickActions.map((action, index) => (
                          <button key={index} className={styles.quickAction}>
                            {action}
                          </button>
                        ))}
                      </div>
                    )}
                    <div className={styles.messageTime}>{message.time}</div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  className={styles.message}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className={`${styles.messageAvatar} ${styles.messageAvatarAI}`}>
                    <Bot size={20} />
                  </div>
                  <div className={styles.messageContent}>
                    <div className={`${styles.messageBubble} ${styles.messageBubbleAI}`}>
                      <div className={styles.typing}>
                        <span className={styles.typingDot} />
                        <span className={styles.typingDot} />
                        <span className={styles.typingDot} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.chatInput}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Type your message..."
                className={styles.input}
                disabled
              />
              <button className={styles.iconButton} disabled>
                <Mic size={20} />
              </button>
            </div>
            <button className={`${styles.iconButton} ${styles.sendButton}`} disabled>
              <Send size={20} />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AIAssistantDemo;

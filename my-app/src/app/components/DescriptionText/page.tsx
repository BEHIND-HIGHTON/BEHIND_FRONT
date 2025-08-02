'use client';

import { motion } from 'framer-motion';

export function DescriptionText() {
  const descriptions = [
    "그래서 우리는 BEHIND를 만들었습니다.",
    "BEHIND는 상대방 말의 속뜻을 분석하고,",
    "내가 하려는 말이 불쾌하거나 오해의 소지가 있는지 미리 알려줍니다.",
  ];

  const closing = [
    "이제는 말이 두렵지 않은 세상으로,",
    "당신의 말, BEHIND가 함께합니다.",
  ];

  return (
    <div className="space-y-4 text-gray-300">
      {descriptions.map((desc, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
        >
          {desc}
        </motion.p>
      ))}
      <div className="mt-8 space-y-2">
        {closing.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: (descriptions.length + index) * 0.3 }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

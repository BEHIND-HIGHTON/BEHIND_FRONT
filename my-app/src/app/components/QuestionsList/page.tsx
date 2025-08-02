// components/QuestionsList/page.tsx

'use client';

import { motion } from 'framer-motion';

const questions = [
  '“지금 이 말을 해도 괜찮을까?”',
  '“상대방이 상처받지는 않을까?”',
  '“저 말, 정말 그 뜻으로 한 걸까?”',
];

export function QuestionsList() {
  return (
    <div className="space-y-4 my-6">
      {questions.map((question, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          className="text-lg text-gray-200"
        >
          {question}
        </motion.p>
      ))}
    </div>
  );
}

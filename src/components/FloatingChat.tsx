import { useState } from 'react';
import { MessageCircle, X, Phone, Mail, UserRound } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ConsultationDialog } from './ConsultationDialog';

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const openKakaoChat = () => {
    // 카카오톡 채널 채팅 URL (실제 채널 ID로 교체 필요)
    window.open('http://pf.kakao.com/_wLxexmxb', '_blank');
  };

  const openConsultation = () => {
    setConsultationOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
        {/* 1:1 상담 버튼 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <button
            onClick={openConsultation}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
            aria-label="1:1 상담"
          >
            <UserRound className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            
            {/* 툴팁 */}
            <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              1:1 무료 상담
            </div>
          </button>
        </motion.div>

        {/* 카카오 채널 버튼 */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="채팅 상담"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Chat Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-14 right-0 sm:bottom-16 w-72 sm:w-64 bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200"
              >
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4">
                  <h3 className="text-gray-900">빠른 상담</h3>
                  <p className="text-sm text-gray-800 mt-1">
                    궁금한 점을 편하게 문의하세요
                  </p>
                </div>

                <div className="p-2">
                  <button
                    onClick={openKakaoChat}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-50 transition-colors text-left"
                  >
                    <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">카카오톡 상담</div>
                      <div className="text-xs text-gray-500">1:1 무료 상담</div>
                    </div>
                  </button>

                  <a
                    href="tel:1800-5714"
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">전화 상담</div>
                      <div className="text-xs text-blue-600">1800-5714</div>
                    </div>
                  </a>

                  <a
                    href="mailto:onestart-company@naver.com"
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">이메일 문의</div>
                      <div className="text-xs text-gray-500">24시간 접수</div>
                    </div>
                  </a>
                </div>

                <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    평일 09:00 - 18:00 운영
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Consultation Dialog */}
      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
}
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { X, Sparkles } from 'lucide-react';

export function RenewalPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 오늘 하루 안보기 체크
    const hideUntil = localStorage.getItem('renewalPopupHideUntil');
    const today = new Date().toDateString();

    if (hideUntil !== today) {
      // 팝업 표시 (약간의 딜레이 후)
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
    }
  }, []);

  const handleHideToday = () => {
    const today = new Date().toDateString();
    localStorage.setItem('renewalPopupHideUntil', today);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-none">
        {/* 헤더 배경 그라디언트 */}
        <div className="relative bg-gradient-to-br from-[#2E5C8A] via-[#3D6B99] to-[#4A7BA8] p-6 text-white">
          <div className="absolute top-3 right-3">
            <button
              onClick={handleHideToday}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-center mb-3">
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>

          <DialogHeader className="text-center space-y-2">
            <DialogTitle className="text-xl text-white">
              홈페이지 리뉴얼 오픈!
            </DialogTitle>
            <DialogDescription className="text-white/90 text-sm">
              더욱 새로워진 모습으로 찾아뵙습니다
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* 본문 내용 */}
        <div className="p-6 space-y-4">
          <p className="text-center text-gray-700 leading-relaxed text-sm">
            <strong className="text-[#2E5C8A]">원스타트컴퍼니</strong> 홈페이지가<br />
            더욱 편리하고 세련된 디자인으로 새롭게 단장했습니다.
          </p>

          <p className="text-center text-xs text-gray-500">
            *기존 도메인(www.onestart-company.com)은<br />
            당사와 무관하게 무분별한 사이트로 연결 되고 있는 불법사이트입니다.<br />
            정확한 정보 및 정상적인 서비스 이용을 위해<br />
            현재의 공식 홈페이지를 이용해 주시기 바랍니다.<br />
            www.onestart-company.co.kr
          </p>

          {/* 버튼 영역 */}
          <div className="pt-2">
            <button
              onClick={handleHideToday}
              className="w-full text-sm text-gray-400 hover:text-gray-600 transition-colors py-2 underline"
            >
              오늘 하루 보지 않기
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

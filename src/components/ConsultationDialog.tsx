import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Send, Phone, Mail, Clock } from 'lucide-react';

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultationDialog({ open, onOpenChange }: ConsultationDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 유효성 검사
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error('필수 항목을 모두 입력해주세요.');
      setIsSubmitting(false);
      return;
    }

    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('올바른 이메일 주소를 입력해주세요.');
      setIsSubmitting(false);
      return;
    }

    // 전화번호 형식 검사
    const phoneRegex = /^[0-9-]+$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('올바른 전화번호를 입력해주세요.');
      setIsSubmitting(false);
      return;
    }

    try {
      // 이메일 본문 구성
      const emailSubject = `[상담신청] ${formData.company || '개인'} - ${formData.name}`;
      const emailBody = `
상담 신청 내용
━━━━━━━━━━━━━━━━━━━━━

이름: ${formData.name}
회사명: ${formData.company || '(미입력)'}
연락처: ${formData.phone}
이메일: ${formData.email}
상담분야: ${formData.service || '(미선택)'}

━━━━━━━━━━━━━━━━━━━━━
문의 내용:
${formData.message || '(내용 없음)'}

━━━━━━━━━━━━━━━━━━━━━
※ 이 메일은 원스타트컴퍼니 홈페이지 상담신청 폼을 통해 발송되었습니다.
      `.trim();
      
      // mailto 링크 생성
      const mailtoLink = `mailto:onestart-company@naver.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // 이메일 클라이언트 열기
      window.location.href = mailtoLink;
      
      toast.success('이메일 클라이언트가 열립니다', {
        description: '이메일을 확인하고 전송 버튼을 눌러주세요.',
      });
      
      // 폼 초기화 및 다이얼로그 닫기
      setTimeout(() => {
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          service: '',
          message: '',
        });
        onOpenChange(false);
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      toast.error('오류가 발생했습니다. 다시 시도해주세요.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl text-blue-600">무료 상담 신청</DialogTitle>
          <DialogDescription className="text-base">
            전문가가 빠른 시간 내에 연락드리겠습니다.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {/* 상담 신청 폼 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-gray-700">
                  이름 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="홍길동"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-gray-700">
                  회사명
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="(주)원스타트"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-gray-700">
                  연락처 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="010-1234-5678"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700">
                  이메일 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="service" className="text-gray-700">
                상담 분야
              </Label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">선택해주세요</option>
                <option value="정부지원사업">정부 지원사업 컨설팅</option>
                <option value="기업인증">기업 인증 (벤처/이노비즈 등)</option>
                <option value="투자유치">투자유치 및 IR</option>
                <option value="경영전략">경영전략 수립</option>
                <option value="수출지원">수출 지원</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div>
              <Label htmlFor="message" className="text-gray-700">
                문의 내용
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="상담받고 싶은 내용을 자유롭게 작성해주세요."
                rows={4}
                className="mt-1"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
            >
              {isSubmitting ? (
                '전송 중...'
              ) : (
                <>
                  <Send className="mr-2 w-5 h-5" />
                  상담 신청하기
                </>
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              입력하신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
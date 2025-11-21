import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import { Phone, Mail, Clock } from 'lucide-react';

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 이메일 본문 구성
    const emailSubject = `[상담신청] ${formData.company} - ${formData.name}`;
    const emailBody = `
상담 신청 내용
━━━━━━━━━━━━━━━━━━━━━

이름: ${formData.name}
회사명: ${formData.company}
이메일: ${formData.email}
연락처: ${formData.phone}

━━━━━━━━━━━━━━━━━━━━━
상담 내용:
${formData.message}

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
        email: '',
        phone: '',
        message: '',
      });
      onOpenChange(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">무료 상담 신청</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            중소기업 경영의 고민, 전문가와 함께 해결하세요.
            상담 신청을 남겨주시면 빠르게 연락드리겠습니다.
          </DialogDescription>
        </DialogHeader>

        {/* 연락처 정보 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 py-3 sm:py-4 border-y">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">무료상담전화</p>
              <p className="text-blue-600 font-semibold">1800-5714</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">이메일</p>
              <p className="text-sm">onestart-company@naver.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">운영시간</p>
              <p className="text-sm">평일 09:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* 상담 신청 폼 */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">이름 *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="홍스타"
                required
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="company">회사명 *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="(주)회사명"
                required
                className="mt-1.5"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">이메일 *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="phone">연락처 *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="010-1234-5678"
                required
                className="mt-1.5"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message">상담 내용 *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="원하시는 내용을 적어주세요."
              required
              className="mt-1.5 min-h-[120px]"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button 
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              취소
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              상담 신청하기
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
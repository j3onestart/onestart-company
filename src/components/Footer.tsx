import { Phone, Mail, MapPin } from 'lucide-react';
import logo from 'figma:asset/a6525d012e72c016835eec4b97ae32cf5418dacb.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <img src={logo} alt="원스타트컴퍼니 로고" className="h-12 w-auto" />
              <div>
                <h3 className="text-white text-2xl sm:text-3xl mb-1">원스타트컴퍼니</h3>
                <p className="text-sm text-blue-300">ONESTART COMPANY</p>
              </div>
            </div>
            <p className="text-sm sm:text-base mb-4 max-w-md leading-relaxed text-gray-400">
              성공적인 기업 성장을 위한 전문 컨설팅 파트너
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-5 text-lg sm:text-xl">문의하기</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:1800-5714" 
                  className="hover:text-blue-400 transition-colors"
                >
                  1800-5714
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:onestart-company@naver.com" 
                  className="break-all hover:text-blue-400 transition-colors"
                >
                  onestart-company@naver.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-white mb-5 text-lg sm:text-xl">사업자 정보</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>상호명 : 원스타트컴퍼니</li>
              <li>사업자 등록번호 : 584-06-00418</li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-400" />
                <span>서울특별시 성동구 성수동 2가 273-13<br />(에스팩토리빌딩 213호)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 sm:pt-10">
          <div className="text-center space-y-3">
            <p className="text-xs sm:text-sm text-gray-400">
              COPYRIGHT©원스타트컴퍼니, ALL RIGHTS RESERVED.
            </p>
            <div className="flex justify-center gap-6 sm:gap-8 text-xs sm:text-sm">
              <button className="hover:text-blue-400 transition-colors">개인정보처리방침</button>
              <button className="hover:text-blue-400 transition-colors">이용약관</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
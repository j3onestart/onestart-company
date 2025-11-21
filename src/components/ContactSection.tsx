import { Card, CardContent } from './ui/card';
import { Phone, Mail, Clock, MapPin, Navigation } from 'lucide-react';

export function ContactSection() {
  const address = '서울특별시 성동구 성수동2가 273-13 (에스팩토리B동 213호)';
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}`;

  const openNaverMap = () => {
    window.open(`https://map.naver.com/v5/search/${encodeURIComponent(address)}`, '_blank');
  };

  const openKakaoMap = () => {
    window.open(`https://map.kakao.com/link/search/${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold text-sm sm:text-base">LOCATION</span>
          <h2 className="mt-2 mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">찾아오시는 길</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            원스타트컴퍼니를 찾아주신 고객님을 환영합니다.<br className="hidden sm:block" />
            편안한 상담 공간에서 전문가와 만나보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <Card className="border-0 shadow-md flex-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">주소</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      서울특별시 성동구<br />
                      성수동2가 273-13<br />
                      (에스팩토리B동 213호)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md flex-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">무료상담전화</h4>
                    <a 
                      href="tel:1800-5714" 
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      1800-5714
                    </a>
                    <p className="text-sm text-gray-600 mt-1">평일 09:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md flex-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">이메일</h4>
                    <a 
                      href="mailto:onestart-company@naver.com" 
                      className="text-blue-600 hover:text-blue-700 transition-colors text-sm block"
                    >
                      onestart-company@naver.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">24시간 접수 가능</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md flex-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">운영시간</h4>
                    <p className="text-gray-700 text-sm">평일: 09:00 - 18:00</p>
                    <p className="text-gray-700 text-sm">점심: 12:00 - 13:00</p>
                    <p className="text-sm text-gray-600 mt-1">주말/공휴일 휴무</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="원스타트컴퍼니 위치"
                  ></iframe>
                </div>
                <div className="p-6 bg-white border-t">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={openNaverMap}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      네이버 지도로 보기
                    </button>
                    <button
                      onClick={openKakaoMap}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      카카오맵으로 보기
                    </button>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="mb-2"><span className="font-semibold text-gray-700">지하철:</span> 2호선 뚝섬역 6번 출구 도보 7분</p>
                    <p><span className="font-semibold text-gray-700">주차:</span> 건물 내 주차 가능 (방문 시 사전 안내 요망)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
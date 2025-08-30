import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue via-steel-blue to-dark-slate scroll-smooth">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-heading text-2xl font-bold text-steel-blue">
              СкайОкна
            </div>
            <div className="hidden md:flex space-x-8 font-body">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-steel-blue transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-steel-blue transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-steel-blue transition-colors">О компании</button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-steel-blue transition-colors">Контакты</button>
            </div>
            <Button className="bg-steel-blue hover:bg-dark-slate text-white">
              Заказать звонок
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/20 via-steel-blue/30 to-dark-slate/50"></div>
        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Панорамные окна
            <br />
            <span className="text-sky-blue">как небо</span>
          </h1>
          <p className="font-body text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Превращаем ваш дом в произведение искусства с безграничным видом на мир
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sky-blue hover:bg-steel-blue text-white font-body px-8 py-4 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-steel-blue font-body px-8 py-4 text-lg">
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Наши услуги
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              Полный цикл работ по установке панорамных окон от проектирования до сдачи объекта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Home",
                title: "Панорамное остекление",
                description: "Остекление от пола до потолка с использованием современных технологий"
              },
              {
                icon: "Wrench", 
                title: "Монтаж и установка",
                description: "Профессиональная установка окон любой сложности и конфигурации"
              },
              {
                icon: "Shield",
                title: "Гарантийное обслуживание", 
                description: "Полная гарантия на все виды работ и используемые материалы"
              },
              {
                icon: "Ruler",
                title: "Индивидуальное проектирование",
                description: "Создание уникальных решений под ваши потребности"
              },
              {
                icon: "Truck",
                title: "Доставка материалов",
                description: "Быстрая и безопасная доставка всех необходимых материалов"
              },
              {
                icon: "Users",
                title: "Консультации экспертов",
                description: "Профессиональные консультации на всех этапах проекта"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="bg-sky-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-steel-blue" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-sky-blue/10 to-steel-blue/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                О компании СкайОкна
              </h2>
              <p className="font-body text-lg text-gray-700 mb-6 leading-relaxed">
                Мы специализируемся на установке панорамных окон более 10 лет. Наша команда состоит из 
                опытных мастеров, которые превращают обычные помещения в пространства с безграничным 
                видом на небо и окружающий мир.
              </p>
              <p className="font-body text-lg text-gray-700 mb-8 leading-relaxed">
                Используем только качественные материалы и современные технологии, что позволяет 
                гарантировать долговечность и надёжность наших конструкций.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="font-heading text-4xl font-bold text-steel-blue mb-2">500+</div>
                  <div className="font-body text-gray-600">Завершённых проектов</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-4xl font-bold text-steel-blue mb-2">10</div>
                  <div className="font-body text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-4xl font-bold text-steel-blue mb-2">100%</div>
                  <div className="font-body text-gray-600">Гарантия качества</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-4xl font-bold text-steel-blue mb-2">24/7</div>
                  <div className="font-body text-gray-600">Поддержка клиентов</div>
                </div>
              </div>
              
              <Button className="bg-steel-blue hover:bg-dark-slate text-white">
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
            
            <div className="animate-fade-in">
              <img 
                src="/img/3a806a45-8153-4938-a74b-f1a0f70a996d.jpg" 
                alt="Панорамные окна в современном интерьере" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Свяжитесь с нами
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-blue/10 p-3 rounded-full">
                    <Icon name="MapPin" size={24} className="text-steel-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">Адрес офиса</h3>
                    <p className="font-body text-gray-600">г. Москва, ул. Небесная, 15, офис 301</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-blue/10 p-3 rounded-full">
                    <Icon name="Phone" size={24} className="text-steel-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">Телефон</h3>
                    <p className="font-body text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-blue/10 p-3 rounded-full">
                    <Icon name="Mail" size={24} className="text-steel-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">Email</h3>
                    <p className="font-body text-gray-600">info@skywindows.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-blue/10 p-3 rounded-full">
                    <Icon name="Clock" size={24} className="text-steel-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">Режим работы</h3>
                    <p className="font-body text-gray-600">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <img 
                  src="/img/c84efbc3-681a-461c-afa7-9094761f4dd2.jpg" 
                  alt="Команда профессионалов СкайОкна" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
            
            <div className="animate-fade-in">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-6">
                    Оставьте заявку
                  </h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                        Ваше имя
                      </label>
                      <Input placeholder="Введите ваше имя" className="w-full" />
                    </div>
                    
                    <div>
                      <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                        Телефон
                      </label>
                      <Input placeholder="+7 (___) ___-__-__" className="w-full" />
                    </div>
                    
                    <div>
                      <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="your@email.ru" className="w-full" />
                    </div>
                    
                    <div>
                      <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                        Сообщение
                      </label>
                      <Textarea 
                        placeholder="Расскажите о вашем проекте..." 
                        className="w-full h-32"
                      />
                    </div>
                    
                    <Button className="w-full bg-steel-blue hover:bg-dark-slate text-white">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-heading text-2xl font-bold text-sky-blue mb-4">
                СкайОкна
              </div>
              <p className="font-body text-gray-300">
                Панорамные окна как небо - безграничные возможности для вашего дома
              </p>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Услуги</h4>
              <ul className="font-body text-gray-300 space-y-2">
                <li>Панорамное остекление</li>
                <li>Монтаж окон</li>
                <li>Проектирование</li>
                <li>Обслуживание</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Контакты</h4>
              <div className="font-body text-gray-300 space-y-2">
                <p>г. Москва, ул. Небесная, 15</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@skywindows.ru</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-sky-blue hover:border-sky-blue">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-sky-blue hover:border-sky-blue">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-sky-blue hover:border-sky-blue">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-body text-gray-400">
                © 2024 СкайОкна. Все права защищены.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0 font-body text-gray-400">
                <a href="#" className="hover:text-sky-blue transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-sky-blue transition-colors">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
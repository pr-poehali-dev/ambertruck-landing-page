import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const slides = [
    {
      title: 'Ambertruck — надежная основа вашего бизнеса',
      subtitle: 'Грузовики и пикапы для малого и среднего бизнеса. EURO-4 без мочевины. Легендарные двигатели ISUZU и Cummins. Уникальная 4-ступенчатая защита от коррозии',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/da4ace03-5ccf-4306-9254-6f13ed823d39.jpg'
    },
    {
      title: 'Специальные условия на Ambertrak SN',
      subtitle: 'Надежный помощник с гарантией 3 года и бесплатным ТО',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/6f2e1b9d-679c-44df-bce0-31d69c1a88f2.jpg'
    }
  ];

  const models = [
    { name: 'Ambertrak JL', price: 'от 2 890 000', power: '120', weight: '3.5', image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/6f2e1b9d-679c-44df-bce0-31d69c1a88f2.jpg' },
    { name: 'Ambertrak JM', price: 'от 3 490 000', power: '150', weight: '5.0', image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/6f2e1b9d-679c-44df-bce0-31d69c1a88f2.jpg' },
    { name: 'Ambertrak SN', price: 'от 4 190 000', power: '170', weight: '8.0', image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/6f2e1b9d-679c-44df-bce0-31d69c1a88f2.jpg' }
  ];

  const advantages = [
    { icon: 'Engine', title: 'Легендарные двигатели', text: 'Isuzu и Cummins с ресурсом более 500 000 км' },
    { icon: 'Fuel', title: 'EURO-4 без мочевины', text: 'Выгодная эксплуатация без дополнительных затрат' },
    { icon: 'Truck', title: 'Сверхпрочная рама', text: 'Рама из стали толщиной 214 мм' },
    { icon: 'Wrench', title: 'Надежная трансмиссия', text: 'Гидравлические тормоза и проверенная КПП' }
  ];

  const financing = [
    { icon: 'CreditCard', title: 'Кредит', items: ['Первый взнос от 0%', 'Ставка от 15%', 'Одобрение за 1 день'] },
    { icon: 'FileText', title: 'Лизинг', items: ['Аванс от 0%', 'Экономия на налоге', 'Индивидуальные условия'] },
    { icon: 'RefreshCw', title: 'Trade-in', items: ['Оценка за 15 минут', 'Справедливая цена', 'Все заботы на дилере'] }
  ];

  const testimonials = [
    { name: 'Иван Петров', position: 'Директор', company: 'ООО "Логистик"', model: 'Ambertrak JM', text: 'Отличный грузовик для нашего бизнеса. Экономичный и надежный.' },
    { name: 'Сергей Иванов', position: 'Владелец', company: 'ИП Иванов', model: 'Ambertrak SN', text: 'Работает без нареканий уже 2 года. Очень доволен покупкой.' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Icon name="Truck" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Ambertruck</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:88000000000" className="text-lg font-semibold">8 (800) 000-00-00</a>
            <Button variant="outline">Позвонить</Button>
            <Button>Получить консультацию</Button>
          </div>
        </div>
      </header>

      <section className="relative h-screen pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={slides[currentSlide].image} 
            alt="Ambertruck" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl text-white fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="text-lg px-8">Подобрать модель</Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
                Рассчитать лизинг
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} />
                <span>Гарантия 3 года</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Percent" size={20} />
                <span>Кредит от 0%</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="RefreshCw" size={20} />
                <span>Trade-in с выгодой</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Выберите модель под вашу задачу</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {models.map((model, index) => (
              <Card key={index} className="hover-scale overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-4">{model.price} ₽</div>
                  <div className="space-y-2 mb-6 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Мощность:</span>
                      <span className="font-semibold text-foreground">{model.power} л.с.</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Полная масса:</span>
                      <span className="font-semibold text-foreground">{model.weight} т</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">Получить предложение</Button>
                    <Button variant="outline" className="flex-1">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-center mb-12">Почему Ambertruck?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-red-500 text-xl font-bold mb-4">Европейцы</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="X" size={16} className="text-red-500" />
                    <span>Высокая цена</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="X" size={16} className="text-red-500" />
                    <span>Требуют мочевину</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="X" size={16} className="text-red-500" />
                    <span>Дорогие запчасти</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center bg-primary/5 rounded-xl p-6 border-2 border-primary">
                <div className="text-primary text-2xl font-bold mb-4">Ambertruck</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 font-semibold">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Конкурентная цена</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>EURO-4 без мочевины</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Большая грузоподъемность</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Просторная кабина</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Антикоррозийная защита</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-red-500 text-xl font-bold mb-4">Китайцы</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="X" size={16} className="text-red-500" />
                    <span>Низкое качество</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="X" size={16} className="text-red-500" />
                    <span>Быстрая коррозия</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="X" size={16} className="text-red-500" />
                    <span>Маленькая кабина</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Ключевые преимущества</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {advantages.map((adv, index) => (
              <Card key={index} className="text-center p-6 hover-scale">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={adv.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
                  <p className="text-muted-foreground">{adv.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">4-ступенчатая защита от коррозии</h3>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                    <span>Окраска рамы</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-11">
                  Специальная грунтовка и многослойное покрытие защищают раму от коррозии на протяжении всего срока службы
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                    <span>Антигравийное покрытие кабины</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-11">
                  Защитное покрытие предотвращает повреждения от камней и дорожного мусора
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                    <span>Обработка внутренних полостей</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-11">
                  Все скрытые полости обработаны специальными составами для предотвращения коррозии изнутри
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                    <span>Защитная пленка на металле</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-11">
                  Прозрачная защитная пленка предохраняет металл от царапин и сколов
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Выгодные условия для вашего бизнеса</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {financing.map((fin, index) => (
              <Card key={index} className="p-8 hover-scale">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={fin.icon} className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{fin.title}</h3>
                  <ul className="space-y-3">
                    {fin.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-accent to-accent/80 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Узнайте ваши условия за 15 минут</h3>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <Input 
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white text-foreground flex-1"
                  required
                />
                <Input 
                  placeholder="Ваш телефон" 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white text-foreground flex-1"
                  required
                />
                <Button type="submit" size="lg" variant="secondary" className="md:w-auto">
                  Получить предложение
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Нам доверяют предприятия России</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((test, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{test.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-bold">{test.name}</div>
                      <div className="text-sm text-muted-foreground">{test.position}, {test.company}</div>
                      <div className="text-sm text-primary font-semibold">{test.model}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6">О дилере</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>Официальный дилер Ambertruck с 2015 года</p>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-green-500" />
                    <span>Собственный сервисный центр</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-green-500" />
                    <span>Склад оригинальных запчастей</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-green-500" />
                    <span>Индивидуальные условия для бизнеса</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-green-500" />
                    <span>Более 500 довольных клиентов</span>
                  </div>
                </div>
                <Button size="lg" className="mt-8">Получить консультацию</Button>
              </div>
              <div className="h-64 md:h-auto">
                <img 
                  src="https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/042d7782-f845-462f-b930-c252c435b687.jpg" 
                  alt="Автосалон" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Получите лучшее предложение сегодня</h2>
          <p className="text-xl mb-12 opacity-90">Оставьте заявку — рассчитаем за 15 минут!</p>
          
          <Card className="max-w-2xl mx-auto p-8">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input 
                  placeholder="Ваш телефон" 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <div className="flex items-start gap-2">
                  <Checkbox id="consent" required />
                  <label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                    Я согласен на обработку персональных данных
                  </label>
                </div>
                <Button type="submit" size="lg" className="w-full">Отправить заявку</Button>
              </form>
              
              <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t">
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="Car" className="text-primary" />
                  <span className="text-sm">Тест-драйв</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="Clock" className="text-primary" />
                  <span className="text-sm">Быстрая консультация</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="Gift" className="text-primary" />
                  <span className="text-sm">Специальные условия</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={24} />
                <span className="text-xl font-bold">Ambertruck</span>
              </div>
              <p className="text-sm opacity-75">Официальный дилер коммерческой техники</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Модели</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:opacity-100">Ambertrak JL</a></li>
                <li><a href="#" className="hover:opacity-100">Ambertrak JM</a></li>
                <li><a href="#" className="hover:opacity-100">Ambertrak SN</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:opacity-100">Кредит</a></li>
                <li><a href="#" className="hover:opacity-100">Лизинг</a></li>
                <li><a href="#" className="hover:opacity-100">Trade-in</a></li>
                <li><a href="#" className="hover:opacity-100">Сервис</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:88000000000">8 (800) 000-00-00</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@ambertruck.ru">info@ambertruck.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, д.1</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>© 2025 Ambertruck. Все права защищены.</p>
            <a href="#" className="hover:opacity-100">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

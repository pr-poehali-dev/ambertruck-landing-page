import { useState, useEffect } from 'react';
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
      title: 'AmberVan — надежная основа вашего бизнеса',
      subtitle: 'Вместительные фургоны для малого и среднего бизнеса. EURO-4 без мочевины. Легендарные двигатели ISUZU и Cummins. Уникальная 4-ступенчатая защита от коррозии',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/14c9d645-10b7-4244-9565-0f5bafba4863.jpg'
    },
    {
      title: 'Специальные условия на AmberVan SN',
      subtitle: 'Надежный помощник с гарантией 3 года и бесплатным ТО',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/266c941a-f210-414d-a1f3-0f4c43f65be6.jpg'
    }
  ];

  const models = [
    { 
      name: 'AmberVan JL', 
      price: 'от 2 490 000', 
      power: '120', 
      volume: '10', 
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/14c9d645-10b7-4244-9565-0f5bafba4863.jpg' 
    },
    { 
      name: 'AmberVan JM', 
      price: 'от 2 990 000', 
      power: '150', 
      volume: '13', 
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/266c941a-f210-414d-a1f3-0f4c43f65be6.jpg' 
    },
    { 
      name: 'AmberVan SN', 
      price: 'от 3 690 000', 
      power: '170', 
      volume: '16', 
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/14c9d645-10b7-4244-9565-0f5bafba4863.jpg' 
    }
  ];

  const advantages = [
    { 
      title: 'Легендарные двигатели', 
      text: 'Isuzu и Cummins с ресурсом более 500 000 км',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/36e5349a-cadd-44fe-b45f-93065dbd058d.jpg'
    },
    { 
      title: 'Выгодные условия', 
      text: 'Кредит, лизинг, trade-in. Первый взнос от 0%, ставка от 15%',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/82159b68-f05e-4ad1-bd6e-79afc2343f87.jpg'
    },
    { 
      title: 'Прочный кузов', 
      text: 'Усиленный пол и стенки для максимальной надежности',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/0fc6ea64-09d2-440b-bfd2-c99fc4eea3e3.jpg'
    },
    { 
      title: 'Антикоррозийная защита', 
      text: '4-ступенчатая система защиты кузова от коррозии',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/14c9d645-10b7-4244-9565-0f5bafba4863.jpg'
    }
  ];

  const financing = [
    { icon: 'CreditCard', title: 'Кредит', items: ['Первый взнос от 0%', 'Ставка от 15%', 'Одобрение за 1 день'] },
    { icon: 'FileText', title: 'Лизинг', items: ['Аванс от 0%', 'Экономия на налоге', 'Индивидуальные условия'] },
    { icon: 'RefreshCw', title: 'Trade-in', items: ['Оценка за 15 минут', 'Справедливая цена', 'Все заботы на дилере'] }
  ];

  const testimonials = [
    { 
      name: 'Алексей Морозов', 
      position: 'Директор', 
      company: 'ООО "Экспресс Доставка"', 
      model: 'AmberVan JM', 
      text: 'За год эксплуатации ни одной поломки. Экономичный и вместительный фургон для нашей службы доставки.' 
    },
    { 
      name: 'Дмитрий Соколов', 
      position: 'Владелец', 
      company: 'ИП Соколов', 
      model: 'AmberVan SN', 
      text: 'Отличное соотношение цены и качества. Берет все, что нужно. Обслуживание простое и недорогое.' 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Package" className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">ТТМ Центр</div>
                  <div className="text-xl font-bold text-primary">AmberVan</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:88000000000" className="text-lg font-semibold">8 (800) 000-00-00</a>
            <Button variant="outline">Позвонить</Button>
            <Button className="bg-accent hover:bg-accent/90">Получить консультацию</Button>
          </div>
        </div>
      </header>

      <section className="relative h-screen pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={slides[currentSlide].image} 
            alt="AmberVan" 
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
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
              <Button size="lg" className="text-lg px-8 bg-accent hover:bg-accent/90">
                Получить консультацию
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
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-accent w-8' : 'bg-white/50 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Выберите модель под вашу задачу</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {models.map((model, index) => (
              <Card key={index} className="hover-scale overflow-hidden border-2 hover:border-primary transition-all">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-muted to-white">
                  <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
                  <div className="text-3xl font-bold text-accent mb-4">{model.price} ₽</div>
                  <Button variant="outline" className="w-full">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Ключевые преимущества</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {advantages.map((adv, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={adv.image} 
                    alt={adv.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-white to-muted/30 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">{adv.title}</h3>
                  <p className="text-muted-foreground">{adv.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Выгодные условия для вашего бизнеса</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {financing.map((fin, index) => (
              <Card key={index} className="p-8 hover-scale bg-white">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={fin.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{fin.title}</h3>
                  <ul className="space-y-3">
                    {fin.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-accent to-accent/90 text-white text-center shadow-2xl">
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
                <Button type="submit" size="lg" variant="secondary" className="md:w-auto bg-white text-accent hover:bg-white/90">
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
              <Card key={index} className="p-8 hover-scale">
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic text-muted-foreground">"{test.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-bold">{test.name}</div>
                      <div className="text-sm text-muted-foreground">{test.position}, {test.company}</div>
                      <div className="text-sm text-accent font-semibold">{test.model}</div>
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
                <p className="text-muted-foreground mb-6">Официальный дилер AmberVan с 2010 года</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-green-600" />
                    <span>Собственный сервисный центр</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-green-600" />
                    <span>Склад оригинальных запчастей</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-green-600" />
                    <span>Индивидуальные условия для бизнеса</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-green-600" />
                    <span>Более 800 довольных клиентов</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-bold mb-4">Наши партнеры</h4>
                  <div className="flex flex-wrap gap-4 items-center opacity-60">
                    <div className="px-4 py-2 bg-white rounded border text-sm font-semibold">Сбербанк</div>
                    <div className="px-4 py-2 bg-white rounded border text-sm font-semibold">ВТБ</div>
                    <div className="px-4 py-2 bg-white rounded border text-sm font-semibold">Совкомбанк</div>
                    <div className="px-4 py-2 bg-white rounded border text-sm font-semibold">Ресо</div>
                  </div>
                </div>
                <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90">Получить консультацию</Button>
              </div>
              <div className="h-64 md:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon name="Building2" className="text-primary/30" size={120} />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/80 text-white">
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
                <div className="flex items-start gap-2 text-left">
                  <Checkbox id="consent" required />
                  <label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                    Я согласен на обработку персональных данных
                  </label>
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Отправить заявку
                </Button>
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
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Package" className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-xs opacity-75">ТТМ Центр</div>
                  <div className="text-lg font-bold">AmberVan</div>
                </div>
              </div>
              <p className="text-sm opacity-75">Официальный дилер коммерческой техники</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Модели</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:opacity-100 hover:text-accent transition-colors">AmberVan JL</a></li>
                <li><a href="#" className="hover:opacity-100 hover:text-accent transition-colors">AmberVan JM</a></li>
                <li><a href="#" className="hover:opacity-100 hover:text-accent transition-colors">AmberVan SN</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:opacity-100 hover:text-accent transition-colors">Кредит</a></li>
                <li><a href="#" className="hover:opacity-100 hover:text-accent transition-colors">Лизинг</a></li>
                <li><a href="#" className="hover:opacity-100 hover:text-accent transition-colors">Trade-in</a></li>
                <li><a href="#" className="hover:opacity-100 hover:text-accent transition-colors">Сервис</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:88000000000" className="hover:text-accent transition-colors">8 (800) 000-00-00</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@ambervan.ru" className="hover:text-accent transition-colors">info@ambervan.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Автомобильная, д.10</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>© 2025 AmberVan. Все права защищены.</p>
            <a href="#" className="hover:opacity-100 hover:text-accent transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
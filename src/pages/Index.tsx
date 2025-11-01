import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const formRef = useRef<HTMLElement>(null);

  const slides = [
    {
      title: 'Ваш бизнес в движении. AmberVan — надежная основа роста.',
      subtitle: 'Вместительные фургоны с пожизненной защитой от коррозии. Легендарные двигатели ISUZU и Cummins.',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/14c9d645-10b7-4244-9565-0f5bafba4863.jpg'
    }
  ];

  const brands = [
    { 
      name: 'AmberVan JL', 
      description: 'Для городской логистики',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/14c9d645-10b7-4244-9565-0f5bafba4863.jpg' 
    },
    { 
      name: 'AmberVan JM', 
      description: 'Для доставки и перевозок',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/266c941a-f210-414d-a1f3-0f4c43f65be6.jpg' 
    },
    { 
      name: 'AmberVan SN', 
      description: 'Для крупных грузов',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/14c9d645-10b7-4244-9565-0f5bafba4863.jpg' 
    }
  ];

  const models = ['Базовая', 'Стандарт', 'Комфорт'];

  const advantages = [
    { 
      title: 'Легендарные двигатели', 
      text: 'Isuzu и Cummins с ресурсом >500 000 км. Работайте без простоев',
      icon: 'Zap',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/36e5349a-cadd-44fe-b45f-93065dbd058d.jpg'
    },
    { 
      title: 'Выгода без мочевины', 
      text: 'ECO-стандарт без мочевины (AdBlue). Экономьте до 40 000 ₽ в год на эксплуатации',
      icon: 'DollarSign',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/82159b68-f05e-4ad1-bd6e-79afc2343f87.jpg'
    },
    { 
      title: 'Прочность и надежность', 
      text: 'Усиленный кузов и рамная конструкция. Гидравлические тормоза с ABS для полной безопасности',
      icon: 'Shield',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/0fc6ea64-09d2-440b-bfd2-c99fc4eea3e3.jpg'
    },
    { 
      title: 'Сервис «Все включено»', 
      text: 'Ваш персональный менеджер и выездная служба поддержки 24/7',
      icon: 'Headphones',
      image: 'https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/14c9d645-10b7-4244-9565-0f5bafba4863.jpg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    setSelectedModel('');
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, brand: selectedBrand, model: selectedModel });
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Package" className="text-white" size={24} />
            </div>
            <div>
              <div className="text-xs text-white/70">ТТМ Центр</div>
              <div className="text-xl font-bold text-white">AmberVan</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:88000000000" className="text-lg font-semibold text-white flex items-center gap-2">
              <Icon name="Phone" size={20} />
              8 (800) 000-00-00
            </a>
          </div>
        </div>
      </header>

      <section className="relative h-screen pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={slides[currentSlide].image} 
            alt="AmberVan" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl text-white fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-6 text-sm md:text-base mb-8">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-accent" />
                <span>Гарантия 3 года</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Percent" size={20} className="text-accent" />
                <span>Кредит от 0%</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="RefreshCw" size={20} className="text-accent" />
                <span>Trade-in с выгодой</span>
              </div>
            </div>
            <Button size="lg" className="text-lg px-12 bg-accent hover:bg-accent/90" onClick={scrollToForm}>
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Почему AmberVan — выгодное вложение?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((adv, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video overflow-hidden bg-secondary/5">
                  <img 
                    src={adv.image} 
                    alt={adv.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <CardContent className="p-8 bg-gradient-to-br from-white to-muted/30 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon name={adv.icon} className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">{adv.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{adv.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Подберите фургон под ваши задачи</h2>
            <p className="text-xl text-muted-foreground">Ответьте на 2 вопроса и получите коммерческое предложение с точной стоимостью</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Шаг 1: Выберите марку</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {brands.map((brand, index) => (
                  <Card 
                    key={index} 
                    className={`cursor-pointer overflow-hidden transition-all duration-300 ${
                      selectedBrand === brand.name 
                        ? 'border-2 border-accent shadow-2xl scale-105' 
                        : 'border-2 border-transparent hover:border-muted hover:shadow-lg'
                    }`}
                    onClick={() => handleBrandSelect(brand.name)}
                  >
                    <div className="aspect-video overflow-hidden bg-muted/30">
                      <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h4 className="text-xl font-bold mb-2">{brand.name}</h4>
                      <p className="text-muted-foreground text-sm">{brand.description}</p>
                      {selectedBrand === brand.name && (
                        <div className="mt-4">
                          <Icon name="Check" className="text-accent mx-auto" size={24} />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {selectedBrand && (
              <div className="mb-12 fade-in">
                <h3 className="text-2xl font-bold mb-6">Шаг 2: Уточните модель и комплектацию</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {models.map((model, index) => (
                    <Card 
                      key={index} 
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedModel === model 
                          ? 'border-2 border-accent shadow-2xl scale-105 bg-accent/5' 
                          : 'border-2 border-muted hover:border-accent/50 hover:shadow-lg'
                      }`}
                      onClick={() => handleModelSelect(model)}
                    >
                      <CardContent className="p-8 text-center">
                        <h4 className="text-2xl font-bold mb-2">{model}</h4>
                        {selectedModel === model && (
                          <Icon name="Check" className="text-accent mx-auto mt-4" size={28} />
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {selectedBrand && selectedModel && (
              <div className="text-center fade-in">
                <Button 
                  size="lg" 
                  className="text-xl px-12 py-6 bg-accent hover:bg-accent/90"
                  onClick={scrollToForm}
                >
                  Рассчитать точную стоимость →
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Нам доверяют бизнес-задачи</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/4b385346-6822-47ef-a3ac-b9cb674a3b9f/files/018e80f6-4796-44e7-8a50-b2cda79c01b9.jpg" 
                alt="ТТМ Центр" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">15 лет на рынке коммерческого транспорта</h3>
                  <p className="text-muted-foreground">Проверенный временем опыт и репутация</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Wrench" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Собственный сервисный центр</h3>
                  <p className="text-muted-foreground">Склад запчастей с 99% наличием. Гарантийное и постгарантийное обслуживание</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Handshake" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Индивидуальные условия</h3>
                  <p className="text-muted-foreground">Для корпоративных клиентов и партнеров. Гибкие схемы финансирования</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h4 className="font-bold mb-4 text-lg">Наши партнеры</h4>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="px-6 py-3 bg-white rounded-lg border-2 text-base font-semibold shadow-sm">Сбербанк</div>
                  <div className="px-6 py-3 bg-white rounded-lg border-2 text-base font-semibold shadow-sm">ВТБ</div>
                  <div className="px-6 py-3 bg-white rounded-lg border-2 text-base font-semibold shadow-sm">Совкомбанк</div>
                  <div className="px-6 py-3 bg-white rounded-lg border-2 text-base font-semibold shadow-sm">Ресо</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary via-secondary/95 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы сделать шаг?</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Не откладывайте рост вашего бизнеса. Получите специальные условия до конца месяца!
          </p>
          <Button 
            size="lg" 
            className="text-xl px-12 py-6 bg-accent hover:bg-accent/90"
            onClick={scrollToForm}
          >
            Узнать об акции
          </Button>
        </div>
      </section>

      <section ref={formRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Получите персональное коммерческое предложение</h2>
              <p className="text-xl text-muted-foreground">
                Менеджер рассчитает стоимость и запишет вас на тест-драйв в удобное время
              </p>
            </div>

            <Card className="p-8 shadow-2xl border-2">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {selectedBrand && (
                    <div className="p-4 bg-accent/10 rounded-lg border-2 border-accent/20">
                      <p className="text-sm text-muted-foreground mb-2">Ваш выбор:</p>
                      <p className="font-bold text-lg">{selectedBrand} — {selectedModel}</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Например, Иван" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="text-lg py-6"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input 
                      placeholder="+7 (___) ___-__-__" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="text-lg py-6"
                      required
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="consent" required />
                    <label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                      Согласен на обработку персональных данных
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6 bg-accent hover:bg-accent/90">
                    Получить предложение
                  </Button>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    <Icon name="Lock" className="inline mr-1" size={14} />
                    Конфиденциально. Ваши данные не будут переданы третьим лицам.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
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

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Music" size={32} className="text-primary" />
            <span className="text-2xl font-heading font-bold">Битва хоров</span>
          </div>
          <Button size="lg" className="font-heading font-semibold">
            Подать заявку
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-blue-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                Битва хоров
                <span className="block text-primary mt-2">Екатеринбург 2025</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Городской конкурс корпоративных и студенческих хоров. Покажите силу вашего голоса, сплочённость команды и любовь к музыке!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg font-heading font-semibold px-8">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Подать заявку
                </Button>
                <Button size="lg" variant="outline" className="text-lg font-heading font-semibold px-8">
                  <Icon name="Download" size={20} className="mr-2" />
                  Положение конкурса
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/4e866915-7fa8-43c5-b09e-696c0c485be8/files/e578c07e-4cf0-4c26-837e-ff75d6a3e6ff.jpg" 
                alt="Битва хоров Екатеринбург" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-heading font-bold">250+</div>
                <div className="text-sm">участников в 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            О конкурсе
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Users" size={48} className="text-primary mb-4" />
                <h3 className="text-2xl font-heading font-semibold mb-3">Для команд</h3>
                <p className="text-muted-foreground">
                  Конкурс объединяет корпоративные и студенческие хоры Екатеринбурга. Минимум 12 участников в коллективе.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Trophy" size={48} className="text-secondary mb-4" />
                <h3 className="text-2xl font-heading font-semibold mb-3">Призовой фонд</h3>
                <p className="text-muted-foreground">
                  Денежные призы, дипломы, возможность выступления на городских площадках и профессиональная запись.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Star" size={48} className="text-primary mb-4" />
                <h3 className="text-2xl font-heading font-semibold mb-3">Профессиональное жюри</h3>
                <p className="text-muted-foreground">
                  Эксперты из филармонии, музыкальных училищ и известные дирижёры оценят ваше мастерство.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            Детали конкурса
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="Calendar" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Ключевые даты</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Приём заявок:</strong> до 15 марта 2025</li>
                    <li><strong>Отборочный тур:</strong> 25-27 марта 2025</li>
                    <li><strong>Финал:</strong> 15 апреля 2025</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon name="Award" size={24} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Номинации</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Корпоративные хоры</li>
                    <li>• Студенческие хоры</li>
                    <li>• Народный выбор (онлайн-голосование)</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon name="FileCheck" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Требования</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Минимум 12 участников в хоре</li>
                    <li>• Два произведения: обязательное и по выбору</li>
                    <li>• Длительность выступления: 6-8 минут</li>
                    <li>• A capella или с сопровождением</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="Users2" size={24} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Состав жюри</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Иванова Мария</strong> — дирижёр Свердловской филармонии</li>
                    <li><strong>Петров Алексей</strong> — профессор УГК им. Мусоргского</li>
                    <li><strong>Сидорова Елена</strong> — заслуженная артистка России</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon name="Gift" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Призовой фонд</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>1 место:</strong> 100 000 ₽ + запись в студии</li>
                    <li><strong>2 место:</strong> 50 000 ₽ + диплом</li>
                    <li><strong>3 место:</strong> 25 000 ₽ + диплом</li>
                    <li><strong>Народный выбор:</strong> выступление на День города</li>
                  </ul>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать положение конкурса (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Социальное доказательство
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят участники прошлых лет
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Невероятный опыт! Наша команда так сплотилась во время подготовки. Битва хоров — это не просто конкурс, это настоящее событие."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Анна Ковалёва</div>
                    <div className="text-sm text-muted-foreground">Хор "Уралочка", победитель 2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Профессиональная организация, высокий уровень участников. Получили массу эмоций и мотивацию развиваться дальше!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Дмитрий Соколов</div>
                    <div className="text-sm text-muted-foreground">Студенческий хор УрФУ</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Отличная площадка для демонстрации корпоративного духа. Наши сотрудники до сих пор вспоминают это выступление!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Елена Морозова</div>
                    <div className="text-sm text-muted-foreground">Хор "Голоса Урала"</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-center mb-8">Фото с прошлых конкурсов</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <img 
                src="https://cdn.poehali.dev/projects/4e866915-7fa8-43c5-b09e-696c0c485be8/files/52293e9d-d08d-476d-bf16-84b6ceed5452.jpg" 
                alt="Корпоративный хор" 
                className="rounded-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://cdn.poehali.dev/projects/4e866915-7fa8-43c5-b09e-696c0c485be8/files/e4825515-fae8-4fe2-9c9b-d6c18289b562.jpg" 
                alt="Студенческий хор" 
                className="rounded-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-center mb-8">Партнёры и спонсоры</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-3xl font-heading font-bold">Свердловская филармония</div>
              <div className="text-3xl font-heading font-bold">УрФУ</div>
              <div className="text-3xl font-heading font-bold">Музыкальное училище</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Готовы показать силу своего голоса?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Подайте заявку до 15 марта 2025 и станьте частью музыкального события года!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg font-heading font-semibold px-8">
              <Icon name="FileText" size={20} className="mr-2" />
              Подать заявку
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-heading font-semibold px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать положение
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/50 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Music" size={28} className="text-primary" />
                <span className="text-xl font-heading font-bold">Битва хоров</span>
              </div>
              <p className="text-muted-foreground">
                Городской конкурс корпоративных и студенческих хоров Екатеринбурга
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} className="text-primary" />
                  <span>г. Екатеринбург, ул. Ленина, 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} className="text-primary" />
                  <span>+7 (343) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} className="text-primary" />
                  <span>info@bitvahоrov.ru</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2025 Битва хоров. Все права защищены.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Положение конкурса</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

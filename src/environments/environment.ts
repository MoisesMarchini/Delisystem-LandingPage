import { AfterHeroCard } from "../app/models/items/after-hero-card";
import { PricingItem, PricingName } from "../app/models/items/pricing-item";
import { ServiceItem } from "../app/models/items/service-item";
import { AfterHeroSection } from "../app/models/sections/after-hero-section";
import { HeroSection } from "../app/models/sections/hero-section";
import { PricingSection } from "../app/models/sections/pricing-section";
import { ServicesSection } from "../app/models/sections/services-section";

export const environment = {
  appColors: {
    highlight: '#FF3131'
  },
  contact: {
    name: 'Delisystem',
    externalLink: 'https://app.delisystem.com.br/auth',
    socials: [
      {
        label: 'instagram',
        path: 'https://www.instagram.com/runordie_assessoria/',
      },
      {
        label: 'tiktok',
        path: 'https://www.tiktok.com/@walison_rodrigues7',
      },
    ] as {label: string, path: string, icon?: string}[]
  },

  navlinks: [
    {
      id: 'home',
      label: 'início',
    },
    // {
    //   id: 'about',
    //   label: 'sobre',
    // },
    {
      id: 'services',
      label: 'serviços',
    },
    {
      id: 'pricing',
      label: 'planos',
    },
    {
      id: 'testimonials',
      label: 'testemunhos',
    }
  ],

  sectionProps: {
    hero: {
      id: 'hero',
      title: 'Transforme seu Delivery',
      description: "A solução completa para gerenciar seu delivery de comida com eficiência e praticidade. Gerencie pedidos, entregas, relatórios e cupons de forma simples e eficiente.",
      ctaText: 'Entre em contato'
    } as HeroSection,
    afterHero: {
      items: [
        new AfterHeroCard({
          fontawesomeIcon: 'fas fa-pizza-slice',
          title: 'Cardápio Completo',
          description: 'Tenha um cardápio completo e intuitivo. Fácil para seus clientes e prático para você.'
        }),
        new AfterHeroCard({
          fontawesomeIcon: 'fas fa-edit',
          title: 'Fácil para editar',
          description: 'Um sistema intuitivo, aonde você consegue configurar sua loja, cardápio, funcionários, itens, cupons e etc.'
        }),
        new AfterHeroCard({
          fontawesomeIcon: 'fas fa-link',
          title: 'Link Amigável',
          description: 'Tenha um link prático e amigável para enviar a seus clientes sem precisar baixar aplicativos.'
        }),
      ]
    } as AfterHeroSection,
    services: {
      id: 'services',
      items: [
        new ServiceItem({
          imgPath: '/sections/services/pedidos em tempo real.png',
          rtl: false,
          title: "Controle pedidos em tempo real",
          description: "Visualize e administre todos os pedidos em tempo real. Monitore cada etapa, desde o recebimento até a entrega, com total eficiência."
        }),
        new ServiceItem({
          imgPath: '/sections/services/dashboard.png',
          rtl: true,
          title: "Relatórios detalhados e precisos",
          description: "Acompanhe o desempenho do seu delivery com relatórios semanais, mensais e de períodos específicos. Tome decisões estratégicas com base em dados reais."
        }),
        new ServiceItem({
          imgPath: '/sections/hero/desktop.png',
          rtl: false,
          title: "Atendimento automatizado no WhatsApp",
          description: "Automatize o atendimento ao cliente com um robô de WhatsApp. Responda dúvidas, receba pedidos e otimize sua comunicação."
        }),
      ]
    } as ServicesSection,
    pricing: {
      id: 'pricing',
      title: 'Escolha o Plano Ideal para Você',
      description: 'Oferecemos planos personalizados para todos os níveis e objetivos de corrida, seja para corredores iniciantes, entusiastas de provas de rua, ou candidatos a testes de aptidão física. Alcance suas metas com um acompanhamento profissional adaptado às suas necessidades.',
      items: [
        new PricingItem({
          name: PricingName.basic,
          items: [
            "Somente um usuário",
            "Cardápio Digital",
            "Gerenciamento de pedidos em tempo real",
          ],
          price: "R$ 0,00"
        }),
        new PricingItem({
          name: PricingName.regular,
          items: [
            "Funções do plano básico",
            "Cadastro de até 5 funcionários",
            "Robô para whatsapp",
            "Sistema de comandas para mesas/garçons",
          ],
          price: "R$ 55,00",
          highlight: true
        }),
        new PricingItem({
          name: PricingName.pro,
          items: [
            "Funções do plano normal",
            "Sem limite de funcionários",
            "Treinos focados em performance para o TAF",
            "Preparação para exigências físicas específicas do teste",
            "Aborda técnicas de resistência e velocidade",
          ],
          price: "R$ 85,00"
        }),
      ]
    } as PricingSection,
  }
};

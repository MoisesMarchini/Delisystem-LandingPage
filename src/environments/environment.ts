import { AfterHeroCard } from "../app/models/after-hero-card";
import { AfterHeroSection, HeroSection, PricingSection, ServicesSection } from "../app/models/section-props";
import { ServiceItem } from "../app/models/service-item";

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
      title: 'Pedidos rápidos pelo whatsapp',
      description: 'Conheça a nossa plataforma de Delivery, onde 100% do valor do pedido é do estabelecimento.',
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
          rtl: false,
          title: 'afcu',
          description: '',
        }),
        new ServiceItem({
          rtl: true,
          title: '',
          description: '',
        }),
        new ServiceItem({
          rtl: false,
          title: '',
          description: '',
        }),
      ]
    } as ServicesSection,
    pricing: {
      id: 'pricing',
      title: 'Escolha o Plano Ideal para Você',
      description: 'Oferecemos planos personalizados para todos os níveis e objetivos de corrida, seja para corredores iniciantes, entusiastas de provas de rua, ou candidatos a testes de aptidão física. Alcance suas metas com um acompanhamento profissional adaptado às suas necessidades.',
      items: [
        {
          name: "basic",
          items: [
            "Somente um usuário",
            "Cardápio Digital",
            "Gerenciamento de pedidos em tempo real",
          ],
          price: "GRÁTIS"
        },
        {
          name: "regular",
          items: [
            "Funções do plano basic",
            "Cadastro de até 5 funcionários",
            "Adaptado para iniciantes com orientação e motivação",
            "Ajuda na construção de um hábito saudável",
          ],
          price: "R$ 74,99"
        },
        {
          name: "pro",
          items: [
            "Desenvolvido para candidatos a testes de aptidão física militar",
            "Treinos focados em performance para o TAF",
            "Preparação para exigências físicas específicas do teste",
            "Aborda técnicas de resistência e velocidade",
          ],
          price: "R$ 49,99"
        },
      ]
    } as PricingSection,
  }
};

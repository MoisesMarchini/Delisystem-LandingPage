import { HeroSection, PricingSection, ServiceItem, ServicesSection } from "../app/models/section-props";

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
    services: {
      id: 'services',
      items: [
        new ServiceItem(),
        new ServiceItem({rtl: true}),
        new ServiceItem(),
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
            "Ideal para corredores com rotina de treino",
            "Focado em melhorar desempenho em provas de rua",
            "Alvo para quem busca metas de tempo e resistência",
            "Distâncias específicas para variados níveis",
          ],
          price: "R$ 79,99"
        },
        {
          name: "regular",
          items: [
            "Ideal para quem está começando no mundo da corrida",
            "Focado em emagrecimento e saúde",
            "Adaptado para iniciantes com orientação e motivação",
            "Ajuda na construção de um hábito saudável",
          ],
          price: "R$ 79,99"
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

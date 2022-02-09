//MOVIE STATE

//IMPORTING
import sales1 from "./img/sales1.jpg";
import sales2 from "./img/sales2.jpg";
import leads1 from "./img/leads1.jpg";
import leads2 from "./img/leads2.jpg";
import marketing1 from "./img/marketing1.jpg";
import marketing2 from "./img/marketing2.jpg";

//MOVIE STATE
export const MovieState = () => {
  return [
    {
      title: "Sales",
      mainImg: sales1,
      secondaryImg: sales2,
      url: "/work/sales",
      awards: [
        {
          title: "Gestão",
          description:
            "Gerencie todas as suas operações de vendas para saber o quanto você provavelmente venderá.",
        },
        {
          title: "Metas",
          description:
            "Controle e trace suas metas, veja o histórico de metas do ano para saber onde você está e onde pretende chegar com suas vendas.",
        },
        {
          title: "Comissões",
          description:
            "Defina suas comissões e comissões de funcionários, tudo vinculado com suas metas e perspectivas de vendas para determinado período.",
        },
      ],
    },
    {
      title: "Leads",
      mainImg: leads1,
      secondaryImg: leads2,
      url: "/work/leads",
      awards: [
        {
          title: "Captação",
          description:
            "Faça a captação de novos clientes baseado em nicho de mercado, poder de compra e interesses dos possíveis novos clientes.",
        },
        {
          title: "Manutenção",
          description:
            "Saiba quando oferecer os seus produtos e serviços para antigos clientes que possam estar precisando novamente de você.",
        },
        {
          title: "Gestão",
          description:
            "Gerencie toda a sua cartela de clientes e tenha todas as informações centralizadas para um melhor controle.",
        },
      ],
    },
    {
      title: "Marketing",
      mainImg: marketing1,
      secondaryImg: marketing2,
      url: "/work/marketing",
      awards: [
        {
          title: "Emails",
          description:
            "Configure as opções de emails e envie emails pontuais para seus clientes e para possíveis clientes seus.",
        },
        {
          title: "Redes Sociais",
          description:
            "Integramos suas redes sociais ao Leadsales para expor a sua marca pelas principais e mais badaladas redes do momento.",
        },
        {
          title: "Propagandas",
          description:
            "Sua marca aparecerá em propagandas e landing pages no Google caso você opte pela versão completa do Leadsales.",
        },
      ],
    },
  ];
};

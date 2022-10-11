const apiMock = [
    {
        "app_id": "omie",
        "name": "Omie",
        "color": "#001E27",
        "icon": "https://assets.pluga.co/apps/icons/omie/omie-icon.svg",
        "link": "https://pluga.co/ferramentas/omie/"
    },
    {
        "app_id": "hotmart",
        "name": "Hotmart",
        "color": "#F04E23",
        "icon": "https://assets.pluga.co/apps/icons/hotmart/hotmart-icon.svg",
        "link": "https://pluga.co/ferramentas/hotmart/"
    },
    {
        "app_id": "eduzz",
        "name": "Eduzz",
        "color": "#FFCD33",
        "icon": "https://assets.pluga.co/apps/icons/eduzz/eduzz-icon.svg",
        "link": "https://pluga.co/ferramentas/eduzz/"
    },
    {
        "app_id": "jira",
        "name": "Jira Software",
        "color": "#0052cc",
        "icon": "https://assets.pluga.co/apps/icons/jira/jira-icon.svg",
        "link": "https://pluga.co/ferramentas/jira/"
    },
    {
        "app_id": "superlogica",
        "name": "Superlógica Assinaturas",
        "color": "#43AA96",
        "icon": "https://assets.pluga.co/apps/icons/superlogica/superlogica-icon.svg",
        "link": "https://pluga.co/ferramentas/superlogica/"
    },
    {
        "app_id": "calendly",
        "name": "Calendly",
        "color": "#656a74",
        "icon": "https://assets.pluga.co/apps/icons/calendly/calendly-icon.svg",
        "link": "https://pluga.co/ferramentas/calendly/"
    },
    {
        "app_id": "google_docs",
        "name": "Google Docs",
        "color": "#005CE2",
        "icon": "https://assets.pluga.co/apps/icons/google_docs/google_docs-icon.svg",
        "link": "https://pluga.co/ferramentas/google_docs/"
    },
    {
        "app_id": "twilio",
        "name": "Twilio",
        "color": "#cf272c",
        "icon": "https://assets.pluga.co/apps/icons/twilio/twilio-icon.svg",
        "link": "https://pluga.co/ferramentas/twilio/"
    },
    {
        "app_id": "eventbrite",
        "name": "Eventbrite",
        "color": "#FF8300",
        "icon": "https://assets.pluga.co/apps/icons/eventbrite/eventbrite-icon.svg",
        "link": "https://pluga.co/ferramentas/eventbrite/"
    },
    {
        "app_id": "pipefy",
        "name": "Pipefy",
        "color": "#3B5BFD",
        "icon": "https://assets.pluga.co/apps/icons/pipefy/pipefy-icon.svg",
        "link": "https://pluga.co/ferramentas/pipefy/"
    },
    {
        "app_id": "active_campaign",
        "name": "ActiveCampaign",
        "color": "#356ae6",
        "icon": "https://assets.pluga.co/apps/icons/active_campaign/active_campaign-icon.svg",
        "link": "https://pluga.co/ferramentas/active_campaign/"
    },
    {
        "app_id": "sympla",
        "name": "Sympla",
        "color": "#0098ff",
        "icon": "https://assets.pluga.co/apps/icons/sympla/sympla-icon.svg",
        "link": "https://pluga.co/ferramentas/sympla/"
    },
    {
        "name": "Conta Azul",
        "app_id": "conta_azul",
        "color": "#2687E9",
        "icon": "https://assets.pluga.co/apps/icons/conta_azul/conta_azul-icon.svg",
        "link": "https://pluga.co/ferramentas/conta_azul/"
    },
    {
        "name": "Google Sheets",
        "app_id": "google_sheets",
        "color": "#0C7742",
        "icon": "https://assets.pluga.co/apps/icons/google_sheets/google_sheets-icon.svg",
        "link": "https://pluga.co/ferramentas/google_sheets/"
    },
    {
        "name": "RD Station Marketing",
        "app_id": "rd_station",
        "color": "#364a65",
        "icon": "https://assets.pluga.co/apps/icons/rd_station/rd_station-icon.svg",
        "link": "https://pluga.co/ferramentas/rd_station/"
    },
    {
        "name": "Slack",
        "app_id": "slack",
        "color": "#4A154B",
        "icon": "https://assets.pluga.co/apps/icons/slack/slack-icon.svg",
        "link": "https://pluga.co/ferramentas/slack/"
    },
    {
        "name": "PagSeguro",
        "app_id": "pag_seguro",
        "color": "#96c12e",
        "icon": "https://assets.pluga.co/apps/icons/pag_seguro/pag_seguro-icon.svg",
        "link": "https://pluga.co/ferramentas/pag_seguro/"
    },
    {
        "name": "Google Forms",
        "app_id": "google_forms",
        "color": "#4C3779",
        "icon": "https://assets.pluga.co/apps/icons/google_forms/google_forms-icon.svg",
        "link": "https://pluga.co/ferramentas/google_forms/"
    },
    {
        "name": "Facebook Lead Ads",
        "app_id": "facebook_lead_ads",
        "color": "#3a5a98",
        "icon": "https://assets.pluga.co/apps/icons/facebook_lead_ads/facebook_lead_ads-icon.svg",
        "link": "https://pluga.co/ferramentas/facebook_lead_ads/"
    },
    {
        "name": "RD Station CRM",
        "app_id": "plugcrm",
        "color": "#364a65",
        "icon": "https://assets.pluga.co/apps/icons/plugcrm/plugcrm-icon.svg",
        "link": "https://pluga.co/ferramentas/plugcrm/"
    },
    {
        "app_id": "google_calendar",
        "name": "Google Calendar",
        "color": "#2463d8",
        "icon": "https://assets.pluga.co/apps/icons/google_calendar/google_calendar-icon.svg",
        "link": "https://pluga.co/ferramentas/google_calendar/"
    },
    {
        "app_id": "linkseller",
        "name": "Linkseller",
        "color": "#525e6c",
        "icon": "https://assets.pluga.co/apps/icons/linkseller/linkseller-icon.svg",
        "link": "https://pluga.co/ferramentas/linkseller/"
    },
    {
        "name": "Pipedrive",
        "app_id": "pipedrive",
        "color": "#222222",
        "icon": "https://assets.pluga.co/apps/icons/pipedrive/pipedrive-icon.svg",
        "link": "https://pluga.co/ferramentas/pipedrive/"
    },
    {
        "app_id": "excel",
        "name": "Excel",
        "color": "#0A6332",
        "icon": "https://assets.pluga.co/apps/icons/excel/excel-icon.svg",
        "link": "https://pluga.co/ferramentas/excel/"
    },
    {
        "app_id": "shopify",
        "name": "Shopify",
        "color": "#30373B",
        "icon": "https://assets.pluga.co/apps/icons/shopify/shopify-icon.svg",
        "link": "https://pluga.co/ferramentas/shopify/"
    },
    {
        "app_id": "manychat",
        "name": "ManyChat",
        "color": "#0084FF",
        "icon": "https://assets.pluga.co/apps/icons/manychat/manychat-icon.svg",
        "link": "https://pluga.co/ferramentas/manychat/"
    },
    {
        "app_id": "hubspot_crm",
        "name": "HubSpot CRM",
        "color": "#FF7A59",
        "icon": "https://assets.pluga.co/apps/icons/hubspot_crm/hubspot_crm-icon.svg",
        "link": "https://pluga.co/ferramentas/hubspot_crm/"
    },
    {
        "name": "Gmail",
        "app_id": "gmail",
        "color": "#e74c3c",
        "icon": "https://assets.pluga.co/apps/icons/gmail/gmail-icon.svg",
        "link": "https://pluga.co/ferramentas/gmail/"
    },
    {
        "app_id": "google_contacts",
        "name": "Google Contacts",
        "color": "#185ABB",
        "icon": "https://assets.pluga.co/apps/icons/google_contacts/google_contacts-icon.svg",
        "link": "https://pluga.co/ferramentas/google_contacts/"
    },
    {
        "name": "iugu",
        "app_id": "iugu",
        "color": "#000000",
        "icon": "https://assets.pluga.co/apps/icons/iugu/iugu-icon.svg",
        "link": "https://pluga.co/ferramentas/iugu/"
    },
    {
        "name": "Mailchimp",
        "app_id": "mailchimp",
        "color": "#FFE01B",
        "icon": "https://assets.pluga.co/apps/icons/mailchimp/mailchimp-icon.svg",
        "link": "https://pluga.co/ferramentas/mailchimp/"
    },
    {
        "name": "WooCommerce",
        "app_id": "woocommerce",
        "color": "#3c3c3c",
        "icon": "https://assets.pluga.co/apps/icons/woocommerce/woocommerce-icon.svg",
        "link": "https://pluga.co/ferramentas/woocommerce/"
    },
    {
        "name": "Loja Integrada",
        "app_id": "loja_integrada",
        "color": "#2BC4C3",
        "icon": "https://assets.pluga.co/apps/icons/loja_integrada/loja_integrada-icon.svg",
        "link": "https://pluga.co/ferramentas/loja_integrada/"
    },
    {
        "name": "Trello",
        "app_id": "trello",
        "color": "#0079BF",
        "icon": "https://assets.pluga.co/apps/icons/trello/trello-icon.svg",
        "link": "https://pluga.co/ferramentas/trello/"
    },
    {
        "name": "Typeform",
        "app_id": "typeform",
        "color": "#262627",
        "icon": "https://assets.pluga.co/apps/icons/typeform/typeform-icon.svg",
        "link": "https://pluga.co/ferramentas/typeform/"
    },
    {
        "app_id": "meets",
        "name": "Meets",
        "color": "#00AEED",
        "icon": "https://assets.pluga.co/apps/icons/meets/meets-icon.svg",
        "link": "https://pluga.co/ferramentas/meets/"
    },
    {
        "app_id": "asana",
        "name": "Asana",
        "color": "#89324F",
        "icon": "https://assets.pluga.co/apps/icons/asana/asana-icon.svg",
        "link": "https://pluga.co/ferramentas/asana/"
    },
    {
        "name": "Mautic",
        "app_id": "mautic",
        "color": "#4F5F9F",
        "icon": "https://assets.pluga.co/apps/icons/mautic/mautic-icon.svg",
        "link": "https://pluga.co/ferramentas/mautic/"
    },
    {
        "name": "Magento 1.x",
        "app_id": "magento",
        "color": "#F16423",
        "icon": "https://assets.pluga.co/apps/icons/magento/magento-icon.svg",
        "link": "https://pluga.co/ferramentas/magento/"
    },
    {
        "name": "Intercom",
        "app_id": "intercom",
        "color": "#1F8DED",
        "icon": "https://assets.pluga.co/apps/icons/intercom/intercom-icon.svg",
        "link": "https://pluga.co/ferramentas/intercom/"
    },
    {
        "name": "Asaas",
        "app_id": "asaas",
        "color": "#0030b9",
        "icon": "https://assets.pluga.co/apps/icons/asaas/asaas-icon.svg",
        "link": "https://pluga.co/ferramentas/asaas/"
    },
    {
        "name": "Agendor",
        "app_id": "agendor",
        "color": "#332DE6",
        "icon": "https://assets.pluga.co/apps/icons/agendor/agendor-icon.svg",
        "link": "https://pluga.co/ferramentas/agendor/"
    },
    {
        "name": "Bling",
        "app_id": "bling",
        "color": "#222222",
        "icon": "https://assets.pluga.co/apps/icons/bling/bling-icon.svg",
        "link": "https://pluga.co/ferramentas/bling/"
    },
    {
        "name": "Mercado Livre",
        "app_id": "mercado_livre",
        "color": "#fcdf01",
        "icon": "https://assets.pluga.co/apps/icons/mercado_livre/mercado_livre-icon.svg",
        "link": "https://pluga.co/ferramentas/mercado_livre/"
    },
    {
        "name": "E-goi",
        "app_id": "egoi",
        "color": "#374756",
        "icon": "https://assets.pluga.co/apps/icons/egoi/egoi-icon.svg",
        "link": "https://pluga.co/ferramentas/egoi/"
    },
    {
        "name": "Pluga Webhooks",
        "app_id": "pluga_webhooks",
        "color": "#253858",
        "icon": "https://assets.pluga.co/apps/icons/pluga_webhooks/pluga_webhooks-icon.svg",
        "link": "https://pluga.co/ferramentas/pluga_webhooks/"
    },
    {
        "name": "TinyERP",
        "app_id": "tinyerp",
        "color": "#0050DC",
        "icon": "https://assets.pluga.co/apps/icons/tinyerp/tinyerp-icon.svg",
        "link": "https://pluga.co/ferramentas/tinyerp/"
    },
    {
        "name": "leadlovers",
        "app_id": "leadlovers",
        "color": "#f7273c",
        "icon": "https://assets.pluga.co/apps/icons/leadlovers/leadlovers-icon.svg",
        "link": "https://pluga.co/ferramentas/leadlovers/"
    },
    {
        "name": "Vindi",
        "app_id": "vindi",
        "color": "#243341",
        "icon": "https://assets.pluga.co/apps/icons/vindi/vindi-icon.svg",
        "link": "https://pluga.co/ferramentas/vindi/"
    },
    {
        "name": "Zendesk",
        "app_id": "zendesk",
        "color": "#03363d",
        "icon": "https://assets.pluga.co/apps/icons/zendesk/zendesk-icon.svg",
        "link": "https://pluga.co/ferramentas/zendesk/"
    },
    {
        "name": "Granatum Financeiro",
        "app_id": "granatum_financeiro",
        "color": "#00579B",
        "icon": "https://assets.pluga.co/apps/icons/granatum_financeiro/granatum_financeiro-icon.svg",
        "link": "https://pluga.co/ferramentas/granatum_financeiro/"
    },
    {
        "name": "eNotas",
        "app_id": "enotas",
        "color": "#c7c6c6",
        "icon": "https://assets.pluga.co/apps/icons/enotas/enotas-icon.svg",
        "link": "https://pluga.co/ferramentas/enotas/"
    },
    {
        "name": "Mandrill",
        "app_id": "mandrill",
        "color": "#171717",
        "icon": "https://assets.pluga.co/apps/icons/mandrill/mandrill-icon.svg",
        "link": "https://pluga.co/ferramentas/mandrill/"
    },
    {
        "name": "MercadoPago",
        "app_id": "mercado_pago",
        "color": "#009EE3",
        "icon": "https://assets.pluga.co/apps/icons/mercado_pago/mercado_pago-icon.svg",
        "link": "https://pluga.co/ferramentas/mercado_pago/"
    },
    {
        "name": "Moip",
        "app_id": "moip",
        "color": "#45559c",
        "icon": "https://assets.pluga.co/apps/icons/moip/moip-icon.svg",
        "link": "https://pluga.co/ferramentas/moip/"
    },
    {
        "name": "NFe.io",
        "app_id": "nfe_io",
        "color": "#103440",
        "icon": "https://assets.pluga.co/apps/icons/nfe_io/nfe_io-icon.svg",
        "link": "https://pluga.co/ferramentas/nfe_io/"
    },
    {
        "name": "Nibo",
        "app_id": "nibo",
        "color": "#303235",
        "icon": "https://assets.pluga.co/apps/icons/nibo/nibo-icon.svg",
        "link": "https://pluga.co/ferramentas/nibo/"
    },
    {
        "name": "Pagar.me",
        "app_id": "pagar_me",
        "color": "#95c93f",
        "icon": "https://assets.pluga.co/apps/icons/pagar_me/pagar_me-icon.svg",
        "link": "https://pluga.co/ferramentas/pagar_me/"
    },
    {
        "name": "PayPal",
        "app_id": "paypal",
        "color": "#0E3178",
        "icon": "https://assets.pluga.co/apps/icons/paypal/paypal-icon.svg",
        "link": "https://pluga.co/ferramentas/paypal/"
    },
    {
        "name": "Stripe",
        "app_id": "stripe",
        "color": "#249bd6",
        "icon": "https://assets.pluga.co/apps/icons/stripe/stripe-icon.svg",
        "link": "https://pluga.co/ferramentas/stripe/"
    },
    {
        "name": "LAHAR",
        "app_id": "lahar",
        "color": "#053C50",
        "icon": "https://assets.pluga.co/apps/icons/lahar/lahar-icon.svg",
        "link": "https://pluga.co/ferramentas/lahar/"
    },
    {
        "name": "TotalVoice",
        "app_id": "totalvoice",
        "color": "#52658C",
        "icon": "https://assets.pluga.co/apps/icons/totalvoice/totalvoice-icon.svg",
        "link": "https://pluga.co/ferramentas/totalvoice/"
    },
    {
        "app_id": "gdigital",
        "name": "G Digital",
        "color": "#003B43",
        "icon": "https://assets.pluga.co/apps/icons/gdigital/gdigital-icon.svg",
        "link": "https://pluga.co/ferramentas/gdigital/"
    },
    {
        "app_id": "piperun",
        "name": "PipeRun",
        "color": "#FF5252",
        "icon": "https://assets.pluga.co/apps/icons/piperun/piperun-icon.svg",
        "link": "https://pluga.co/ferramentas/piperun/"
    },
    {
        "name": "bkper",
        "app_id": "bkper",
        "color": "#333333",
        "icon": "https://assets.pluga.co/apps/icons/bkper/bkper-icon.svg",
        "link": "https://pluga.co/ferramentas/bkper/"
    },
    {
        "name": "Boleto Simples",
        "app_id": "boleto_simples",
        "color": "#1167AD",
        "icon": "https://assets.pluga.co/apps/icons/boleto_simples/boleto_simples-icon.svg",
        "link": "https://pluga.co/ferramentas/boleto_simples/"
    }
]

export default apiMock;
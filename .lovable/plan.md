# Landing page Silo Flex — Sacos para Silagem

Landing page única em `/`, em português, com identidade verde e foco total em orçamento via WhatsApp.

## Imagens do material

O PDF traz um logo, um mosaico com várias fotos e dois cartões de produto (verde e branco). Antes de montar a página, as imagens serão separadas e recortadas do PDF em arquivos individuais:

- logo Silo Flex (fundo verde, mantido fiel ao original)
- saco branco de silagem (foto de produto)
- estoque de embalagens brancas na loja
- silo com sacos verdes em propriedade rural (foto ampla)
- carregamento de sacos verdes no caminhão
- foto do proprietário sobre o estoque
- embalagem verde e embalagem branca (recortadas dos cartões, **sem os preços**)

Cada arquivo será enviado ao CDN de assets e referenciado por ponteiro no código. Nenhum preço aparece na página e nenhuma especificação nova é inventada.

## Seções (nesta ordem)

1. **Header fixo** — logo + navegação (Empresa, Embalagens, Diferenciais, Contato) + botão Solicitar Orçamento; menu compacto no mobile.
2. **Hero** — headline "Sacos para Silagem com Resistência, Segurança e Qualidade", subheadline pedida, botão SOLICITAR ORÇAMENTO (WhatsApp) e selo de confiança "Atendimento direto e especializado". Foto grande do produto.
3. **Quem é a Silo Flex** — "Soluções para quem leva a produção a sério" + texto comercial + foto do proprietário.
4. **Nossas embalagens** — "Escolha a embalagem ideal para a sua silagem": dois cards (Verde: 100% reciclável, resistência, segurança, sustentabilidade, 180/200 micra; Branco: 50% de material virgem, mesmos atributos), cada um com botão QUERO FAZER UM ORÇAMENTO.
5. **Por que escolher a Silo Flex** — "Mais segurança para sua silagem": 4 cards com ícones (Resistência, Segurança, Sustentabilidade, Qualidade) com os textos fornecidos.
6. **Produto em uso** — "Da produção ao armazenamento, conte com a Silo Flex": composição editorial com as fotos de campo e legendas curtas.
7. **Sustentabilidade** — fundo verde escuro, "Resistência que também pensa no futuro", destaque "Material 100% reciclável" e grafismos discretos de reciclagem.
8. **Conheça o produto** — opções 180 micra e 200 micra em blocos simples, cada um com CTA CONSULTAR DISPONIBILIDADE E ORÇAMENTO.
9. **CTA central** — fundo verde escuro, "Precisa de sacos para silagem?", botão FALAR COM A SILO FLEX NO WHATSAPP e microtexto de horário.
10. **Contato** — WhatsApp (44) 99174-8250, endereço Rua Nicolas Sarri, 301 - Paiçandu - PR - 87140-000, atendimento seg–sex 08h–18h, Instagram @siloflex2023, Facebook Silo Flex, CNPJ 53.478.054/0001-23 + botão WhatsApp.
11. **Rodapé** verde escuro com logo, dados, redes e frase institucional.
12. **Botão flutuante de WhatsApp** no canto inferior direito, sempre visível.

Todos os CTAs apontam para https://wa.me/5544991748250 em nova aba.

## Design

- Paleta verde institucional inspirada no logo: verde escuro profundo, verde médio, verde-água claro (tom das embalagens), branco e off-white, com neutros de apoio — definida como tokens semânticos em `src/styles.css` (light + dark).
- Tipografia moderna via Google Fonts carregada por `<link>` no `__root.tsx`: display condensada/forte para títulos + sans neutra para texto.
- Cantos levemente arredondados, sombras suaves, muito espaço em branco, alternância de fundos claros e verdes.
- Animações discretas de fade-in/slide ao entrar na viewport, hover em botões e cards. Sem excessos.

## Detalhes técnicos

- Rota única `src/routes/index.tsx` (substitui o placeholder), com `head()` próprio: título, descrição, og:title/og:description, og:type, twitter:card.
- Seções em componentes separados sob `src/components/landing/`, dados de contato/produtos em um módulo compartilhado.
- Recorte de imagens com Pillow no sandbox a partir do PDF; upload por `lovable-assets` e import dos ponteiros `.asset.json`.
- Animações com `motion` (Motion for React) ou utilitários CSS + IntersectionObserver; ícones do `lucide-react`.
- HTML semântico, um único `<h1>`, `alt` descritivo em todas as imagens, lazy loading nas fotos abaixo da dobra.
- Sem backend: a página é estática e converte via link do WhatsApp.

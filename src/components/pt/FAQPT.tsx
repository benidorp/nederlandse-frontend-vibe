import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import SafeMarkdown from "@/components/ui/safe-markdown";

const faqItems = [
  {
    question: "Porque os documentos legais são importantes para sites de afiliados",
    answer: `Como profissional de marketing de afiliados, você é legalmente obrigado a ser transparente sobre o seu modelo de negócio e como lida com os dados dos visitantes. Sem documentos legais adequados, você arrisca:
    
• Multas pesadas de reguladores como autoridades de proteção de dados - até €20 milhões ou 4% da receita anual
• Reclamações de consumidores por informações enganosas
• Remoção de redes de afiliados como Google AdSense
• Danos à reputação e perda de confiança do seu público

As principais legislações que você deve cumprir são o GDPR, a Diretiva ePrivacy e regulamentos sobre marketing de afiliados transparente como as diretrizes FTC. Com os documentos certos, você se protege e constrói confiança com os seus visitantes.`
  },
  {
    question: "Como integrar estes documentos no seu site (rodapé, por post, perto de links)",
    answer: `O posicionamento dos documentos legais é crucial para conformidade e usabilidade.

**Posicionamento no rodapé (obrigatório):**
Coloque links para todos os seus documentos legais no rodapé de cada página:
• Política de Privacidade
• Termos e Condições  
• Política de Cookies
• Aviso Legal
• Divulgação de Afiliados

**Por artigo/post:**
Para avaliações de produtos e artigos com links de afiliados:
• Breve divulgação no início do artigo (primeiras 150 palavras)
• Marcação proeminente de links de afiliados, por exemplo: [PUBLICIDADE] ou [link afiliado]
• Link para divulgação completa no final do artigo

**Perto de links de afiliados:**
• Use uma abreviação como * ou [AF] diretamente ao lado do link
• Adicione uma dica ao passar o rato com "link afiliado"
• Em caixas de produtos: pequeno aviso no fundo

**Melhores práticas:**
• Use cores contrastantes para que as divulgações se destaquem
• Torne o texto compreensível para públicos não legais
• Compatível com dispositivos móveis - visível sem rolar
• Use ícones para reconhecimento rápido

**Implementação técnica:**
O nosso guia de implementação contém snippets de código para WordPress, Shopify, Webflow e sites HTML, incluindo exemplos de estilo CSS.`
  },
  {
    question: "Perguntas Frequentes (FAQ)",
    answer: `**Estes modelos são válidos em toda a Europa?**
Sim, os nossos modelos cumprem o GDPR que se aplica em todos os países da UE. Alguns países têm regras adicionais - isso é mencionado nos modelos.

**Preciso consultar um advogado?**
Os nossos modelos são revisados legalmente, mas cada negócio é único. Para situações complexas, recomendamos sempre procurar aconselhamento jurídico.

**Posso usar estes modelos para vários sites?**
Sim! Com a compra, você obtém uma licença ilimitada para todos os seus sites de afiliados.

**E se eu também vender produtos, não apenas links de afiliados?**
Então você precisa de documentos adicionais como Direito de Retratação e Política de Envio. Contacte-nos para um pacote personalizado.

**Com que frequência devo atualizar os meus documentos?**
Pelo menos uma vez por ano, mas também quando adicionar novas ferramentas ou a legislação mudar.

**Estes documentos protegem-me de todas as reclamações legais?**
Nenhum documento oferece 100% de proteção, mas bons documentos legais minimizam significativamente os seus riscos e demonstram que age com cuidado.

**Preciso comprar o banner de cookies separadamente?**
O nosso pacote contém a política de cookies (texto), mas para o banner técnico de cookies recomendamos ferramentas como Cookiebot ou CookieYes.

**Em que idiomas os modelos estão disponíveis?**
Os modelos podem ser baixados em vários idiomas para uso internacional, para que você possa implementá-los em todos os seus sites em todo o mundo.`
  },
  {
    question: "Avisos legais e responsabilidades",
    answer: `**Aviso importante:**

Estes modelos de documentos foram cuidadosamente preparados e revisados, mas servem como ponto de partida para a sua conformidade legal. Legal Affiliate Agreement não fornece aconselhamento jurídico e não é responsável por danos decorrentes do uso destes modelos.

**Limitação de responsabilidade:**
• Os modelos são gerais e podem não ser adequados para cada situação específica
• A legislação pode mudar após a publicação dos modelos
• A implementação e adaptação corretas são da sua responsabilidade
• Em caso de dúvida, consulte sempre um advogado especializado

**O que não somos:**
• Um escritório de advocacia
• Responsáveis por multas ou reclamações decorrentes de uso incorreto
• Responsáveis por modificações que você faça
• Um substituto para aconselhamento jurídico profissional em casos complexos

**O que oferecemos:**
• Modelos preparados profissionalmente como base sólida
• Atualizações regulares com mudanças legislativas importantes
• Instruções claras de implementação
• Suporte por email para perguntas sobre os modelos

**Termos de uso:**
Ao usar estes modelos, você aceita os nossos termos e condições e aviso legal. Você reconhece que a conformidade legal permanece sob a sua responsabilidade.

**Adequação:**
Estes modelos são desenvolvidos especificamente para sites de marketing de afiliados. Para outros modelos de negócio ou países, podem ser necessários documentos adicionais ou diferentes.

**Aconselhamento profissional:**
Para estruturas de afiliados complexas, receitas elevadas (>€100.000/ano) ou atividades internacionais, recomendamos sempre consultar um advogado especializado em direito dos media ou da internet.`
  }
];

const FAQPT = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas às perguntas mais comuns sobre documentos legais para sites de afiliados
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <SafeMarkdown content={item.answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQPT;
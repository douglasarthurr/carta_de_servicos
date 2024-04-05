// import logo from './logo.svg'; exemplo de como importar imagem

import '../css/App.css';
import Header from './Header.jsx';
import Servicos from './servicos.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <Servicos title='Ampliação de jornada' description= 'Estão qualificar a aprendizagem de crianças e adolescentes e melhorar os indicadores educacionais.    Para isso, há oficinas nos eixos de Letramento e Numeramento, Artes e cultura, Educomunicação, Educação em Direitos Humanos, Esporte e movimento e Ambiente e sustentabilidade.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&acao=open&id=4620'/>
      
      <Servicos title='Certidão de cadastro imobiliário para fins gerais' description= 'Referente ao documento que certifica a situação cadastral atual do imóvel cadastrado sob uma inscrição imobiliária específica.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&id=4260&menu=2'/>
      
      <Servicos title='Auxílio Financeiro' description= ' É o benefício estabelecido pela Lei 4762/95 concedendo o valor de 50% do salário mínimo aos servidores que tenham filhos portadores de deficiência com incapacidade funcional permanente, comprovado por laudo médico emitido pela Gerência de Perícia Médica.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&id=233'/>
      
      <Servicos title='Redução de carga horária' description= 'A servidora pública municipal efetiva, que comprovadamente seja mãe, tutora, curadora ou responsável pela criação educação e proteção de pessoa portadora de deficiência, considerada dependente sob o ponto de vista sócio-educacional, farão jus à redução da carga horária para vinte horas, sem perdas salariais, comprovado por laudo médico emitido pela Gerência de Perícia Médica.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&id=235'/>
      
      <Servicos title='Comunicação de acidente em serviço' description= 'Denomina-se acidente em serviço o dano físico ou mental sofrido pelo servidor quese relacione, mediata ou imediatamente, com o exercício das funções, atividades e atribuições do cargo por ele ocupado.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&acao=open&id=5141 '/>
      
      <Servicos title='Vale transporte' description= 'É um benefício garantido pela legislação trabalhista. Esse benefício visa custear o deslocamento do profissional de sua casa até o local de trabalho e vice-versa. Portanto, é um pagamento a que todo trabalhador contratado tem direito.' link='https://www.setuf.com.br/'/>
      
      <Servicos title='Ressarcimento de despesas médicas decorrentes de acidente de trabalho' description= 'O reconhecimento e caracterização da ocorrência de trabalho relativo aos servidores efetivos é competência da Gerência de Perícia Médica.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&acao=open&id=244'/>
      
      <Servicos title='Casa de passagem para pessoas em situação de rua' description= 'Serviço de acolhimento provisório previsto para pessoas em situação de rua e desabrigo por abandono, migração e ausência de residência ou pessoas em trânsito e sem condições de auto sustento. O oferecimento deste serviço proporciona ao usuário o acolhimento no que refere aos cuidados básicos de higiene pessoal, alimentação, pernoite e acompanhamento especializado. Tempo previsto para permanência no serviço é de 30 a 90 dias.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&acao=open&id=4691'/>
      
      <Servicos title='Aposentadoria por invalidez' description= ' O servidor poderá ser aposentado por invalidez, com proventos integrais ou proporcionais, quando comprovada sua incapacidade total e definitiva para o trabalho, não se vislumbrando a possibilidade de uma readaptação funcional. Quando a aposentadoria for decorrente de acidente de trabalho, de doença profissional ou de doença grave, contagiosa ou incurável, especificada em lei, (alienação mental, cardiopatia grave' link='https://www.pmf.sc.gov.br/entidades/sadm/index.php?pagina=servpagina&me
nu=2&id=246
'/>
      
      
    </div>
  );
}

export default App;

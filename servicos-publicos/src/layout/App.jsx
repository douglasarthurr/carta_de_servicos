// import logo from './logo.svg'; exemplo de como importar imagem

import '../css/App.css';
import Header from './Header.jsx';
import Servicos from './servicos.jsx';
import jornada from "../images/jornada.png"
import imobiliario from "../images/mobiliario.jpg"
import financeiro from "../images/financeiro.jpg"
import carga_horaria from "../images/carga_horaria.webp"
import acidente_servico from "../images/acidente em servicos.jpg"
import vale_transporte from "../images/vale transporte.jpg"
import medicas from "../images/despesas medicas.webp"
import casa_apoio from "../images/casa de apoio.jpg"
import aposentadoria from "../images/aposentadoria.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <Servicos image={jornada} title='Ampliação de jornada' description= 'Estão qualificar a aprendizagem de crianças e adolescentes e melhorar os indicadores educacionais.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&acao=open&id=4620'/>
      
      <Servicos image={imobiliario} title='Certidão de cadastro imobiliário para fins gerais' description= 'Referente ao documento que certifica a situação cadastral atual do imóvel cadastrado sob uma inscrição imobiliária específica.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&id=4260&menu=2'/>
      
      <Servicos image={financeiro} title='Auxílio Financeiro' description= ' É o benefício estabelecido pela Lei 4762/95 concedendo o valor de 50% do salário mínimo aos servidores que tenham filhos portadores de deficiência com incapacidade funcional permanente.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&id=233'/>
      
      <Servicos image={carga_horaria} title='Redução de carga horária' description= 'A servidora pública municipal efetiva, que comprovadamente seja mãe, tutora, curadora ou responsável pela criação educação e proteção de pessoa portadora de deficiência.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&id=235'/>
      
      <Servicos image={acidente_servico} title='Comunicação de acidente em serviço' description= 'Denomina-se acidente em serviço o dano físico ou mental sofrido pelo servidor quese relacione, mediata ou imediatamente, com o exercício das funções.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&acao=open&id=5141 '/>
      
      <Servicos image={vale_transporte} title='Vale transporte' description= 'É um benefício garantido pela legislação trabalhista. Esse benefício visa custear o deslocamento do profissional de sua casa até o local de trabalho e vice-versa.' link='https://www.setuf.com.br/'/>
      
      <Servicos image={medicas} title='Ressarcimento de despesas médicas decorrentes de acidente de trabalho' description= 'O reconhecimento e caracterização da ocorrência de trabalho relativo aos servidores efetivos é competência da Gerência de Perícia Médica.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&acao=open&id=244'/>
      
      <Servicos image={casa_apoio} title='Casa de passagem para pessoas em situação de rua' description= 'Serviço de acolhimento provisório previsto para pessoas em situação de rua e desabrigo por abandono, migração e ausência de residência ou pessoas em trânsito e sem condições de auto sustento.' link='https://www.pmf.sc.gov.br/servicos/index.php?pagina=servpagina&acao=open&id=4691'/>
      
      <Servicos image={aposentadoria} title='Aposentadoria por invalidez' description= ' O servidor poderá ser aposentado por invalidez, com proventos integrais ou proporcionais, quando comprovada sua incapacidade total e definitiva para o trabalho, não se vislumbrando a possibilidade de uma readaptação funcional.' link='https://www.pmf.sc.gov.br/entidades/sadm/index.php?pagina=servpagina&me
nu=2&id=246
'/>
      
      
    </div>
  );
}

export default App;

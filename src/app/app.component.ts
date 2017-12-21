import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg: string;

  title = 'Modelo de Impressão';

  itemsA: any[]=[]
  itemsB: any[]=[]

  htmlStr: string = '';

  constructor(private dragulaService: DragulaService){

    // Opcoes das caixas de DRag and Drop
    dragulaService.setOptions('first-bag', {
      // nao remove nada da primeira caixa, apenas copia
      copy: function (el, source) {
        return source === document.getElementById("itemsA")
      },

      // faz a copia se soltar o objeto dentro da segunda caixa
      accepts: function (el, target) {
        return target !== document.getElementById("itemsA")
      },

      // habilita delecao soltando fora da segunda caixa
      removeOnSpill: true
    });

    // observador executado ao soltar objeto dentro de uma caixa valida
    dragulaService.dropModel.subscribe((value:any[]) => {
      
        //Monta Visualização da Impressão
        this.loadImpressao();

        //Reordena Objetos devolvidos
        this.orderA();     

    });

    // observador executado ao deletar objeto
    dragulaService.removeModel.subscribe((value:any[]) => {
        //Monta Visualização da Impressão
        this.loadImpressao();
    });

    // observador executado ao segurar objeto
    dragulaService.drag.subscribe((value: any[]) => {

    });

    // observador executado ao soltar objeto
    dragulaService.drop.subscribe((value: any[]) => {
     
    });
  
    // Monta Estrutura dos Objetos arrastaveis
    this.itemsA.push({order:1,cap:false,title:"Capa Padrão",         body:"<img class='capa' src='../assets/img/capa.png'>"});
    this.itemsA.push({order:2,cap:false,title:"Apresentação Padrão", body:"<p>De um lado, TOTVS S.A, com sede na cidade de São Paulo, Estado de São Paulo na Rua Desembargador Euclides da Silveira , 232, inscrita no CNPJ/MF sob o nº 53.113.791/0001-22, neste ato representada de acordo com seu estatuto social, doravante denominada “TOTVS”, e, de outro lado, #NomeCliente, com sede na cidade de #EnderecoCliente, inscrito no CNPJ/MF sob n.º #CNPJCliente, Inscrição Estadual n.º #InscricaoEstadualCliente, Inscrição Municipal n.º #InscricaoMunicipalCliente, Telefone #TelefoneCliente, Contato #ContatoCliente, e-mail #EmailCliente, endereço de cobrança #CobrancaCliente, neste ato representada de acordo com seu contrato social, doravante denominada “CONTRATANTE”.</p>"});
    this.itemsA.push({order:3,cap:true,title:"Definições Padrão",   
                      body:`<h1>#xCap - Definições</h1>
                            <h2>#xCap.1 - Modalidade Tradicional</h2>
                            <p>A Modalidade Tradicional é o modelo para contratação de software, no qual o Cliente adquire a Cessão de Direito de Uso (CDU) dos softwares aplicativos de propriedade intelectual da TOTVS e paga mensalmente uma taxa de Serviço de Manutenção de Software (SMSe), de acordo com o número de identidades e/ou instâncias contratadas e o tipo de acesso (todos os macroprocessos ou módulo/agrupador específico). O Cliente assina um contrato de Serviços Mensais de Softwares baseado no mesmo número de identidades e/ou instâncias contratadas.</p>
                            <p>Nesta modalidade, além da Plataforma TOTVS, comum a todas modalidades, o Cliente pode adquirir a licença full, mais completa da Modalidade, que dá acesso a todas as soluções próprias da TOTVS, ou licenças lights de acordo com suas necessidades.</p>`});
    this.itemsA.push({order:4,cap:true,title:"Escopo Padrão",  
                      body:`<h1>#xCap - Escopo</h1>
                            <p>Na modalidade tradicional, a TOTVS disponibiliza para o Cliente:</p>
                            <p>&bull; <b>Plataforma TOTVS</b> - Interface tecnológica da TOTVS que viabiliza as ativações e contratações dos nossos conteúdos e serviços. Contratada uma única vez, a Plataforma TOTVS é aderente ao porte do Cliente, proporciona o acesso à gestão de sua conta e ao uso das soluções proprietárias da TOTVS conforme número de identidades concorrentes contratadas. É importante ressaltar que, caso o Cliente opte pela habilitação de identidades na Plataforma de Produtividade e Colaboração Fluig, deverá ser solicitada uma nova proposta à TOTVS e serem pagos os valores adicionais lá estipulados.</p>
                            <p>&bull; <b>Cessão de Direito de Uso de Software (CDU)</b> - Licença permanente, não exclusiva, não transferível e limitada, para uso dos softwares listados no item “Valores e Condições de Pagamento”. Referida licença está condicionada aos termos deste instrumento e do contrato de Cessão de Direitos de Uso de Software e Prestação de Serviços</p>
                            <p>&bull; <b>Serviços Mensais de Serviços Mensais de Software e Educação à Distância (SMSe)</b> - Serviços mensais de software e Educação à Distância oferecidos ao Cliente, cuja prestação está sujeita aos termos e condições estipulados nesta Proposta e no Contrato. O SMSe dá, no perfil de ‘Cliente’, o direito de acesso aos Cursos da Academia TOTVS, que são assíncronos e podem ser assimilados no horário preferido. Para liberação de acesso, o cliente deve realizar a solicitação via chamado no Portal do Cliente.</p>`});
    this.itemsA.push({order:5,cap:true,title:"Controle de Utilização Padrão",
                      body:`<h1>#xCap - Controle de Utilização</h1>
                            <p>Para da Modalidade Tradicional, quando aplicável:</p>
                            <p>&bull; <b>ID Portal:</b> É um ID nomeado e multi-device simultâneo que libera o acesso pleno aos portais e conteúdos segmentados disponibilizados exclusivamente pela TOTVS. A contratação do ID Portal é facultativa ao Cliente, considerando a assinatura inicial mínima de 50 IDs. (Obs: a licença Light OnDemand (GCH) já inclui o acesso ao ‘Portal do Funcionário’ conforme a quantidade de funcionários contratada).</p>
                            <p>&bull; <b>Licenças On demand:</b> Os tipos de licenças On Demand são licenciados por um índice de demanda (exemplo: número de funcionários, matrículas) e permitem acesso ilimitado de instâncias/identidades concorrentes no seu respectivo processo de negócio.</p>
                            <p>&bull; <b>Geosales:</b> É um ID nomeado para acesso à solução do parceiro Softsite para geoprocessamento que permite a visualização de clientes em mapas digitais, associando a visualização geográfica de todos os clientes às informações estratégicas de cada um deles, promovendo assim a integração entre a força de vendas e o ERP TOTVS.</p>`});
    this.itemsA.push({order:6,cap:true,title:"Condições de Pagamento Padrão",
                      body:`<h1>#xCap - Valores e Condições de Pagamento</h1>
                            <h2>#xCap.1 - Plataforma TOTVS:</h2>
                            <table>
                                <tr>
                                    <th class="title-table" colspan="7"><b>Plataforma TOTVS</b></th>
                                </tr>
                                <tr>
                                    <th>Serviço</th>
                                    <th>Condição de Pagamento</th>
                                    <th>1° Vencimento</th>
                                    <th>Qtd</th>
                                    <th>Moeda</th>
                                    <th>Valor Unitário</th>
                                    <th>TOTAL</th>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td colspan="6"><b>Total R$</b></td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                            <h2>#xCap.2 - Cessão de Direito de Uso de Software (CDU):</h2>
                            <table>
                                <tr>
                                    <th class="title-table" colspan="7"><b>Cessão de Direito de Uso de Software (CDU)</b></th>
                                </tr>
                                <tr>
                                    <th>Serviço</th>
                                    <th>Condição de Pagamento</th>
                                    <th>1° Vencimento</th>
                                    <th>Qtd</th>
                                    <th>Moeda</th>
                                    <th>Valor Unitário</th>
                                    <th>TOTAL</th>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td colspan="6"><b>Total R$</b></td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                            <p>Os valores de CDU referem-se à quantidade de Instâncias/Identidades Concorrentes fixados acima. Necessitando o Cliente aumentar a quantidade de Instâncias/Identidades Concorrentes, ele deverá solicitar uma nova proposta à TOTVS e pagar os valores adicionais lá estipulados.</p>
                            <p>O valor relativo à CDU será pago pelo Cliente à TOTVS de acordo com os valores e datas de vencimento abaixo relacionados:</p>
                            <table>
                                <tr>
                                    <th>Valor (R$)</th>
                                    <th>Vencimento</th>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                            <h2>#xCap.3 - Aquisição de Tecnologia de Conectividade:</h2>
                            <table>
                                <tr>
                                    <th class="title-table" colspan="7"><b>Aquisição de Tecnologia de Conectividade</b></th>
                                </tr>
                                <tr>
                                    <th>Serviço</th>
                                    <th>Condição de Pagamento</th>
                                    <th>1° Vencimento</th>
                                    <th>Qtd</th>
                                    <th>Moeda</th>
                                    <th>Valor Unitário</th>
                                    <th>TOTAL</th>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td colspan="6"><b>Total R$</b></td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                            <h2>#xCap.4 - Serviços Mensais de Software (SMSe):</h2>
                            <table>
                                <tr>
                                    <th class="title-table" colspan="7"><b>Serviços Mensais de Software (SMSe)</b></th>
                                </tr>
                                <tr>
                                    <th>Serviço</th>
                                    <th>Condição de Pagamento</th>
                                    <th>1° Vencimento</th>
                                    <th>Qtd</th>
                                    <th>Moeda</th>
                                    <th>Valor Unitário</th>
                                    <th>TOTAL</th>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td colspan="6"><b>Total R$</b></td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>`});
    this.itemsA.push({order:7,cap:true,title:"Declaração do Cliente Padrão",
                          body:`<h1>#xCap - Declaração do Cliente</h1>
                                <h2>Contrato de Cessão de Direito de Uso de Software e Prestação de Serviços:</h2>
                                <p>O Cliente declara que recebeu ou acessou via portal do Cliente (www.suporte.totvs.com) cópia do Contrato registrado sob nº 1.256.206, no 9º Registro de Títulos e Documentos da cidade de São Paulo, que reviu seus termos e condições e apõe sua assinatura abaixo, a fim de consignar sua concordância com os termos e condições do referido Contrato.</p>
                                <p>A presente Proposta é válida até 08/09/2017.</p>
                                <p>Sao Paulo, 18 de Outubro de 2017</p>`});
    this.itemsA.push({order:8,cap:false,title:"Assinatura Padrão",
                          body:`<table>
                                    <tr>
                                        <th class="title-table" colspan="2"><b>ASSINATURAS DOS REPRESENTANTES LEGAIS</b></th>
                                    </tr>
                                    <tr>
                                        <td>PELO CLIENTE #NomeCliente, </br></br></br>
                                            Ass.:____________________________ </br></br>
                                            Nome:…………………………………………… </br></br>
                                            Cargo:…………………………………………...</br></br>
                                            RG:……………………………………………...</br></br></br></br>
                                            Ass.:_______________________________ </br></br>
                                            Nome:…………………………………………… </br></br>
                                            Cargo:…………………………………………...</br></br>
                                            RG:………………………………………..........</td>
                                        <td>TOTVS S/A</br></br></br>
                                            Ass.:___________________________ </br></br>
                                            Nome:…………………………………………. </br></br>
                                            Cargo:…………………………………………. </br></br>
                                            RG:………………………………………….....</br></br></br></br>
                                            Ass.:______________________________ </br></br>
                                            Nome:…………………………………………. </br></br>
                                            Cargo:…………………………………………. </br></br>
                                            RG:…………………………………………….</td>
                                    </tr>
                                </table>`});

  }

  ngOnInit() {

  }

  private loadImpressao(){
    let nCap = 1;
    this.htmlStr='';
    this.itemsB.forEach(element => {
      if (element.cap) {
        this.htmlStr += element.body.replace(/#xCap/g, nCap);
        nCap++;
      }else{
        this.htmlStr += element.body;
      }
      
    });
    console.log(this.htmlStr);
  }

  private orderA(){
    this.itemsA.sort(function (a, b) {
          if (a.order > b.order) {
            return 1;
          }
          if (a.order < b.order) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
  }
}
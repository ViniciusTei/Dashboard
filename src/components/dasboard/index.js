import React from 'react'
import { 
    Container, 
    Titulo, 
    Head, 
    CardRow, 
    ItemGeral, 
    MiniCards, 
    MiniCardWrapper, 
    ItemFinancas,
    IconWrrapper,
    MiniCardContent
} from './styles'
import {DataBase} from '../../services/firebase';

//components
import CardGeral from '../card-geral'
import ListaTop5 from '../lista-top5'

//icons
import {CreditCard} from '@styled-icons/bootstrap/CreditCard'
import {Cash} from '@styled-icons/ionicons-outline/Cash' 
import {AttachMoney} from '@styled-icons/material/AttachMoney'

export default function Dashboard() {
    
    const [saldoTotal, setSaldoTotal] = React.useState(0)
    const [saldo, setSaldo] = React.useState(0)
    const [despesas, setDespesas] = React.useState(0) 
    const [credito, setCredito] = React.useState(0)

    const [saldoList, setSaldoList] = React.useState([])
    const [despesaList, setDespesaList] = React.useState([])
    const [creditoList, setCreditoList] = React.useState([])
    const [listaTop5, setListaTop5] = React.useState([])

    //lista que constem os dados do grafico geral
    const [list, setList] = React.useState([
                                            ['Mes', 'Saldo'],
                                            ['Jan',  0],
                                            ['Fev',  0],
                                            ['Mar',  0],
                                            ['Abr',  0],
                                            ['Mai',  0],
                                            ['Jun',  0],
                                            ['Jul',  0],
                                            ['Ago',  0],
                                            ['Set',  0],
                                            ['Out',  0],
                                            ['Nov',  0],
                                            ['Dez',  0],
                                        ])

    function createListData() {
        const listAux = list
        
        listAux.forEach((el) => {
            saldoList.forEach((s) => {
                //Considereando que a data esta sempre na forma '01 jan'
                let getMes = s.data.split(" ")[1].toUpperCase();
                if(el[0].toUpperCase() === getMes) {
                    el[1] = el[1] + s.valor
                }
            })

            creditoList.forEach((c) => {
                let getMes = c.data.split(" ")[1].toUpperCase();
                if(el[0].toUpperCase() === getMes) {
                    el[1] = el[1] - c.valor
                }
            })
        })

        setList(listAux)
    }

    function calculaSaldoTotal(saldos, despesas) {
        let s = saldos.reduce((acc, curr) => {
            return acc + curr.valor
        }, 0)
        
        let despesa = despesas.reduce((acc, curr) => {
            return acc + curr.valor
        }, 0)
        let total = (s - despesa).toFixed(2)
        setSaldoTotal(total)
    }

    function calculaSaldo() {
        let s = saldoList.reduce((acc, curr) => {
            return acc + curr.valor
        }, 0)
        setSaldo(s)
    }
    function calculaDespesa() {
        let despesa = despesaList.reduce((acc, curr) => {
            return acc + curr.valor
        }, 0)
        setDespesas(despesa)
    }

    function calculaCredito() {
        let credit = creditoList.reduce((acc, curr) => {
            return acc + curr.valor
        }, 0)
        console.log(creditoList)
        setCredito(credit)
    }

    //pega as ultimas 5 despesas
    function getTop5() {
        let aux = []
        saldoList.forEach(el => aux.push({tipo: 'saldo', ...el}))
        despesaList.forEach(el => aux.push({tipo: 'despesa', ...el}))
        creditoList.forEach(el => aux.push({tipo: 'credito', ...el}))

        setListaTop5(aux)
    }

    //PEGA AS LISTAS: SALDO CREDITO E DESPESASA
    React.useEffect(async () => {
      await DataBase.fetchDespesas().then(res => setDespesaList(res))
      await DataBase.fetchSaldo().then(res => setSaldoList(res))
      await DataBase.fetchCredito().then(res => setCreditoList(res))

    }, [])
    
    //SETA OS VALORES DOS CARDS SEMPRE QUE AS LISTAS ATUALIZAM
    React.useEffect(() => {
        if(saldoList && despesaList && creditoList) {
            calculaSaldoTotal(saldoList, despesaList)
            calculaCredito()
            calculaDespesa()
            calculaSaldo()
            createListData()
            getTop5()
        }
    }, [saldoList, despesaList, creditoList])
    
    return (
        <Container>
            <Head>
                <Titulo>Overview</Titulo>
            </Head>
            <CardRow>
                <ItemGeral>
                    <h3 >Geral</h3>
                    <CardGeral valor={saldoTotal} data={list}>
                    </CardGeral>
                </ItemGeral>
                <ItemFinancas>
                    <h3 style={{marginLeft: 32}}>Suas financas</h3>
                    
                    <MiniCardWrapper>
                    <MiniCards color={'#E5DEF0'}>
                        <h4>Gasto</h4>
                        <MiniCardContent>R${despesas}</MiniCardContent>
                        <IconWrrapper>

                            <AttachMoney size={40}></AttachMoney>
                        </IconWrrapper>
                    </MiniCards>
                    <MiniCards color={'#D6EDDA'}>
                        <h4>Recebido</h4>
                        <MiniCardContent>R${saldo}</MiniCardContent>
                        <IconWrrapper>
                            <Cash size={40}></Cash>
                        </IconWrrapper>
                    </MiniCards>
                    <MiniCards color={'#F6F0D8'}>
                        <h4>Credito</h4>
                        <MiniCardContent>R${credito}</MiniCardContent>
                        <IconWrrapper>
                            <CreditCard size={40}></CreditCard>
                        </IconWrrapper>
                        
                    </MiniCards>
                    </MiniCardWrapper>
                    
                </ItemFinancas>
            </CardRow>
            <CardRow>
                {listaTop5 && <ListaTop5 top5={listaTop5}></ListaTop5>}
            </CardRow>
        </Container>
    )
}

import React from 'react'
import { 
    Container, 
    Titulo, 
    Head, 
    CardRow, 
    ItemGeral, 
    CardGeral, 
    MiniCards, 
    MiniCardWrapper, 
    ItemFinancas } from './styles'
import firebase from "gatsby-plugin-firebase"

export default function Dashboard() {
    
    const [saldoTotal, setSaldoTotal] = React.useState()
    const [saldo, setSaldo] = React.useState()
    const [despesas, setDespesas] = React.useState() 
    const [credito, setCredito] = React.useState()

    const [saldoList, setSaldoList] = React.useState()
    const [despesaList, setDespesaList] = React.useState()
    const [creditoList, setCreditoList] = React.useState()

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

    React.useEffect(async () => {
      const db = firebase.firestore()
      await db.collection("despesas").get().then((querySnapshot) => {
        let itens = []
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
           itens.push({
            id: doc.id,
            ...doc.data()
          }) 
        });

        //console.log(itens)
        setDespesaList(itens)
      });
      await db.collection("saldo").get().then((querySnapshot) => {
        let itens = []
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
           itens.push({
            id: doc.id,
            ...doc.data()
          }) 
        });

        //console.log(itens)
        setSaldoList(itens)
      });
      await db.collection("credito").get().then((querySnapshot) => {
        let itens = []
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
           itens.push({
            id: doc.id,
            ...doc.data()
          }) 
        });

        //console.log(itens)
        setCreditoList(itens)
      });

    }, [])
    
    React.useEffect(() => {
        if(saldoList && despesaList && creditoList) {
            calculaSaldoTotal(saldoList, despesaList)
            calculaCredito()
            calculaDespesa()
            calculaSaldo()
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
                    <CardGeral>
                        R${saldoTotal && saldoTotal}
                    </CardGeral>
                </ItemGeral>
                <ItemFinancas>
                    <h3 style={{marginLeft: 32}}>Suas financas</h3>
                    
                    <MiniCardWrapper>
                    <MiniCards color={'#E5DEF0'}>
                        Gasto
                        <div>R${despesas}</div>
                    </MiniCards>
                    <MiniCards color={'#D6EDDA'}>
                        Recebido
                        <div>R${saldo}</div>
                    </MiniCards>
                    <MiniCards color={'#F6F0D8'}>
                        Credito
                        <div>R${credito}</div>
                    </MiniCards>
                    </MiniCardWrapper>
                    
                </ItemFinancas>
            </CardRow>
        </Container>
    )
}

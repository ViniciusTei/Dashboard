import React from 'react'
import { Container, Titulo, Head } from './styles'
import firebase from "gatsby-plugin-firebase"

export default function Dashboard() {
    const [saldo, setSaldo] = React.useState()
    const [despesas, setDespesas] = React.useState()
    const [credito, setCredito] = React.useState()

    React.useEffect(() => {
      const db = firebase.firestore()
      db.collection("despesas").get().then((querySnapshot) => {
        let itens = []
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
           itens.push({
            id: doc.id,
            ...doc.data()
          }) 
        });

        console.log(itens)
        setDespesas(itens)
      });
      db.collection("saldo").get().then((querySnapshot) => {
        let itens = []
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
           itens.push({
            id: doc.id,
            ...doc.data()
          }) 
        });

        console.log(itens)
        setSaldo(itens)
      });
      db.collection("credito").get().then((querySnapshot) => {
        let itens = []
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
           itens.push({
            id: doc.id,
            ...doc.data()
          }) 
        });

        console.log(itens)
        setCredito(itens)
      });
    }, [])
    return (
        <Container>
            <Head>
                <Titulo>Overview</Titulo>
            </Head>
            
        </Container>
    )
}

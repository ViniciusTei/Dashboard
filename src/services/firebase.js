import firebase from "gatsby-plugin-firebase"


const db = firebase.firestore()
let saldo = []
let despesas = []
let credito = []

export const DataService = {
    fetchSaldo: async () => {
        let itens = []
        await db.collection("saldo").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`);
               itens.push({
                id: doc.id,
                ...doc.data()
              }) 
            })
        });
        saldo = itens
        return itens;
    },

    fetchDespesas: async () => {
        let itens = []
        await db.collection("despesas").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`);
               itens.push({
                id: doc.id,
                ...doc.data()
              }) 
            })
        });
        despesas = itens
        return itens;
    },

    fetchCredito: async () => {
        let itens = []
        await db.collection("credito").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`);
               itens.push({
                id: doc.id,
                ...doc.data()
              }) 
            })
        });
        credito = itens
        return itens;
    },

    getSaldo: () => saldo,
    getDespesas: () => despesas,
    getCredito: () => credito,
    getTop5: () => {
        console.log('top 5 mais recentes')
    }
}
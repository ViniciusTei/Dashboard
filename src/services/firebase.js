import firebase from "gatsby-plugin-firebase"


const db = firebase.firestore()

export const DataBase = {
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
        
        return itens;
    }
}
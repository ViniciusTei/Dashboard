import React from 'react'

import {Container,Header, ListItem, List, Icon, Detalhes} from './styles'
//icons
import {CreditCard} from '@styled-icons/bootstrap/CreditCard'
import {Cash} from '@styled-icons/ionicons-outline/Cash' 
import {AttachMoney} from '@styled-icons/material/AttachMoney'

export default function ListaTop5({top5}) {

    function getIconTipo(tipo) {
        
        if(tipo === 'saldo') {
            return <Cash size={30}></Cash>
        }

        if(tipo === 'despesa') {
            return <AttachMoney size={30}></AttachMoney>
        }

        return <CreditCard size={30}></CreditCard>
    }
    return (
        <Container>
            <Header>Detalhes</Header>
            <List>
                {top5.map((item) => 
                <ListItem key={item.id}>
                    <Icon>
                        {getIconTipo(item.tipo)}
                    </Icon>
                    <Detalhes>
                        <div style={{fontWeight: 'bold'}}>{item.descricao}</div>
                        <div>{item.titulo}</div>
                    </Detalhes>
                    <div>{item.data}</div> 
                    <div>{item.tipo}</div>
                    <div style={{marginRight: 8}}>R${item.valor.toFixed(2)}</div>
                </ListItem>
                )}
            </List>
            
        </Container>
    )
}

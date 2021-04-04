import React from 'react'

import {Container,Header, ListItem, List, Icon, Detalhes, Title, Dropdown, DropdownContent} from './styles'
//icons
import {CreditCard} from '@styled-icons/bootstrap/CreditCard'
import {Cash} from '@styled-icons/ionicons-outline/Cash' 
import {AttachMoney} from '@styled-icons/material/AttachMoney'

//DataBase
import { DataService } from '../../services/firebase'

export default function ListaTop5({top5}) {
    const [current, setCurrent] = React.useState(top5)
    const [dropdown, serDropdown] = React.useState('Top5')

    async function changeCurrent(tipo) {
        if(tipo === 'saldo') {
            let list = await DataService.fetchSaldo();
            setCurrent(list.length >= 5 ? list.slice(0,4) : list)           
        }

        if(tipo === 'despesas') {
            let list = await DataService.fetchDespesas();
            setCurrent(list.length >= 5 ? list.slice(0,4) : list) 
        }
        if(tipo === 'credito') {
            let list = await DataService.fetchCredito();
            setCurrent(list.length >= 5 ? list.slice(0,4) : list) 
        }

        return setCurrent(top5);
    }

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
            <Header>
                <Title>Detalhes</Title>
                {/* <Dropdown>
                    <input value={dropdown}/>
                    <DropdownContent>
                        <div>Saldo</div>
                        <div>Despesas</div>
                        <div>Credito</div>
                    </DropdownContent>
                </Dropdown> */}
            </Header>
            <List>
                {current.map((item) => 
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

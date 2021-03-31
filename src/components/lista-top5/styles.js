import styled from 'styled-components'

export const Container = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    padding-top: 2.5rem;
    height: 360px;
    overflow-y: auto; 


    & ${'::-webkit-scrollbar'} {
    width: 10px;
    }

    /* Track */
    & ${'::-webkit-scrollbar-track'} {
    background: #f1f1f1;
    }

    /* Handle */
    & ${'::-webkit-scrollbar-thumb'} {
    background: #888;
    }

    /* Handle on hover */
    & ${'::-webkit-scrollbar-thumb:hover'} {
    background: #555;
    }
`

export const Header = styled.div`
    font-size: 2rem;
    font-weight: bold;
    position: fixed;
    background: #fff;
    width: 600px;
`

export const List = styled.div`
    max-height: 286px;
    overflow-y: auto; 
    margin-top: 60px;
`

export const ListItem = styled.div`
    width: 100%;
    height: 74px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`

export const Icon = styled.div`
    width: 50px;
    height: 50px;
    background: linear-gradient(0deg, #222222, #222222), linear-gradient(0deg, #222222, #222222), linear-gradient(0deg, #222222, #222222), #222222;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`

export const Detalhes = styled.div`
    display: flex;
    flex-direction: column;
`
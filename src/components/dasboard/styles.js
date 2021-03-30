import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    height: 78vh;
    background: #FFFFFF;
    border-radius: 45px;
    padding: 2.4rem;
    color: #000 !important;
    display: flex;
    flex-direction: column;
`

export const Titulo = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 52px;
    /* identical to box height */

    letter-spacing: 0.02em;
    margin: 0;
`

export const Head = styled.header`
    margin: 0;
`

export const CardRow = styled.section`
    min-height: 300px;
    display: flex;
`

export const ItemGeral = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 27.5px;
    width: 30%;
`

export const ItemFinancas = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 27.5px;
    width: 70%;
    max-height: 354px;
`


export const MiniCardWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 0;
`
export const MiniCards = styled.div`
    width: 33%;
    max-width: 194px;
    height: 244px;

    background: ${props => props.color};
    border-radius: 24px;
    margin-left: 2rem;

    display: flex;
    flex-direction: column;
    padding-left: 1rem;

    & ${'h4'} {
        font-size: 1.265rem;
        margin-top: 1rem;
        margin-bottom: 0;
    }
`

export const MiniCardContent = styled.div`
    font-size: 1rem;
    margin-bottom: 3rem;
`

export const IconWrrapper = styled.div`
    width: 56px;
    height: 56px;
    background: #FFFFFF;
    border-radius: 14px;
    justify-self: flex-start;

    padding: .5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1.5rem;
`
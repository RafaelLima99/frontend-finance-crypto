import * as React from 'react';
import {Table, Thead, TbodyTr} from './Table.style'
import Container from '@mui/material/Container';
import Router from 'next/router'

 const TabelaPura = () => {

    return (
        <Container>
        <Table>
            <Thead>
                <tr>
                    <td>Modeda</td>
                    <td>Investimento</td>
                    <td scope="col" >Lucro</td>
                </tr>
            </Thead>
            <tbody>
            
                <TbodyTr onClick={(e) =>  Router.push('/show/' + 1) }>
                   <td>CAKEUSDT</td>
                   <td>$20</td>
                   <td> - 12 </td>
                
                </TbodyTr>
               
                <TbodyTr>
                    <td>dd</td>
                   <td>eee</td>
                   <td>fff</td>
                </TbodyTr>
            </tbody>
        </Table>
        </Container>
    )
}

export default TabelaPura;

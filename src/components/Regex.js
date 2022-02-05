import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';
import '../css/regex.css';

function Regex(){
    return (
        <>
            <div className='container mt-5'>
                <h4 ><Link to={'/'} >Go back to Main</Link></h4>
                <p>Wrap up the numbers with curly braces</p>
                <table>
                    <tr>
                        <th>Regex</th>
                        <th>Matches any string that</th>
                    </tr>
                    <tr>
                        <td>^Year [1-4]$ or ^Year\s[1-4]1 
                        </td>
                        <td>Year X" where X is a digit between 1 and 4</td>
                    </tr>
                    <tr>
                        <td>^[A-Z]{4} \d{4}$</td>
                        <td>Four uppercase letters, one space, four digits</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                {/* <br></br><br></br><img src="../images/.jpg" alt="image" width={500} height={500}/> */}
            </div>
        </>
    )
}
export default withRouter(Regex);
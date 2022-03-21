import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';
import '../css/regex.css';

function Regex(){
    return (
        <>
            <div className='container mt-5 mb-5'>
                <h4 ><Link to={'/'} >Go back to Main</Link></h4>
                <p>Wrap up the numbers with curly braces</p>
                <table>
                    <tr>
                        <th>Regex</th>
                        <th>Matches any string that</th>
                    </tr>
                    <tr>
                        <td>\w or [0-9a-zA-Z_]</td>
                        <td>To find letters, numbers and underscore characters</td>
                    </tr>
                    <tr>
                        <td>\W or ^[0-9a-zA-Z_]</td>
                        <td>To find other than letters, numbers and underscore characters</td>
                    </tr>
                    <tr>
                        <td>\d</td>
                        <td>To find only number characters</td>
                    </tr>
                    <tr>
                        <td>\D</td>
                        <td>To find non-numeric characters</td>
                    </tr>
                    <tr>
                        <td>\s</td>
                        <td>To find only space characters</td>
                    </tr>
                    <tr>
                        <td>\S</td>
                        <td>To find non-space characters</td>
                    </tr>
                    <tr>
                        <td>^</td>
                        <td>Matches the beginning of the string or line</td>
                    </tr>
                    <tr>
                        <td>$</td>
                        <td>Matches the end of the string or line</td>
                    </tr>
                    <tr>
                        <td>i</td>
                        <td>Makes the expression case insensitive.</td>
                    </tr>
                    <tr>
                        <td>g</td>
                        <td>Ensures that the expression does not stop on the first match</td>
                    </tr>
                    <tr>
                        <td>m</td>
                        <td>If not enabled, line start and end equals the beginning and end of the entire string. It doesn't work for each row individually.</td>
                    </tr>
                    <tr>
                        <td>()</td>
                        <td>Groups as expression</td>
                    </tr>
                    <tr>
                        <td>(?:)</td>
                        <td>Makes a grouping that cannot be referenced.</td>
                    </tr>
                    <tr>
                        <td>(?=)</td>
                        <td>positive Lookahead</td>
                    </tr>
                    <tr>
                        <td>(?!)</td>
                        <td>Negative Lookahead</td>
                    </tr>
                    <tr>
                        <td>^[A-Z]{4} \d{4}$</td>
                        <td>Four uppercase letters, one space, four digits</td>
                    </tr>
                    <tr>
                        <td>^[0-9] or ^\d</td>
                        <td>To find only numbers at the beginning of a line</td>
                    </tr>
                    <tr>
                        <td>^Year [1-4]$ or ^Year\s[1-4] 1 
                        </td>
                        <td>Year X" where X is a digit between 1 and 4</td>
                    </tr>
                </table>
                {/* <br></br><br></br><img src="../images/.jpg" alt="image" width={500} height={500}/> */}
            </div>
        </>
    )
}
export default withRouter(Regex);
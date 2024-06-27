import React from 'react';

export default function NklListUsers({ renderNklListUsers }) {
    console.log("NklListUsers:", renderNklListUsers);
    // Display data
    let nklElementUser = renderNklListUsers.map((nklUser, index) => {
        return (
            <tr key={index}>
                <td>{nklUser.id}</td>
                <td>{nklUser.UserName}</td>
                <td>{nklUser.Password}</td>
                <td>{nklUser.Email}</td>
                <td>{nklUser.Phone}</td>
                <td>...</td>
            </tr>
        )
    });

    return (
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>UserName</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Chuc nang</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nklElementUser}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
import React from "react";
class UserRegistration extends React.Component
{
    render()
    {
        return(<div>
            <h1>New User Registration</h1>
            <table>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>E-Mail Id</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Mobile No</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>User Id</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Confirm Password</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" value="Reset" />
                        </td>
                        <td>
                            <input type="button" value="Register User" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>);
    }
}
export default UserRegistration;
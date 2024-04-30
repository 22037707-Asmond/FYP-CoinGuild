import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-center align-items-center">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <br/>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary submitBtn">Submit</button>
                </form>
            </div>

            <Footer />
        </>
    );
};

export default Login;
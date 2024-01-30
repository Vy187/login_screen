const Login = () => {
    const content = (
        <main className="full-screen-container">
            <section className="login-container">
                <form className="form">
                    <fieldset className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"></input>
                        <span className="message">Valid email</span>              
                    </fieldset>

                    <fieldset className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="Ppassword" name="password" id="password"></input>
                        <span className="message">Valid password</span>              
                    </fieldset>

                    <button type="submit" className="login-button">Login</button>
                </form>
            </section>
      </main>
    );

    return content;
};

export default Login;

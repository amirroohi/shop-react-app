const LoginPage = () => {
  return (
    <div className="form">
      <form className="loginForm">
        <div>
          <label>FullName </label>
          <input type="text"  required />
        </div>
        <div>
          <label>password </label>
          <input type="password" required />
        </div>
        <div>
          <label>repeat </label>
          <input type="password" required />
        </div>

        <div>
          <button class="button" type="submit">
            Submit
          </button>
          <button class="button" type="reset">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

const login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-5 bg-gray-100 shadow-inner rounded-md h-auto">
        <form onSubmit={(e) => e.preventDefault()} action="#" className="max-w-[380px] w-full">
          <input
            type="email"
            placeholder="example@gmail.com"
            className="p-3 border-spacing-1 my-2 w-full rounded focus:outline-1 focus:outline-green-500 "
            required
          />
          <input
            type="password"
            placeholder="********"
            className="p-3 border-spacing-1 my-2 w-full rounded focus:outline-1 focus:outline-green-500 "
            required
          />
          <input type="submit" value="Login" className="p-3 border-spacing-1 my-2 w-full bg-blue-600 text-white rounded cursor-pointer" />
        </form>
      </div>
    </div>
  );
};

export default login;

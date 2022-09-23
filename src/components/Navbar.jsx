const Navbar = () => {
    const logout = () =>{
        localStorage.removeItem('auth');
        window.location.reload();
    }


    return (
        <div>
            <div className="fixed top-0 w-full flex justify-center bg-violet-700 py-6">
                <h1 className="m-auto translate-x-10 text-3xl text-white font-Nunito">Meng-Quiez</h1>
                <button onClick={logout} className="mr-7 text-white bg-violet-500 p-2 rounded-3xl font-Lato">Logout</button>
            </div>
        </div> 
    );
}
export default Navbar;
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Welcome = () => {
    const logout = () =>{
        localStorage.removeItem('auth');
        window.location.reload();
    }

    const navigate = useNavigate();

    const mengerjakan = () => {
        navigate('/dashboard/kuis/1')
    }

    return (
        <div>
            {<Navbar />}
            <div className="bg-violet-200">
                <div className="flex w-full justify-center items-center min-h-screen">
                    <button type="submit" className="border-2 text-white border-lime-600 p-5 rounded-2xl bg-lime-500 shadow-xl hover:-translate-y-4 transition duration-500 font-Lato" onClick={mengerjakan}>Klik Untuk Mengerjakan</button>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
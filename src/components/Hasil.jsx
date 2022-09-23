import Navbar from "./Navbar"

const Hasil = () => {
    return (
        <div>
            {<Navbar />}
            <div className="flex justify-center items-center min-h-screen text-lg font-Nunito bg-violet-200">
                <div className="flex shadow-2xl rounded-2xl w-[80%] p-10 bg-violet-400">
                    <div className="    text-white flex-col">
                        <h1 className=" mb-4 text-2xl">Hasil Score: {localStorage.getItem('score')}</h1>
                        <h3 className="mb-4 mt-8">Jawaban Benar : {localStorage.getItem('benar').length}</h3>
                        <h3 className="">Jawaban Salah: {localStorage.getItem('salah').length}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hasil;
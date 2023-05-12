export default function Body() {
    return (
        <>
            <main className="flex flex-col gap-2 w-full h-screen justify-center items-center">
                <h1 className="text-xl font-semibold leading-9 font-ubuntu tracking-tight text-gray-100 sm:text-2xl sm:leading-10 md:leading-14">Clima - São Paulo/SP</h1>

                <div className="flex flex-col w-4/5 h-auto max-w-[400px] bg-white bg-opacity-10 rounded-lg">
                    <div className="flex justify-between items-center p-4">
                        <div className="flex flex-col xs:flex-row xs:gap-4 items-center">
                            <img src="/public/assets/chuva.png" alt="Chuva" className="w-14 md:w-16" />

                            <div className="grid">
                                <p className="flex gap-0.5 items-start text-zinc-100 text-2xl md:text-4xl lg:text-5xl font-bold font-poppins">
                                    12 <span className="text-xs md:text-sm mt-1 md:mt-0 text-zinc-200">Cº</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end font-semibold text-zinc-200">
                            <p className="text-xl md:text-2xl font-bold">Clima</p>
                            <p className="text-sm md:text-base text-zinc-300">Quinta-feira, 15:00</p>
                            <p className="text-sm md:text-base text-zinc-300">Chuva forte</p>
                        </div>

                    </div>

                    <div className="flex flex-col p-4 text-xs md:text-sm text-zinc-300 font-roboto font-semibold">
                        <p>Temperatura: 12 Cº</p>
                        <p>Umidade: 60%</p>
                        <p>Vento: 16km/h</p>
                    </div>
                </div>

            </main>
        </>
    )
}
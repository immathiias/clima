import { useEffect, useState } from "react"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'

/* eslint-disable no-unused-vars */
export default function Body() {
    const [cityValue, setCityValue] = useState('')
    const [cityInfos, setCityInfos] = useState()

    dayjs.locale("pt-br")
    const apiKey = "4c27f45dbb6999339d2022b568cb4704"

    useEffect(() => {
        async function defaultCity() {
            const sp = `https://api.openweathermap.org/data/2.5/weather?q=São%20Paulo&units=metric&appid=${apiKey}&lang=pt_br`

            const res = await fetch(sp)
            const data = await res.json()

            setCityInfos(data)
        }

        defaultCity()
    }, [])

    async function handleChangeCityData() {
        if (cityValue === undefined || cityValue === null) {
            alert("Digite o nome da cidade.")
            return;
        }
        const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiKey}&lang=pt_br`

        const res = await fetch(weatherAPI)
        const data = await res.json()

        setCityInfos(data)
        setCityValue('')
    }

    return (
        <main className="flex w-full h-screen justify-center items-center">

            <div className="flex flex-col p-4 w-4/5 h-auto max-w-[360px] bg-white bg-opacity-10 rounded-lg">
                <h3 className="text-center text-zinc-200 font-poppins font-semibold">Digite o nome da cidade:</h3>

                <div className="flex gap-2 justify-center items=center mt-1">
                    <input
                        type="text"
                        className="w-full max-w-[220px] font-ubuntu text-zinc-50 text-lg bg-blue-600 bg-opacity-40 py-1 px-2 rounded outline-none"
                        value={cityValue}
                        onChange={(e) => setCityValue(e.target.value)}

                    />

                    <button
                        className="bg-blue-600 px-2 py-1 rounded text-zinc-200 font-semibold"
                        onClick={() => handleChangeCityData()}
                    >
                        Ver
                    </button>
                </div>

                <div className="mx-auto mt-4 w-4/5 h-[1px] rounded bg-zinc-300" />

                <div className="flex gap-2 justify-center items-center mt-2">
                    <h4 className="text-xl font-semibold leading-9 font-ubuntu tracking-tight text-gray-100 sm:text-2xl sm:leading-10 md:leading-14">{cityInfos?.name}</h4>
                    <img src={`https://flagsapi.com/${cityInfos?.sys?.country}/flat/64.png`} alt="" className="w-8 h-8" />
                </div>

                <div className="flex gap-4 p-4 justify-center items-center">

                    <div className="grid">
                        <p className="flex gap-1 items-start text-zinc-100 text-6xl font-poppins">
                            {Math.round(cityInfos?.main?.temp)} <span className="text-2xl text-zinc-200">Cº</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center font-semibold text-zinc-200">
                    {cityInfos?.weather !== undefined ?
                        <div className="flex gap-1 items-center">
                            <img src={`http://openweathermap.org/img/wn/${cityInfos?.weather[0]?.icon}.png`} alt="" />
                            <span className="text-sm md:text-base text-zinc-300 capitalize">{cityInfos?.weather[0].description}</span>
                        </div>
                        :
                        'Não encontrado.'
                    }
                    <p className="text-sm md:text-base text-zinc-300 capitalize">{dayjs(new Date()).format('dddd - HH:mm')}</p>
                </div>

                <div className="flex flex-col p-4 text-center text-xs md:text-sm text-zinc-300 font-roboto font-semibold">
                    <p>Umidade: {cityInfos?.main?.humidity}%</p>
                    <p>Vento: {cityInfos?.wind?.speed}km/h</p>
                </div>

            </div>


        </main>
    )
}
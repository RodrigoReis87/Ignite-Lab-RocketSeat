import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import imgUrl from '../../src/assets/code-mockup.png'
import { Footer } from "../components/Footer";

export function Subscribe() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event?.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full items-center justify-between mt-20 mx-auto 
            tablet:inline tablet:max-w-[460px] 
            laptop:flex laptop:max-w-[844px]
            desktop:flex desktop:max-w-[1100px]">
                <div className="tablet:max-w-[640px] 
                laptop:max-w-[1024px] 
                desktop:max-w-[1280px]">
                    <Logo />

                    <h1 className="mt-8 tablet:text-[2.5rem] leading-tight tablet:text-center laptop:text-left desktop:text-left">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong> , do zero, com <strong className="text-blue-500">React</strong>
                    </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed tablet:text-center laptop:text-left desktop:text-left">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">
                        Inscreva-se gratuitamente
                    </strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu e-mail"
                            onChange={event => setEmail(event.target.value)}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>

            <img src={imgUrl} className="mt-10" alt="" />

            <div className="flex w-full items-center">
                <Footer />
            </div>

        </div>

    )
}
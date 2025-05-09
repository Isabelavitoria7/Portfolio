import Link from "next/link"

export default function NotFound(){
    return (
        <div className="flex flex-col items-center justify-center bg-dark">
            <h1 className="text-center font-bold mt-9 text-6xl">Página não encontrada</h1>
            <p>Tentou encontrar e não conseguiu</p>
            <Link href='/'>
                Voltar para Home
            </Link>
        </div>
    )
}
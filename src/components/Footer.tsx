import { LogoFooter } from "./Logo";

export function Footer() {
    return (
        <footer className="flex flex-1 bg-gray-900 border-t border-gray-600 justify-between">
            <div className="flex p-2 gap-4 items-center">
                <LogoFooter />
                <span className="text-sm">
                    Rocketseat - Todos os direitos reservados
                </span>
            </div>
            <div className="flex p-2 items-center justify-end">
                <span className="text-sm">
                    Políticas de privacidade
                </span>
            </div>
        </footer>
    )
}
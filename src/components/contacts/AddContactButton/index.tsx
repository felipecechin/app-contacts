import { Button } from './styles'
import { FaPlus } from 'react-icons/fa'

interface IAddContactButtonProps {
    onClick: () => void
}

export default function AddContactButton({ onClick }: IAddContactButtonProps) {
    return (
        <Button
            type='button'
            onClick={onClick}
        >
            <FaPlus />
            Novo contato
        </Button>
    )
}

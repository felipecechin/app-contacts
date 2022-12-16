import { Container } from './styles'

interface IMainContentProps {
    children: React.ReactNode
}

export default function MainContent({ children }: IMainContentProps) {
    return (
        <Container>
            <div>{children}</div>
        </Container>
    )
}

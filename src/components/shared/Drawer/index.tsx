import {
    Container,
    Content,
    ContentBody,
    ContentTitle,
    Overlay,
    dialogPanelStyles,
    dialogStyles,
    dialogTitleStyles,
} from './styles'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef } from 'react'

import { FaRegWindowClose } from 'react-icons/fa'

interface IDrawerProps {
    open: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
}

export default function Drawer({ open, onClose, title, children }: IDrawerProps): JSX.Element {
    const divFocusRef = useRef<HTMLDivElement>(null)

    return (
        <Transition.Root
            as={Fragment}
            show={open}
        >
            <Dialog
                as='div'
                onClose={onClose}
                initialFocus={divFocusRef}
                className={dialogStyles}
            >
                <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Overlay />
                </Transition.Child>
                <Container>
                    <div>
                        <div>
                            <Transition.Child
                                as={Fragment}
                                enter='transform transition ease-in-out duration-500'
                                enterFrom='translate-y-full sm:translate-y-0 sm:translate-x-full'
                                enterTo='translate-y-0 sm:translate-x-0'
                                leave='transform transition ease-in-out duration-500'
                                leaveFrom='translate-y-0 sm:translate-x-0'
                                leaveTo='translate-y-full sm:translate-y-0 sm:translate-x-full'
                            >
                                <Dialog.Panel className={dialogPanelStyles}>
                                    <Content>
                                        <ContentTitle>
                                            <Dialog.Title className={dialogTitleStyles}>{title}</Dialog.Title>
                                            <button
                                                onClick={onClose}
                                                type='button'
                                            >
                                                <span>Close panel</span>
                                                <FaRegWindowClose aria-hidden='true' />
                                            </button>
                                        </ContentTitle>
                                        <ContentBody>
                                            <div>
                                                <div ref={divFocusRef}>{children}</div>
                                            </div>
                                        </ContentBody>
                                    </Content>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Container>
            </Dialog>
        </Transition.Root>
    )
}

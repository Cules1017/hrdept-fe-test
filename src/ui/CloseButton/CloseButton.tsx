import { forwardRef } from 'react'
import type { CSSProperties, MouseEvent, ReactNode } from 'react'
import { cn } from '../../util/libs'
import { FileMinusIcon } from '@radix-ui/react-icons'

export interface CloseButtonProps {
    className?: string
    children?: ReactNode
    style?: CSSProperties
    absolute?: boolean
    defaultStyle?: boolean
    onClick?: (e: MouseEvent<HTMLSpanElement>) => void
}

const CloseButton = forwardRef<HTMLElement, CloseButtonProps>((props, ref) => {
    const { absolute, className, defaultStyle, ...rest } = props
    const closeButtonAbsoluteClass = 'absolute z-10'

    const closeButtonClass = cn(
        'close-btn',
        defaultStyle && 'close-btn-default',
        absolute && closeButtonAbsoluteClass,
        className
    )

    return (
        <span className={closeButtonClass} role="button" {...rest} ref={ref}>
            <FileMinusIcon />
        </span>
    )
})

CloseButton.displayName = 'CloseButton'

export default CloseButton

import React from 'react'

type Props = {
    name: string;
    description?: string;
    image: string;
}

const Class = ({ name, description, image }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex`;

    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <div className={overlayStyles}>
                <p>{name}</p>
                <p>{description}</p>
            </div>
            <img src={image} alt={`${image}`} />
        </li>
    )
}

export default Class
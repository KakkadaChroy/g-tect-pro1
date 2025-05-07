import React from "react";

interface ContainerPros {
    children: React.ReactNode;
    customClass?: string;
}

const Container = ({children, customClass}: ContainerPros) => {
    return (
        <>
            <div className={`${customClass} container mx-auto`}>
                {children}
            </div>
        </>
    )
}

export default Container;
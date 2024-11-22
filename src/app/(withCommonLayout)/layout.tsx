import React from "react";

const WithCommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            nav
            <div>{children}</div>
            footer
        </div>
    );
};

export default WithCommonLayout;

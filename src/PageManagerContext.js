import React from "react";

const PageManagerContext = React.createContext({
    page: null,
    pageSelected: (page) => {},
});

export default PageManagerContext;


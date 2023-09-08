import React from "react";
import { App } from "../../app/containers/App";
import {StaticRouter} from 'react-router-dom/server'
import {renderToString} from 'react-dom/server'
import { template } from "./template";


export const render = (url: string) => {

    const stream = renderToString(
        //location: server will look for the route needed to set as a string 
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    )

    const html = template(stream)
    
    return html;

}
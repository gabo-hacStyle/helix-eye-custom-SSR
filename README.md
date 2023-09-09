# Helix Eye

In this project you can see a buch number of galaxies brought from the NASA api itself!!!

##Dependencies

Though this project is a server side render app with TypeScript, Im not installing nextJs because this is mainly for learning purposes. Learning how a SSR works behind the scenes.
Using: 
- Express (server)
- TypeScript
- StyledComponents (Styles)

You can install all dependencies for this project using npm or yarn.


## Copyright
This is a project forked from https://github.com/platzi/helix-eye-custom-SSR. 
In this forked reppo I recreated the app that was running in the client, but running in the server instead

## Why SSR?

Well, the server side renderization is another option to the client-side-render, and this pattern is being used in most of the frontend environment currently. 
SSR means that our app would be first rendered in the server, and then given to the client.

Falta acaaaa...a.a.a.a

## Main changes
There´s a new folder called server/ inside the src/ folder. In this app we are creating a configuration for the server, and creating a renderization process. Also, besides the normal webpack config file or the client, I added a new file for the webpack config for the server itself. 
We are using Express as a server.
In here we are doing the routing system with StaticRouter instead of react-router-dom. 
Also the app in the server does a pre-fetching and injects all the data brought from the api, so that the client wont use data to fetch. 

The styles were configured to work within a SSR app, and you can see that on the StyledComponents documentation about SSR. But basically it creates a new Instance if styles, and  then wraps the whole app in that instance, collect the styles and gets the tags. 

## How it works

this whole thing works with an hydratazion process, which means that react instead of creating root (createRoot), it will hydrate the components previously rendered with new information, new interaction, etc. 
The server will first render a mockup, which you can find in src/server/render/template.tsx. 
Also, a stream has to be created. the stream will be the collection of the styes, the router of the server and the app with all the JS, this stream is in the src/server/index.tsx file, and this alongside othe initial props (can be the data brought from pre-fetching) and the style Tags are being passed and injected in the template.tsx file.

fallta acac. .. . 




























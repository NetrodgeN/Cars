import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './normalize.scss'
import {
    createRouter,
    RouterProvider,
} from "@tanstack/react-router";
import {routeTree} from "./routeTree.gen.ts";

import {ModalProvider} from "./context/modal-context/modal-provider.tsx";
const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
})
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = createRoot(rootElement)
    root.render(
        <StrictMode>
            <ModalProvider>
                <RouterProvider router={router} />
            </ModalProvider>
        </StrictMode>,
    )
}

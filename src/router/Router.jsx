import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../pages/atoms/Nav'
import Index from '../pages/Index'
import TodoPage from '../pages/TodoPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/index" element={<Index />} />
                <Route path="/todo" element={<TodoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
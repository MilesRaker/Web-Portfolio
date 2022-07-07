import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';

const Router = () => (
    <div>
        <Routes>
            <Route path='/' element={<Homepage />} />
        </Routes>
    </div>
)


export default Router;
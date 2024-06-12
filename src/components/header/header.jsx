import React from 'react';
import './header.css';
import SearchBar from '../searchBar/searchBar';

export default function Header() {

    return (
        <div className='containerHeader'>
            <h1 className='g_title'>TODO</h1>
            <SearchBar></SearchBar>
        </div>
    )
}

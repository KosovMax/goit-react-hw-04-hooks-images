import React, { useEffect, useMemo, useReducer, useState } from 'react';


import Loader from "react-loader-spinner";
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import hitsApi from './../services/hits-api'


function goPage(page, type){
    switch(type){
        case 'go':
            return page + 1;
        case 'clear':
            return 1
        default:
            throw new Error(`Unsuported action type ${type}`)

    }
}

export default function App(){

    const [galleries, setGallaries] = useState([])
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // const [srcModal, setSrcModal] = useState('');
    // const [showModal, setShowModal] = useState(false);
    const [modalState, setModal] = useState({
        show:false,
        // src:'',
        id:0
    })

    const [page, setPage] = useReducer(goPage, 0);


    useEffect(()=>{

        if(search.trim() === ''){
            return
        }
        
        setLoading(true);
    
        hitsApi.fetchHits({searchQuery:search, page:page})
        .then(data => {
            setGallaries(prevGallaries => [...prevGallaries, ...data])
        })
        .catch(error => setError(error))
        .finally(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
            setLoading(false);
        })
    }, [search, page]);


    const updateSerach = (query) =>{
        if(search !== query){
            setSearch(query)
            setGallaries([])
            setPage('clear');
        }    
    }

    const getIdModal = useMemo(()=>{
        return galleries.find((item) => {return item.id === modalState.id});
    }, [galleries, modalState.id])

    const showIdModel = (id) =>{
        setModal(prevModal => ({...prevModal, id:id}))
        // toggleModal();
        setModal(prevModal => ({...prevModal, show:true}))
    }

    console.log(modalState);

    const toggleModal = () =>{
        setModal(prevModal => ({...prevModal, show:!prevModal.show}))
    }


    return (
           <div className="App">   
                <Searchbar onSearch={updateSerach} />
                {error && <p>Whoops, something went wrong: {error.message}</p>}
                {galleries.length > 0 && <ImageGallery imageGalleries={galleries} showIdModel={showIdModel} /> }
                {loading && <Loader type="Oval" color="#00BFFF" height={100} width={100} style={{textAlign:"center"}} />}
                {galleries.length > 0 && <Button onClick={()=>setPage('go')} >Load more</Button>}
                {modalState.show && <Modal src={getIdModal.largeImageURL} closeModal={toggleModal} />}
           </div>
        );
}
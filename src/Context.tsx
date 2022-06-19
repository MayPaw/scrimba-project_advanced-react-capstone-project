import { useState, createContext, useEffect } from 'react'

interface Photos {
    url:string,
    id: string,
    isFavorite: boolean
}

interface ContextValue {
    photos: Photos[] ,
    toggleFavorite?: Function,
    cartPhotos: Photos[]
    addToCart?: Function,
    removeFromCart?: Function,
    emptyCart?: Function,
}

type Props = {
    children?: React.ReactNode
}

const Context = createContext <ContextValue> ({photos: [], cartPhotos: []})

function ContextProvider (props: Props) {
    const [photos, setPhotos] = useState <Photos[]>([])
    const [cartPhotos, setCartPhotos] = useState <Photos[]>([])


    function toggleFavorite (id: string) {
        setPhotos(prevPhotos => {
            return prevPhotos.map(photo => photo.id === id? {...photo, isFavorite: !photo.isFavorite} : photo)
        })      
    }

    function addToCart (photo: Photos) {
        setCartPhotos(prevCartPhotos => {
            return [...prevCartPhotos, photo]
        })
    }

    function removeFromCart (id: string) {
        setCartPhotos(prevCartPhotos => {
            return prevCartPhotos.filter(cartPhoto => cartPhoto.id !== id)
        })
    }

    function emptyCart () {
        setCartPhotos([])
    }

    useEffect(()=> {
        async function getPhotos () {
            try {
                const res = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
                const data = await res.json()
                setPhotos(data)   
            } catch (err){
                console.error(err)
            }
        }

        getPhotos()

    }, [])

    return (
        <Context.Provider value = {{photos, toggleFavorite, cartPhotos, emptyCart, addToCart, removeFromCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
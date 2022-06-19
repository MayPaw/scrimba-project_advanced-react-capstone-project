import React, { useContext } from 'react'
import Image from '../components/Image'
import { Context } from '../Context'
import getClass from '../utils/getClass'

function Photos() {
    const {photos} = useContext(Context)
    console.log(photos.length)

    return (
        <div className = "container mx-auto">
            <main className = 'grid [grid-template-columns:_repeat(auto-fit,_minmax(200px,_1fr))] gap-1'>
                {
                    photos.map((photo, i) => (
                        <Image key = {photo.id} 
                        photo = {photo} 
                        containerClass = {`${getClass(i)}`}
                        class = 'object-cover h-[100%] w-[100%]'/>))
                }
                
            </main>
        </div>
    )
}

export default Photos
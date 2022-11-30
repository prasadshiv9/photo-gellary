import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import  Img1 from './img/img1.jpg';
import  Img2 from './img/img2.jpg';
import  Img3 from './img/img3.jpg';
import  Img4 from './img/img4.jpg';
import  Img5 from './img/img5.jpg';
import  Img6 from './img/img6.jpg';
import  Img7 from './img/img7.jpg';
import  Img8 from './img/img8.jpg';
import  Img9 from './img/img9.jpg';
import  Img10 from './img/img10.jpg';
import './gallery.css'


const Gallery = () => {
    let data=[
        {
            id:1,
            imgs: Img1
        },
        {
            id:2,
            imgs: Img2
        },
        {
            id:3,
            imgs: Img3
        },
        {
            id:4,
            imgs: Img4
        },
        {
            id:5,
            imgs: Img5
        },
        {
            id:6,
            imgs: Img6
        },
        {
            id:7,
            imgs: Img7
        },
        {
            id:8,
            imgs: Img8
        },
        {
            id:9,
            imgs: Img9
        },
        {
            id:10,
            imgs: Img10
        }
    ]
    const [model, setModel]=useState(false);
    const [tempScr, setTempScr]=useState('');

    const getImg=(img)=>{
        setTempScr(img);
        setModel(true)
    }
  return (
    <>
    <div className={model? "model open": "model"}>
        <img src={tempScr} />
        <CloseIcon onClick={()=>setModel(false)} />
    </div>
    <div className='gallery'>
        {
            data.map((pic,index)=>{
                return(
                    <div className='pics' key={index} onClick={()=> getImg(pic.imgs)} >
                        
                        <img src={pic.imgs} style={{width:'100%'}}  />
                    </div>
                )
            })
        }
    </div>
    </>
    
  )
}

export default Gallery
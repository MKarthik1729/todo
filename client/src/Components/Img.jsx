import React, { useState } from 'react'

function Img() {
    const [photo, setPhoto] = useState()
    return (
        <div className='cardx'>
            <h5>Profile Pic</h5>
            <div>
                <img
                    className='circle'
                    src={(photo ? photo : 'https://th.bing.com/th/id/OIP.W81yzpMIz1_1wlH5t4peJgHaEo?w=285&h=180&c=7&r=0&o=5&pid=1.7')}
                />
                <br /><br />
                <input
                    onChange={(e) => { setPhoto(URL.createObjectURL(e.target.files[0])) }}
                    type='file' />
            </div>
        </div>
    )
}

export default Img
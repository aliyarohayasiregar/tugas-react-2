import React from 'react'
import KotakTeks from "./KotakTeks"
import "./Tombol"
import Tombol from './Tombol'

function Login() {
    return (
        <>
            <label htmlFor="">Email </label>
            <KotakTeks name="password" /> <br /> <br />
            <label htmlFor="">Password </label>
            <KotakTeks name="teks" /> <br />

            <Tombol />
        </>
    )
}

export default Login
import { useEffect, useRef } from 'react'
import '../toggle.css'

export default function ToggleSwitch({ playNextVidRef }) {
    const checkboxRef = useRef();
    useEffect(() => {
        if (localStorage.getItem('yt-auto') === 'true') checkboxRef.current.checked = true
    }, [])
    function handleAutoPlay() {
        const yt = localStorage.getItem('yt-auto')
        console.log(yt)
        if (yt === 'true') {
            localStorage.setItem('yt-auto', 'false')
        } else {
            localStorage.setItem('yt-auto', 'true')
        }
        playNextVidRef.current = localStorage.getItem('yt-auto')
    }

    return (
        <label className="switch" title='autoplay'>
            <input type="checkbox" ref={checkboxRef} onClick={handleAutoPlay}/>
                <span className="slider round"></span>
        </label>
    )
}

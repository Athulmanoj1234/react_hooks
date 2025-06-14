"use client"
import React, { useEffect, useRef } from 'react'

const AccessingInDom = () => {
    const inputElement = useRef<HTMLInputElement | null>(null);
    const trueOrFalse = useRef<boolean>(false);
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        //inputElement.current?.focus(); //helps to fous the input when the component is mounted
        inputElement.current?.blur();
    }, []);

    const setView = () => {
        trueOrFalse.current = !trueOrFalse.current;
        console.log(trueOrFalse.current);
        //closing the dialog
        inputElement.current?.blur();
        dialogRef.current?.close();  //close function helps to clos the dialog window
        buttonRef.current?.blur();
        
    }

    // useEffect(() => {
    //      console.log(trueOrFalse.current);
    // }, [trueOrFalse.current]);
    //value should be taken separately by useState and refs can be update by ref.current
   
return (
    <div className=''>
        <input type="text" ref={inputElement} placeholder='type something...' />
        <dialog ref={dialogRef}>
            <h1>opens dialog</h1>
        </dialog>
        <button onClick={setView} ref={buttonRef}>enable view</button>
        {
            trueOrFalse.current ? <h1>true</h1> : <h1>false</h1>
        }
    </div>
  )
}

export default AccessingInDom

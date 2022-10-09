

import React, { useState } from 'react'

export default function About(props) {
    return (
        <>
            <div className="container"   >
                <h2 className="my-5"    style={{color:props.mode==='dark'?'#ecb365':'black'}}>About Wordplay</h2>
                <div>
                    <div className="accordion" id="accordionExample" >
                        <div className="accordion-item"   style={{backgroundColor: props.mode==='dark'?'#064663':'white',color:props.mode==='light'?'black':'#ecb365'}}>
                            <h2 className="accordion-header" id="headingOne" style={{backgroundColor: props.mode==='dark'?'#064663':'#0D43CB',color:props.mode==='light'?'white':'#ecb365'}}>
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='dark'?'#064663':'white',color:props.mode==='light'?'black':'#ecb365'}}>
                                    NOTE
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                                <div className="h5"  style={{backgroundColor: props.mode==='dark'?'#064663':'white',color:props.mode==='dark'?'#ecb365':'black'}}>
                                    <strong>Wordplay is an application that is used to manipulate your text.</strong>Wordplay is a powerful suite of browser-based text manipulation tools to easily perform specialized text manipulation tasks that are impossible using 
                                    traditional text editors. Instruction and examples can be found at the bottom of each tool's controls but most tools are self explanatory. Working of text often requires use of multiple tools, so for your convenience the working-text will pass between tool pages without the need to reload. Below is a list of available tools with a
                                      short description to help determine what tool(s) will meet your needs.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
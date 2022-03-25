import React from 'react';

const InputBox = () => {

    const getInputValue = (event)=>{
        // show the user input value to console
        const userValue = event.target.value;

        console.log(userValue);
    };


    return (
        <div class="container overflow-hidden">
            <div class="row gx-5 my-5">
                <div class="col">
                    <div class="p-3 border bg-light mx-5">
                        <h3 className='mb-4'>Deposite</h3>
                        <div className='d-flex'>
                        <input className='form-control w-75 mx-auto' type="text" onChange={getInputValue}/>
                        <button className='btn btn-primary'>Click</button>
                        </div>
                    </div>
                 </div>
                 <div class="col">
                    <div class="p-3 border bg-light mx-5">
                        <h3 className='mb-4'>Withdraw</h3>
                        <div className='d-flex'>
                        <input className='form-control w-75 mx-auto' type="text" />
                        <button className='btn btn-primary'>Click</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputBox;
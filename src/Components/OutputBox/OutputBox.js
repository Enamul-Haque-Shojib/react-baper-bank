import React from 'react';

const OutputBox = () => {
    return (
        <div class="container my-5">
            <div class="row gx-5">
                <div class="col">
                    <div class="p-3 border bg-light">
                        <h3>Deposite</h3>
                        <h3>$<span>00</span></h3>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3 border bg-light">
                    <h3>Withdraw</h3>
                        <h3>$<span>00</span></h3>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3 border bg-light">
                    <h3>Balance</h3>
                        <h3>$<span>00</span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutputBox;
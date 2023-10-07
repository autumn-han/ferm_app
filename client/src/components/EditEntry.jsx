import React from 'react';

const EditEntry = (props) => {
    const { onSubmitProp } = props;
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({}, id)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='entryDate'>Entry Date</label>
                    <input type='date' name='entryDate' value={entryDate} onChange={(e) => setEntryDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='entryText'>Entry Text</label>
                    <input type='text' name='entryText' value={entryText} onChange={(e) => setEntryText(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default EditEntry;
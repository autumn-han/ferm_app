import React, { useState } from 'react';

const ProjectForm = (props) => {
    const { onSubmitProp, iTitle, iStart, iEnd, iStatus, iDesc } = props;
    const [ title, setTitle ] = useState(iTitle);
    const [ startDate, setStartDate ] = useState(iStart);
    const [ endDate, setEndDate ] = useState(iEnd);
    const [ status, setStatus ] = useState(iStatus);
    const [ desc, setDesc ] = useState(iDesc);
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ title, startDate, endDate, status, desc });
        setTitle("");
        setStartDate("");
        setEndDate("");
        setStatus("");
        setDesc("");
    };
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <label className='form-label' htmlFor="title">Title: </label>
                    <input className='form-control' type='text' name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label className='form-label' htmlFor="startDate">Start Date: </label>
                    <input className='form-control' type='date' name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div>
                    <label className='form-label' htmlFor="endDate">End Date: </label>
                    <input className='form-control' type='date' name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <div>
                    <label className='form-label' htmlFor="status">Status: </label>
                    <select className='form-control' name="status" value={status} onChange={(e) => setStatus(e.target.value)} >
                        <option value='Primary'>Primary</option>
                        <option value='Secondary'>Secondary</option>
                        <option value='Aging'>Aging</option>
                        <option value='Complete'>Complete</option>
                    </select>
                </div>
                <div>
                    <label className='form-label' htmlFor="desc">Description: </label>
                    <textarea className='form-control' type='textarea' name="desc" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>
                <button className='btn btn-success mt-3'>Submit</button>
            </form>
        </div>
    )
};

export default ProjectForm;


